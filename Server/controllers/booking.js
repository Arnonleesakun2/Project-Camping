const prisma = require("../config/prisma");
const { calTotal } = require("../utils/booking");
const renderError = require("../utils/renderError");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.listbookings = async (req, res, next) => {
  try {
    const { id } = req.user;
    const bookings = await prisma.booking.findMany({
      where: {
        profileId: id,
      },
      include: {
        camping: {
          select: {
            id: true,
            title: true,
          },
        },
      },
      orderBy: {
        checkIn: "asc",
      },
    });
    res.json({result: bookings});
  } catch (error) {
    next(error);
  }
};
exports.createBooking = async (req, res, next) => {
  try {
    const { campingId, checkIn, checkOut } = req.body;
    const { id } = req.user;
    await prisma.booking.deleteMany({
      where: {
        profileId: id,
        paymentStatus: false,
      },
    });
    const camping = await prisma.camping.findFirst({
      where: {
        id: campingId,
      },
      select: {
        price: true,
      },
    });
    if (!camping) {
      return renderError(400, "Camping notfound");
    }
    const result = calTotal(checkIn, checkOut, camping.price);

    // console.log(id,campingId,checkIn,checkOut,result.total,result.totalNight)
    const booking = await prisma.booking.create({
      data: {
        profileId: id,
        campingId: campingId,
        checkIn: checkIn,
        checkOut: checkOut,
        total: result.total,
        totalNights: result.totalNight,
      },
    });

    const bookingId = booking.id;
    res.json({ message: "Create Booking Successfully", result: bookingId });
  } catch (error) {
    next(error);
  }
};

exports.checkOut = async (req, res, next) => {
  try {
    const { id } = req.body;
    const booking = await prisma.booking.findFirst({
      where: {
        id: Number(id),
      },
      include: {
        camping: {
          select: {
            id: true,
            secure_url: true,
            title: true,
          },
        },
      },
    });
    if (!booking) return renderError(404, "Not Found");
    const { total, totalNights, checkIn, checkOut, camping } = booking;
    const { title, secure_url } = camping;
    //stripe
    const session = await stripe.checkout.sessions.create({
      ui_mode: "embedded",
      metadata: { bookingId: booking.id },
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "thb",
            product_data: {
              name: title,
              images: [secure_url],
              description: "Thank You",
            },
            unit_amount: total * 100,
          },
        },
      ],
      mode: "payment",
      return_url: `http://localhost:5173/user/complete/{CHECKOUT_SESSION_ID}`,
    });

    res.send({ clientSecret: session.client_secret });
  } catch (error) {
    next(error);
  }
};

exports.checkOutStatus = async (req, res, next) => {
  try {
    const { session_id } = req.params;
    const session = await stripe.checkout.sessions.retrieve(session_id);

    const bookingId = session.metadata?.bookingId;
    if (session.status !== "complete" || !bookingId) {
      return renderError(400, "Checkout Failed");
    }

    const result = await prisma.booking.update({
      where: {
        id: Number(bookingId),
      },
      data: {
        paymentStatus: true,
      },
    });
    res.json({ message: "Payment Complete", status: session.status });
  } catch (error) {
    next(error);
  }
};

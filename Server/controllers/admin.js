const prisma = require("../config/prisma");

exports.listStats = async (req, res, next) => {
  try {
    const users = await prisma.profile.count();
    const bookings = await prisma.booking.count({
      where: {
        paymentStatus: true,
      },
    });
    const campings = await prisma.camping.count();
    res.json({ users, bookings, campings });
  } catch (error) {
    next(error);
  }
};

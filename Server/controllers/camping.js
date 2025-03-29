const prisma = require("../config/prisma");

exports.listCamping = async (req, res, next) => {
  try {
    const { id } = req.params;
    const campings = await prisma.camping.findMany({
      include: {
        favorites: {
          where: {
            profileId: id,
          },
          select: {
            id: true,
          },
        },
      },
    });

    const campingWithLink = campings.map((item) => {
      return { ...item, isFavorite: item.favorites.length > 0 };
    });
    res.json({ result: campingWithLink });
  } catch (error) {
    next(error);
  }
};

exports.listCampingUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    const campings = await prisma.camping.findMany({
      where: {
        profileId: id,
      },
      include: {
        _count: {
          select: {
            favorites: true, // นับจำนวน favorites ที่เกี่ยวข้องกับ camping นี้
          },
        },
      },
    });
    const result = campings.map((camp) => ({
      ...camp,
      totalLikes: camp._count.favorites, // จำนวนไลค์ของแคมป์นี้
    }));
    res.json({ result: result });
  } catch (error) {
    next(error);
  }
};

exports.deleteCamping = async (req, res, next) => {
  try {
    const { id } = req.body;
    // 🔹 ลบ Favorites ที่เกี่ยวข้อง
    await prisma.favorite.deleteMany({
      where: { campingId: Number(id) },
    });

    // 🔹 ลบ Bookings ที่เกี่ยวข้อง
    await prisma.booking.deleteMany({
      where: { campingId: Number(id) },
    });
    const result = await prisma.camping.delete({
      where: {
        id: Number(id),
      },
    });
    res.json({ result: result, message: "Delete Sucessfully" });
  } catch (error) {
    next(error);
  }
};

exports.readCamping = async (req, res, next) => {
  try {
    const { id } = req.params;
    const camping = await prisma.camping.findFirst({
      where: {
        id: Number(id),
      },
      include: {
        _count: {
          select: {
            favorites: true, // นับจำนวน favorites ที่เกี่ยวข้องกับ camping นี้
          },
        },
      },
    });
    const result = {
      ...camping,
      totalLikes: camping._count.favorites, // ✅ เอาจำนวนไลค์มาใช้
    };
    res.json({ result: result });
  } catch (error) {
    next(error);
  }
};

exports.createCamping = async (req, res, next) => {
  try {
    const { title, description, price, category, lat, lng, image } = req.body;
    console.log(image);
    const { id } = req.user;
    const profile = await prisma.profile.findUnique({
      where: { clerkid: id }, // ตรวจสอบว่า id นี้มีในฐานข้อมูล Profile
    });
    if (!profile) {
      return res.status(400).json({
        message: "Profile not found. Please create a profile first.",
      });
    }
    if (!lat && !lng) {
      return res.status(400).json({
        message: "Please select a location.",
      });
    }
    const camping = await prisma.camping.create({
      data: {
        title: title,
        description: description,
        price: price,
        category: category,
        lat: lat,
        lng: lng,
        public_id: image.public_id,
        secure_url: image.secure_url,
        profileId: id,
      },
    });
    res.json({
      result: camping,
      message: "Created Camping Successfully",
    });
  } catch (error) {
    next(error);
  }
};

exports.createFavorite = async (req, res, next) => {
  try {
    const { id } = req.user;
    const { campingId, isFavorite } = req.body;
    let result;
    if (isFavorite) {
      result = await prisma.favorite.deleteMany({
        where: {
          profileId: id,
          campingId: campingId,
        },
      });
    } else {
      result = await prisma.favorite.create({
        data: {
          profileId: id,
          campingId: campingId,
        },
      });
    }
    res.json({
      message: isFavorite ? "Remove Favorite" : "Add Favorite",
      resutl: result,
    });
  } catch (error) {
    next(error);
  }
};

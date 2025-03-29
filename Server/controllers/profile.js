const prisma = require("../config/prisma");

exports.createProfile = async (req, res, next) => {
  try {
    const { firstname, lastname } = req.body;
    const { id } = req.user;
    const email = req.user.emailAddresses[0].emailAddress;
    const profile = await prisma.profile.upsert({
      where: { clerkid: id },//ค้นหาว่ามีหรือยัง
      create: {
        clerkid: id,
        firstName:firstname,
        lastName:lastname,
        email
      },
      update: {
        firstName: firstname,
        lastName: lastname,
        email
      }
    });
    res.json({ resule: profile, message: "Profile created successfully" });
  } catch (error) {
    next(error);
  }
};

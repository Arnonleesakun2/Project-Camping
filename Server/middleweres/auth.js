const renderError = require("../utils/renderError");
const { clerkClient } = require("@clerk/express");

exports.authCheck = async (req, res, next) => {
  try {
    const userId = req.auth.userId;
    if (!userId) {
      return renderError(401, "Unauthorized!!!");
    }
    const user = await clerkClient.users.getUser(userId);
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};

exports.adminCheck = async (req, res, next) => {
  try {
    const userId = req.auth.userId;
    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const user = await clerkClient.users.getUser(userId);
    const isAdmin = user._raw.private_metadata.isAdmin; // ดึงค่า isAdmin จาก Clerk
    if (!isAdmin) {
      return res.status(403).json({ message: "Forbidden: Admins only" });
    }
    next(); // ผ่าน -> ไปต่อ
  } catch (error) {
    next(error);
  }
};

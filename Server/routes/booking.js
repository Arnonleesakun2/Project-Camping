const express = require("express");
const router = express.Router();
const {
  listbookings,
  createBooking,
  checkOut,
  checkOutStatus,
} = require("../controllers/booking");

//middlewares
const { authCheck } = require("../middleweres/auth");

//ENDPOINT 5000 /api/bookings
router.get("/bookings", authCheck, listbookings);

//ENDPOINT 5000 /api/createbooking
router.post("/createbooking", authCheck, createBooking);

//ENDPOINT 5000 /api/checkout
router.post("/checkout", authCheck, checkOut);

//ENDPOINT 5000 /api/checkout-status
router.get("/checkout-status/:session_id", authCheck, checkOutStatus);

module.exports = router;

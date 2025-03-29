const express = require("express");
const router = express.Router();

//middlewares
const { authCheck } = require("../middleweres/auth");
const { createImage } = require("../controllers/cloundinary");



//ENDPOINT 5000 /api/images
router.post("/images", authCheck,createImage);


module.exports = router;
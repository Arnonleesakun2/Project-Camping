const express = require("express");
const router = express.Router();
const { createProfile } = require("../controllers/profile");

//middlewares
const { authCheck } = require("../middleweres/auth");



//ENDPOINT 5000 /api/createprofile
router.post("/createprofile", authCheck,createProfile);


module.exports = router;
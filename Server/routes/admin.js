const express = require("express");
const router = express.Router();
const { authCheck, adminCheck } = require("../middleweres/auth");
const { listStats } = require("../controllers/admin");

router.get("/stats", adminCheck, listStats);

module.exports = router;
const express = require("express");
const router = express.Router();
//controller
const {
  createCamping,
  listCamping,
  readCamping,
  createFavorite,
  listCampingUser,
  deleteCamping,
  filterCamping,
} = require("../controllers/camping");
//middlewares
const { authCheck, adminCheck } = require("../middleweres/auth");

//ENDPOINT 5000 /api/camping
router.get("/campings/:id", listCamping);
//ENDPOINT 5000 /api/campinguser/id
router.get("/campinguser/:id", authCheck, listCampingUser);
//ENDPOINT 5000 /api/camping/id
router.get("/camping/:id", readCamping);
//ENDPOINT 5000 /api/createcamping
router.post("/createcamping", authCheck, createCamping);
//ENDPOINT 5000 /api/deletecamping
router.delete("/deletecamping", authCheck, deleteCamping);
//ENDPOINT 5000 /api/createcamping
router.post("/favorite", authCheck, createFavorite);

router.get("/filter-camping", filterCamping);

module.exports = router;

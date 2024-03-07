const express = require("express");
const router = express.Router();
const User = require("../models/user");
const ClassroomController = require("../controller/classroomController");

router.get("/", function (req, res) {
  res.send("hello");
});

router.post("/add", ClassroomController.add);
router.get("/getall", ClassroomController.getall);
router.get("/getbyid/:id", ClassroomController.getbyid);
router.get("/getbyname/:name", ClassroomController.getbyname);
router.put("/update/:id", ClassroomController.update);
router.delete("/delete/:id", ClassroomController.deleteClassroom);

module.exports = router;

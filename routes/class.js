const express = require("express");
const router = express.Router();
const User = require("../models/user");
const classController = require("../controller/classController");

router.get("/", function (req, res) {
  res.send("hello");
});

router.post("/add", classController.add);
router.get("/getall", classController.getall);
router.get("/getbyid/:id", classController.getbyid);
router.get("/getbyname/:name", classController.getbyname);
router.put("/update/:id", classController.update);
router.delete("/delete/:id", classController.deleteClassroom);

module.exports = router;

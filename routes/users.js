const express = require("express");
const router = express.Router();
const User = require("../models/user");
const userController = require("../controller/userController");
const validate=require('../middill/validate')


router.get("/", function (req, res) {
  res.render("chat");
});



router.get("/:name/:email/:cin", function (req, res) {
  new User({
    name: req.params.name,
    email: req.params.email,
    cin: req.params.cin,
  }).save();
  res.send("test");
});

router.post("/add",validate, userController.add);
router.get("/getall", userController.getall);
router.get("/getbyid/:id", userController.getbyid);
router.get("/getbyname/:name", userController.getbyname);
router.put("/update/:id", userController.update);
router.delete("/delete/:id", userController.deleteuser);

module.exports = router;

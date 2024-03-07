const express = require("express");
const router = express.Router();

const partierController = require("../controller/partieController");
const validate = require("../middill/validate");

router.get("/partie", function (req, res) {
  res.render("partie");
});

router.post("/newjoueur", partierController.add);

router.get("/getalljoueur", partierController.getall);
router.get("/getjoueur/:id", partierController.getbyid);
router.post("/newpartie/:id1/:id2", partierController.addpartie);
router.put("/attaque/:id1/:id2", partierController.attaque);
//router.get("/getbyname/:name", partierController.getbyname);
//router.put("/update/:id", partierController.update);
router.delete("/supprimerjoueur/:id", partierController.deletejoueur);

module.exports = router;

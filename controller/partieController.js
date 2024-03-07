const Partie = require("../models/partie");
const Joueur = require("../models/joueur");

async function add(req, res) {
  console.log(req.body);
  try {
    const joueur = new Joueur({
      pseudo: req.body.pseudo,
      sante: 100,
      score: 0,
    });
    await joueur.save();
    res.status(200).send("add");
  } catch (err) {
    res.status(400).json({ error: err });
  }
}

async function getall(req, res) {
  try {
    const data = await Joueur.find();
    res.status(200).send(data);
  } catch (err) {
    res.status(400).json({ error: err });
  }
}
async function getbyid(req, res) {
  try {
    const data = await Joueur.findById(req.params.id);
    res.status(200).send(data);
  } catch (err) {
    res.status(400).json({ error: err });
  }
}

async function deletejoueur(req, res) {
  try {
    await Joueur.findByIdAndDelete(req.params.id);
    res.status(200).send("deleted");
  } catch (err) {
    res.status(400).json({ error: err });
  }
}

async function addpartie(req, res) {
  console.log(req.body);
  try {
    const partie = new Partie({
      nom: req.body.nom,
      joueur_1: req.params.id1,
      joueur_2: req.params.id2,
      etat: "En cours",
    });
    await partie.save();
    res.status(200).send("add");
  } catch (err) {
    res.status(400).json({ error: err });
  }
}

async function attaque(req, res) {
  //console.log(req.body);
  try {
    const j1u = await Joueur.findById(req.params.id1);
    const j2u = await Joueur.findById(req.params.id2);
    score1 = j1u.score + 10;
    sante1 = j2u.sante - 20;
    const a = await Joueur.findByIdAndUpdate(req.params.id1, { score: score1 });
    const b = await Joueur.findByIdAndUpdate(req.params.id2, { sante: sante1 });
    res.status(200).send("updated" + a + "  " + b);
  } catch (err) {
    res.status(400).json({ error: err });
  }
}

async function addpartiesocket(data) {
  //console.log(req.body);
  try {
    const partie = new Partie({
      nom: data.nom,
      joueur_1: data.id1,
      joueur_2: data.id2,
      etat: "En cours",
    });
    await partie.save();
    //res.status(200).send("add");
  } catch (err) {
    console.log(err);
  }
}

async function affichestatsocket(data) {
  try {
    const j1 = await Joueur.findById(data.id1);
    const j2 = await Joueur.findById(data.id2);
    const n = { j1, j2 };
    return n;
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  add,
  getall,
  getbyid,
  deletejoueur,
  addpartie,
  attaque,
  addpartiesocket,

  affichestatsocket,
};

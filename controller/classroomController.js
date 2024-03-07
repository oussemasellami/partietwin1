const Classroom = require("../models/classroom");

async function add(req, res) {
  console.log(req.body);
  try {
    const user = new Classroom(req.body);
    await user.save();
    res.status(200).send("add");
  } catch (err) {
    res.status(400).json({ error: err });
  }
}

async function getall(req, res) {
  try {
    const data = await Classroom.find();
    res.status(200).send(data);
  } catch (err) {
    res.status(400).json({ error: err });
  }
}
async function getbyid(req, res) {
  try {
    const data = await Classroom.findById(req.params.id);
    res.status(200).send(data);
  } catch (err) {
    res.status(400).json({ error: err });
  }
}

async function getbyname(req, res) {
  try {
    let name = req.params.name;
    const data = await Classroom.findOne({ name });
    res.status(200).send(data);
  } catch (err) {
    res.status(400).json({ error: err });
  }
}

async function update(req, res) {
  try {
    await Classroom.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).send("updated");
  } catch (err) {
    res.status(400).json({ error: err });
  }
}

async function deleteClassroom (req, res) {
    try {
      await Classroom.findByIdAndDelete(req.params.id);
      res.status(200).send("deleted");
    } catch (err) {
      res.status(400).json({ error: err });
    }
  }

  module.exports={add,getall,getbyid,getbyname,update,deleteClassroom}

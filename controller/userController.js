const User = require("../models/user");

async function add(req, res) {
  console.log(req.body);
  try {
    const user = new User(req.body);
    await user.save();
    res.status(200).send("add");
  } catch (err) {
    res.status(400).json({ error: err });
  }
}

async function addchat(data) {
  console.log(data);
  try {
    const user = new User(data);
    await user.save();
    res.status(200).send("add");
  } catch (err) {
    res.status(400).json({ error: err });
  }
}

async function getall(req, res) {
  try {
    const data = await User.find();
    res.status(200).send(data);
  } catch (err) {
    res.status(400).json({ error: err });
  }
}
async function getbyid(req, res) {
  try {
    const data = await User.findById(req.params.id);
    res.status(200).send(data);
  } catch (err) {
    res.status(400).json({ error: err });
  }
}

async function getbyname(req, res) {
  try {
    let name = req.params.name;
    const data = await User.findOne({ name });
    res.status(200).send(data);
  } catch (err) {
    res.status(400).json({ error: err });
  }
}

async function update(req, res) {
  try {
    await User.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).send("updated");
  } catch (err) {
    res.status(400).json({ error: err });
  }
}

async function deleteuser (req, res) {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).send("deleted");
    } catch (err) {
      res.status(400).json({ error: err });
    }
  }


  module.exports={addchat,add,getall,getbyid,getbyname,update,deleteuser}

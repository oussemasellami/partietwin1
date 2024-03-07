const mongo = require("mongoose");
const Schema = mongo.Schema;
const Classroom = new Schema({
  nameclass: String,
  nbrstudent: Number,
  Salle: Number,
});
module.exports = mongo.model("classroom", Classroom);

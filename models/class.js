const mongo=require("mongoose")
const Schema=mongo.Schema
const Class=new Schema({
    name:String,
    email:String,

})
module.exports=mongo.model("class",Class)
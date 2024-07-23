require('dotenv').config();
const mongoose = require("mongoose");

mongoose.connect(process.env.CONNECTION);

const dbSchema = mongoose.Schema({
  title:String,
  description:String,
  completed:Boolean
});

const todo = mongoose.model("todos", dbSchema);

module.exports={todo};
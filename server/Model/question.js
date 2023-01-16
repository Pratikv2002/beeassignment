const mongoose = require("mongoose");

const question = new mongoose.Schema({
    Question: {
      type: String,
      required: true,
    },
    Option1: {
      type: String,
      required: true,
    },
    Option2: {
      type: String,
      required: true,
    },
    Option3: {
      type: String,
      required: true,
    },
    Option4: {
      type: String,
      required: true,
    }
  });
  
  const questionModel = mongoose.model("question", question);
  
  module.exports = questionModel;
  
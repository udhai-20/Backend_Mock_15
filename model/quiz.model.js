const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var quizuserSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  difficulty: {
    type: String,
    required: true,
  },
  question: {
    type: String,
    required: true,
  },

  correct_answer: {
    type: String,
  },
  incorrect_answers: {
    type: Array,
  },
});

const UserModel = mongoose.model("Quizusers", quizuserSchema);
//Export the model
module.exports = { UserModel };

const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      unique: true
    },
    passwordHash: {
      type: String,
      required: true
    },
    campus: {
      type: String,
      required: true,
      values: [
        "Madrid",
        "Barcelona",
        "Miami",
        "Paris",
        "Berlin",
        "Amsterdam",
        "México",
        "São Paulo"
      ]
    },
    course: {
      type: String,
      required: true,
      values: ["Web Dev", "UX/UI", "Data Analytics"]
    },
    image: {
      type: String
    }
  });




module.exports = User;
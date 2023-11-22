const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: false },
    age: { type: Number, required: true, unique: false },
    gender: { type: String, required: true, unique: false },
  },
  {
    versionKey: false,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = { User };

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: false },
  age: { type: Number, required: true, unique: false },
  gender: { type: String, required: true, unique: false },
  //   _id: { type: Schema.types.ObjectId, required: true, unique: true },
});

userSchema.statics.findAll = function () {
  return this.find({});
};

module.exports = mongoose.model("User", userSchema);

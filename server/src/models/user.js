const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const userSchema = mongoose.Schema({

// })

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: false },
  age: { type: Number, required: true, unique: false },
  gender: { type: String, required: true, unique: false },
  // _id: { type: Schema.Types.ObjectId, required: true, unique: true },
});
// userSchema.statics.findAll = function () {
//   return this.find({});
// };

// userSchema.statics.create = function (payload) {
//   const user = new this(payload);
//   return user.save();
// };

const User = mongoose.model("User", userSchema);

module.exports = { User };

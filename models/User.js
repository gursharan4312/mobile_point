const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phoneno: { type: Number },
  address: { type: String, required: true },
  packageDetails: { type: String }
});

exports.User = mongoose.model("User", UserSchema);

exports.UserSchema = UserSchema;

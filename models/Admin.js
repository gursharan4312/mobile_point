const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adminSchema = new Schema({
  name: { type: String },
  email: { type: String, required: true },
  password: { type: String, minlength: 6, required: true }
});

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;

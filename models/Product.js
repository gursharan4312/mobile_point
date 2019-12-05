const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String }
});

exports.Product = mongoose.model("Product", ProductSchema);

exports.ProductSchema = ProductSchema;

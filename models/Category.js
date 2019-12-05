const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ProductSchema } = require("./Product.js");

const CategorySchema = new Schema({
  name: { type: String, required: true },
  products: [ProductSchema]
});

const Category = mongoose.model("Category", CategorySchema);

module.exports = Category;

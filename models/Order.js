const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { UserSchema } = require("./User");
const { PaymentSchema } = require("./Payment");

const OrderSchema = new Schema({
  productName: { type: String, required: true },
  productId: { type: String, required: true },
  quantity: { type: Number, default: 1 },
  totalPrice: Number,
  user: [UserSchema],
  payment: [PaymentSchema]
});

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;

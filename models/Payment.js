const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PaymentSchema = new Schema({
  name: { type: String, required: true },
  cardno: { type: Number, required: true },
  expiry: { type: Number, required: true },
  securityCode: { type: Number, required: true }
});

exports.Payment = mongoose.model("Payment", PaymentSchema);

exports.PaymentSchema = PaymentSchema;

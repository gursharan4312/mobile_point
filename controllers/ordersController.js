const mongoose = require("mongoose");
const Order = require("../models/Order.js");
const { User } = require("../models/User.js");
const { Payment } = require("../models/Payment.js");

const { validationResult } = require("express-validator");

exports.getOrders = (req, res, next) => {
  Order.find()
    .then(results => {
      res.send(results);
    })
    .catch(err => next(err));
};

exports.getOrder = (req, res, next) => {
  Order.findOne({ _id: mongoose.Types.ObjectId(req.params.id) })
    .then(results => {
      res.send(results);
    })
    .catch(err => next(err));
};

exports.postOrder = (req, res, next) => {
  const valErrors = validationResult(req).array();
  if (valErrors.length !== 0) res.status(422).send(valErrors);
  else {
    const { orderDetails, paymentDetails } = req.body;
    //creating new user
    let newUser = new User({
      name: orderDetails.userDetails.name,
      email: orderDetails.userDetails.email,
      phoneno: orderDetails.userDetails.phoneno,
      address: orderDetails.userDetails.address,
      packageDetails: orderDetails.userDetails.packageDetails
    });
    // //creating new payment type
    let newPayment = new Payment({
      name: paymentDetails.name,
      cardno: paymentDetails.cardno,
      expiry: paymentDetails.expiry,
      securityCode: paymentDetails.securityCode
    });
    // //saving all order details into one collection
    let newOrder = new Order({
      productName: orderDetails.productName,
      productId: orderDetails.productId,
      quantity: orderDetails.quantity,
      totalPrice: orderDetails.totalPrice,
      user: newUser,
      payment: newPayment
    });
    newOrder
      .save()
      .then(order => {
        res.send("Order save successfully");
      })
      .catch(err => next(err));
  }
};

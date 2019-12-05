const { check } = require("express-validator");
var validator = require("validator");

exports.userValidator = [
  check("orderDetails.userDetails.name", "please enter a valid name")
    .trim()
    .not()
    .isEmpty()
    .isLength({ min: 5, max: 30 })
    .withMessage("Name must be at least 5 to 30 characters long")
    .escape(),
  check("orderDetails.userDetails.email")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Email can't be empty")
    .escape(),
  check("orderDetails.userDetails.phoneno", "Enter valid Phone Number")
    .trim()
    .isLength({ min: 10 })
    .escape(),
  check("orderDetails.userDetails.address")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Please Enter address")
    .escape()
];

exports.paymentValidator = [
  check("paymentDetails.name", "please enter a valid name")
    .trim()
    .not()
    .isEmpty()
    .isLength({ min: 5, max: 30 })
    .withMessage("Name must be at least 5 to 30 characters long")
    .escape(),
  check("paymentDetails.cardno")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Card can't be Empty")
    .isLength({ min: 15 })
    .escape(),
  check("paymentDetails.expiry")
    .trim()
    .not()
    .isEmpty()
    .isLength({ min: 4, max: 4 })
    .escape(),
  check("paymentDetails.securityCode")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Please Enter valid security code")
    .isLength({ min: 3, max: 5 })
    .escape()
];

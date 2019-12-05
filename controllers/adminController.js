const Admin = require("../models/Admin.js");

exports.loginAdmin = (req, res, next) => {
  let { email, password } = req.body;
  Admin.findOne({ email })
    .then(result => {
      if (!result || result.password !== password) {
        res.send({ auth: false });
      } else {
        res.send({
          auth: true,
          result
        });
      }
    })
    .catch(err => next(err));
};

exports.postAdmin = (req, res, next) => {
  let newAdmin = new Admin(req.body);
  newAdmin
    .save()
    .then(result => res.send(result))
    .catch(err => next(err));
};

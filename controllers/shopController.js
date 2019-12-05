const { Product } = require("../models/Product.js");
const Category = require("../models/Category.js");

exports.getProducts = (req, res, next) => {
  Product.find()
    .then(results => {
      res.send(results);
    })
    .catch(err => next(err));
};

exports.getProduct = (req, res, next) => {
  Product.find({ _id: req.params.id })
    .then(results => {
      res.send(results);
    })
    .catch(err => next(err));
};

exports.getCategories = (req, res, next) => {
  Category.find()
    .then(results => {
      let categories = results.map(result => {
        return {
          _id: result._id,
          name: result.name
        };
      });
      res.send(categories);
    })
    .catch(err => next(err));
};
exports.getDetailCategories = (req, res, next) => {
  Category.find()
    .then(results => {
      res.send(results);
    })
    .catch(err => next(err));
};
exports.getCategory = (req, res, next) => {
  Category.findOne({ name: req.params.name })
    .then(results => res.send(results))
    .catch(err => next(err));
};

exports.postCategory = (req, res, next) => {
  let newCategory = new Category({
    name: req.body.name,
    products: []
  });
  newCategory
    .save()
    .then(results => {
      res.send(results);
    })
    .catch(err => next(err));
};
exports.postProduct = (req, res, next) => {
  let newProduct = new Product({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description
  });
  console.log(req.body);
  Category.findOne({ name: req.body.category }).then(category => {
    console.log(category);
    if (!category) res.send("not found");
    category.products.push(newProduct);
    category
      .save()
      .then(category => {
        res.send("Saved successfully");
      })
      .catch(err => next(err));
  });
};

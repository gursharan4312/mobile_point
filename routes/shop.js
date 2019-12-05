const router = require("express").Router();
const {
  getProducts,
  getProduct,
  getCategories,
  getDetailCategories,
  getCategory,
  postProduct,
  postCategory
} = require("../controllers/shopController.js");

router.get("/products", getProducts);
router.get("/product/:id", getProduct);
router.get("/categories", getCategories);
router.get("/categories/all", getDetailCategories);
router.get("/category/:name", getCategory);
router.post("/category", postCategory);
router.post("/product", postProduct);

const postRouter = router;

module.exports = postRouter;

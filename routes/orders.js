const router = require("express").Router();
const {
  getOrders,
  getOrder,
  postOrder
} = require("../controllers/ordersController.js");
const { userValidator, paymentValidator } = require("../validator");

router.get("/all", getOrders);
router.get("/:id", getOrder);
router.post("/", [userValidator, paymentValidator], postOrder);

const ordersRouter = router;

module.exports = ordersRouter;

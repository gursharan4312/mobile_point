const router = require("express").Router();

const ordersRouter = require("./orders.js");
router.use("/order", ordersRouter);

const adminRouter = require("./admin.js");
router.use("/admin", adminRouter);

const shopRouter = require("./shop.js");
router.use("/", shopRouter);

module.exports = router;

const router = require("express").Router();
const { loginAdmin, postAdmin } = require("../controllers/adminController.js");

router.post("/login", loginAdmin);
router.post("/", postAdmin);

const ordersRouter = router;

module.exports = ordersRouter;

const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin");
const isAuth = require("../middleware/is-auth");
const { body } = require("express-validator");

router.get("/add-product", isAuth, adminController.getAddProduct);
router.get("/products", adminController.getProducts);

router.post(
  "/add-product",
  isAuth,
  [
    body("title")
      .isString()
      .isLength({ min: 3 })
      .trim(),
    body("price").isFloat(),
    body("description")
      .isLength({ min: 4, max: 255 })
      .trim()
  ],
  adminController.postAddProduct
);

router.get("/edit-product/:productId", isAuth, adminController.getEditProduct);

router.post(
  "/edit-product",
  isAuth,
  [
    body("title")
      .isString()
      .isLength({ min: 3 })
      .trim(),
    body("price").isFloat(),
    body("description")
      .isLength({ min: 4, max: 255 })
      .trim()
  ],
  adminController.postEditProduct
);

router.delete("/product/:productId", isAuth, adminController.deleteProduct);

module.exports = router;

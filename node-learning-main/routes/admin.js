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
    body("description").isLength({ min: 4, max: 255 })
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
    body("imageUrl")
      .isLength({ min: 3 })
      .trim(),
    body("price").isFloat(),
    body("description").isLength({ min: 4, max: 255 })
  ],
  adminController.postEditProduct
);

router.post("/delete-product", isAuth, adminController.postDeleteProduct);

module.exports = router;

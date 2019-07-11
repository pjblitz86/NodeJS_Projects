const Product = require("../models/product");
const Order = require("../models/order");
const fs = require("fs");
const path = require("path");
const catchError = require("../util/catch500Error");

exports.getProducts = (req, res, next) => {
  Product.find()
    .then(products => {
      console.log(products);
      res.render("shop/product-list", {
        products: products,
        pageTitle: "All Products",
        path: "/products"
      });
    })
    .catch(err => catchError(err, next));
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId)
    .then(product => {
      res.render("shop/product-detail", {
        product: product,
        pageTitle: product.title,
        path: "/products"
      });
    })
    .catch(err => catchError(err, next));
};

exports.getIndex = (req, res, next) => {
  Product.find()
    .then(products => {
      res.render("shop/index", {
        products: products,
        pageTitle: "My Shop",
        path: "/"
      });
    })
    .catch(err => catchError(err, next));
};

exports.getCart = (req, res, next) => {
  req.user
    .populate("cart.items.productId")
    .execPopulate()
    .then(user => {
      const products = user.cart.items;
      res.render("shop/cart", {
        path: "/cart",
        pageTitle: "Your Cart",
        products: products
      });
    })
    .catch(err => catchError(err, next));
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId)
    .then(product => {
      return req.user.addToCart(product);
    })
    .then(result => res.redirect("/cart"))
    .catch(err => catchError(err, next));
};

exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  req.user
    .removeFromCart(prodId)
    .then(result => {
      res.redirect("/cart");
    })
    .catch(err => catchError(err, next));
};

exports.postOrder = (req, res, next) => {
  req.user
    .populate("cart.items.productId")
    .execPopulate()
    .then(user => {
      const products = user.cart.items.map(i => {
        return { quantity: i.quantity, product: { ...i.productId._doc } };
      });
      const order = new Order({
        user: {
          email: req.user.email,
          userId: req.user
        },
        products: products
      });
      return order.save();
    })
    .then(result => {
      return req.user.clearCart();
    })
    .then(() => res.redirect("/orders"))
    .catch(err => catchError(err, next));
};

exports.getOrders = (req, res, next) => {
  Order.find({ "user.userId": req.user })
    .then(orders => {
      res.render("shop/orders", {
        path: "/orders",
        pageTitle: "Your orders",
        orders: orders
      });
    })
    .catch(err => catchError(err, next));
};

exports.getInvoice = (req, res, next) => {
  const orderId = req.params.orderId;
  const invoiceName = `invoice-${orderId}.pdf`;
  const invoicePath = path.join('data', 'invoices', invoiceName);
  fs.readFile(invoicePath, (err, data) => {
    if(err) {
      return next(err);
    }
    res.send(data);
  });
}
const db = require("../util/database");
const Cart = require("./cart");

module.exports = class Product {
  constructor(id, title, imagUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imagUrl = imagUrl;
    this.description = description;
    this.price = price;
  }

  save() {}

  static deleteById(id) {}

  static fetchAll() {
    return db.execute("SELECT * FROM products");
  }

  static findById(id) {}
};

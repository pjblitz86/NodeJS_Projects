const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = callback => {
  MongoClient.connect(
    "mongodb+srv://pjblitz86:pjblitz86@cluster0-c1rev.mongodb.net/node-shop?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
    .then(client => {
      console.log("connected to mongodb");
      _db = client.db();
      callback();
    })
    .catch(err => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if(_db) {
    return _db;
  } else {
    throw 'No database found';
  }
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;

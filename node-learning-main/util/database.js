const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const mongoConnect = callback => {
  MongoClient.connect(
    "mongodb+srv://pjblitz86:pjblitz86@cluster0-c1rev.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
    .then(client => {
      console.log("connected to mongodb");
      callback(client);
    })
    .catch(err => console.log(err));
};

module.exports = mongoConnect;

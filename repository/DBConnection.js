

const MongoClient = require("mongodb").MongoClient;
const uri = 'mongodb://localhost:27017/impostos';

var db;

const initDB = function(callback) {
  const client = new MongoClient(uri, { useNewUrlParser: true });
  client.connect(err => {
    if(err) throw err;
    db = client.db("impostos");
    console.log('Banco conectado');
    if (callback && typeof callback == "function") {
        callback();
      }
  });
};

const getDB = function() {
  if (!db) {
    initDB();
  }
  return db;
};

module.exports = { initDB: initDB, getDB: getDB };

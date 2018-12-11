const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const dbUrl = 'mongodb+srv://stassamgin:UilicEz1Rxm32l42@cluster0-0lmbx.mongodb.net/test?retryWrites=true';
let _db;

const mongoConnect = callback => {
  MongoClient.connect(dbUrl)
    .then(result => {
      console.log('Connected');
      _db = result.db();
      callback(result);
    })
    .catch(err => {
      console.log(err)
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw 'No database';
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;




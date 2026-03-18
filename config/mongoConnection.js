import {MongoClient} from 'mongodb';

export const mongoConfig = {
  serverUrl: process.env.MONGODB_URI || 'mongodb://localhost:27017/',
  database: 'pupmap_db'
};

let _connection = undefined;
let _db = undefined;

export const dbConnection = async () => {
  if (!_connection) {
    _connection = await MongoClient.connect(mongoConfig.serverUrl);
    _db = _connection.db(mongoConfig.database);
  }

  return _db;
};
export const closeConnection = async () => {
  await _connection.close();
};

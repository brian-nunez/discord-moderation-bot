import mysql from 'mysql';
import getConfig from '../getConfig';

let connection = {};

export function connectDB() {
  const { sql } = getConfig();

  connection = mysql.createConnection(sql);
  
  connection.connect();

  return connection;
}

export function getConnection() {
  return connection;
}

export function query(QUERY) {
  return new Promise((resolve, reject) => {
    getConnection().query(QUERY, function (error, ...rest) {
      if (error) return reject(error);
      resolve(...rest);
    });
  });
}

export default {
  connectDB,
  getConnection,
  query,
};

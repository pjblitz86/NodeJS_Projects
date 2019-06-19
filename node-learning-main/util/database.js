const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'node_shop',
  password: 'juknelis86'
});

module.exports = pool.promise();
const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "bishal-server",
  password: "bishal1212",
  database: "airbnb",
});

module.exports = pool.promise();

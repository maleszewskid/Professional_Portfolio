var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    port: 3306,
    host: "fugfonv8odxxolj8.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "j10tsphsou0umuli",
    password: "zmm577mjv4zpa2sp",
    database: "om5j7gv59hua5y2e",
    insecureAuth : true
    });
  }
  
// Connect to the database
connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });

  require('dotenv').config(); // this is important!

module.exports = {
    "development": {
      "username": process.env.DB_USERNAME,
      "password": process.env.DB_PASSWORD,
      "database": process.env.DB_DATABASE,
      "host": process.env.DB_HOST,
      "dialect": "mysql"
  },
    "test": {
        "username": "root",
        "password": "",
        "database": "database_test",
        "host": "localhost",
        "dialect": "mysql"
    },
    "production": {
        "use_env_variable": "JAWSDB_URL",
        "dialect": "mysql"
    }
};

  
  // Export connection
  module.exports = connection;
  
//essentially an import statement stating this file requires the use of mySQL, so import it.
var mysql = require('mysql');

//standard create varialbe to establish connection with mySQL database
//this variable will be exported at the end so it can be shared/used/called by other files in the project.
var db_connect = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'data',
  password: 'password'
});

//perform the connection.  throw an error if fail or log a message.
db_connect.connect(function(err) {
  if (err) throw err;
  console.log("Connection established.");
});

//see line 5
module.exports = db_connect;
// Import mysql library to connect to mysql db
var mysql = require('mysql');

// create connection configuration obj to connect db
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'student',
  password : 'student',
  database : 'checkOutData'
});
 
// export the connection object (and methods) in order to manipulate and query the db
connection.connect();

module.exports = connection; //obj with query methods
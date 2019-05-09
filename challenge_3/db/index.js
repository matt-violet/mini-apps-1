// mysql module

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'student',
  password : 'student',
  database : 'checkOutData'
});
 
connection.connect();

module.exports = connection;
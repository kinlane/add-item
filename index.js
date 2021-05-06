// Added to handle injection
const vandium = require( 'vandium' );

var mysql  = require('mysql');

exports.handler = vandium.generic()
    .handler( (event, context, callback) => {

  var connection = mysql.createConnection({
    host     : process.env.host,
    user     : process.env.user,
    password : process.env.password,
    database : process.env.database
  });

  var sql = process.env.sql;

  connection.query(sql, function (error, results, fields) {

  callback( null, results );

  });
});

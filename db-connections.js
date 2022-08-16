var mysql = require('mysql');

var connection = mysql.createConnection({

    host:'restaurantdb.c0p9vh0kgujb.us-east-1.rds.amazonaws.com',

    port: '3306',

    user:'Administrator',

    password:'tG077032',

    database: 'restaurant_review'

});


connection.connect(err => {  // test out connetion and console.log error if there is one

    if (err) throw err;

    console.log('Connected To DB');

});



var express = require('express');
var app = express();
app.route('/mysql').get(fromMYSQL);


function fromMYSQL(request, respond){

    var sql = "Select * from restaurant";
connection.query(sql, function (err,result){
    console.log(result);
})

}

app.listen(3000);
console.log("http://127.0.0.1:3000/mysql");

module.exports = connection;
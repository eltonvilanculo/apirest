require('dotenv').config()

const mysql = require('mysql')
var connection =  mysql.createConnection({
    host: process.env.DB_HOST,
    user:  process.env.DB_USER,
    password: process.env.DB_PASS,
    database:  process.env.DB_NAME,
    multipleStatements:true


});

connection.connect((err)=>{

if(err){

    console.log(`Not connected ${err}`)
}else{
    console.log(`connected`)
}

})

module.exports = connection ; 
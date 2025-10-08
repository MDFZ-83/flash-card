const mysql = require('mysql2')

const pool = mysql.createPool({
    host : "localhost",
    user : "root",
    password : "m09374493060m", 
    database : "cards",    
}).promise()

module.exports = pool

const mysql = require('mysql');
const config = require('./dbConfig');

module.exports.request = (query) => new Promise((res, rej) => {
    const connection = mysql.createConnection({
        host: process.env.LOCAL ? 'localhost' : config.HOST,
        user: process.env.LOCAL ? 'root' : config.USER,
        password: process.env.LOCAL ? 'root' : config.PASSWORD,
        database: process.env.LOCAL ? 'ecomerce' : config.DB

    })
    connection.query(query, (error,data,fields)=>{
        if(error) rej(error)

        connection.end((err)=>{
            if(err) rej(err)
            res(data)
        })
    })
})
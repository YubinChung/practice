import express from 'express'
import mysql from 'mysql'

const connection = mysql.createConnection({
    host: 'localhost', // db ip address
    port: 3306, // db port number
    user: 'root', // db id
    password: '',
    database:'tasman'
});

connection.connect(function(err) {
    if (err) {
        console.error('mysql connection error');
        console.error(err);
        throw err;
    }else{
        console.log("연결에 성공하였습니다.");
    }
});


export default database;
var express = require('express');
var mysql = require('mysql');
var connect = mysql.createConnection(require('./config/database.js'));
let app = express();

const http = require('http');

app.get('/', (req, res) => {
    res.send('root - get');
});

app.post('/', (req, res) => {
    res.send('root - post');
});

app.get('/users', (req, res) => {
    connect.query('SELECT aibees from user', (err, rows) => {
        if(err) throw err;

        res.send(rows);
    });
});

app.post('/user', (req, res) => {
    let body = req.body;
    res.send("body : ", body);
});

http.createServer(app).listen(3000, () => {
    console.log("server on");
});
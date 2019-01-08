var express = require('express');
let app = express();

const http = require('http');

app.get('/', (req, res) => {
    res.send('root - get');
});

app.post('/', (req, res) => {
    res.send('root - post');
});

app.get('/users:id', (req, res) => {
    let param = req.params;
    let query = req.query;
    res.send("users get req", param, query);
});

app.post('/user', (req, res) => {
    let body = req.body;
    res.send("body : ", body);
});

http.createServer(app).listen(3000, () => {
    console.log("server open");
});
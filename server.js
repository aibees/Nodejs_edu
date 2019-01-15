const express = require('express');
let body = require('body-parser');
let app = express();

var mysql = require('mysql');
connect = mysql.createConnection(require('./config/database'))

app.use(body.urlencoded({extended:true}));
app.use(body.json());

const root_router = require('./routers/user');
app.use('/user', root_router);

app.listen(3000, 'localhost', () => {
    console.log('Server On');
});
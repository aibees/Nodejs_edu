var mysql = require('mysql');
var connect = mysql.createConnection(require('../config/database'));

const express = require('express');
const body = require('body-parser');
let app = express();
app.use(body.urlencoded({extended:true}));
app.use(body.json());
//request 객체의 body에 대한 url encoding의 확장을 할 수 있도록
//extended:true option을 설정한다.
//body.json()을 use하여 오는 데이터를 json형식으로 변환

exports.userget = function(req, res) {
    let param = req.params;
    let query = req.query;
    console.log(param, query);
    connect.query('select * from user where id=?',[query], (err, row, fields) => {
        res.send(row);
        console.log(row);
    });
};

exports.userpost = function(req, res) {
    console.log(req.body);
    res.send(req.body);
};
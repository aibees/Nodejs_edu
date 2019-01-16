const mysql = require('mysql');
const connect = mysql.createConnection(require('../config/database'));
//request 객체의 body에 대한 url encoding의 확장을 할 수 있도록
//extended:true option을 설정한다.
//body.json()을 use하여 오는 데이터를 json형식으로 변환

exports.userget = function(req, res) {
    console.log("user get");
    connect.query('select * from user', (err, row, fields) => {
        res.send(row);
        console.log(row);
    });
};

exports.usergetbyid = function(req, res) {
    console.log("user get by id");
    let query = req.params.id;
    console.log(query);
    connect.query('select * from user where id=?',[query], (err, row, fields) => {
        res.send(row);
        console.log(row);
    });
};

exports.userinsert = function(req, res) {
    console.log('user insert');
    const user = {
        'num' : req.body.num,
        'id' : req.body.id,
        'pwd' : req.body.pwd
    };
    connect.query('insert into user set ?', user, (err, row, fields) => {
        console.log(user);
        res.send("insert success");
    })
}

exports.userupdate = function(req, res) {
    console.log('user update');
    let query = req.params.id;
    const user = {
        'num' : req.body.num,
        'id' : req.body.id,
        'pwd' : req.body.pwd
    };
    connect.query('update user set ? where id=?', [user, query], (err, row, fields) => {
        console.log(user);
        res.send("update success");
    });
}

exports.userdelete = function(req, res) {
    console.log('user delete');
    let query = req.params.id;
    connect.query('delete from user where id = ?', [query], (err, row, fields) => {
        if(err)
            console.log(err);
        else {
            console.log('user delete');
            res.send('delete success');
        }
    })
}
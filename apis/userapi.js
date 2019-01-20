const {User} = require('../models');

exports.userget = function(req, res) {
    console.log("user get");
    User.findAll({})
    .then(users => res.send(users))
    .catch(err => res.status(500).send(err));
};

exports.usergetbyid = function(req, res) {
    console.log("user get by id");
    let query = req.params.id;
    console.log(query);
};

exports.userinsert = function(req, res) {
    console.log('user insert');
    User.create({
        nickname : req.body.nickname,
        ID : req.body.ID,
        password : req.body.password,
        email : req.body.email
    })
    .then(() => res.send("insert success"))
    .catch(err => res.status(500).send(err));
}

exports.userupdate = function(req, res) {
    console.log('user update');
    let query = req.params.id;
    const user = {
        'num' : req.body.num,
        'id' : req.body.id,
        'pwd' : req.body.pwd
    };
}

exports.userdelete = function(req, res) {
    console.log('user delete');
    let query = req.params.id;
   /*  connect.query('delete from user where id = ?', [query], (err, row, fields) => {
        if(err)
            console.log(err);
        else {
            console.log('user delete');
            res.send('delete success');
        }
    }) */
}
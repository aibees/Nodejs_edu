const {User} = require('../models');

exports.userget = function(req, res) {
    console.log("user get");
    User.findAll({row : true})
    .then(users => res.send(users))
    .catch(err => res.status(500).send(err));
};

exports.usergetbyid = function(req, res) {
    console.log("user get by id");
    let query = req.params.id;
    User.findAll({
        where : {
            ID : query
        }
    })
    .then(user => res.send(user))
    .catch(err => res.status(500).send(err));
    console.log(query);
};

exports.userinsert = function(req, res) {
    console.log('user insert');
    User.findOrCreate({
        where : {nickname : req.body.nickname},
        defaults : {
            nickname : req.body.nickname,
            ID : req.body.ID,
            password : req.body.password,
            email : req.body.email
        }
    })
    .spread((result, created) => {
        if(created) {
            console.log(results);
            res.send("insert success");
        }
        else {
            res.send("already exist");
        }
    })
    .catch(err => res.status(500).send(err));
}

exports.userupdate = function(req, res) {
    console.log('user update');
    User.update({
            nickname : req.body.nickname,
            ID : req.body.ID,
            password : req.body.password,
            email : req.body.email
        }, {
            where : {
                ID : req.body.ID
            }
        }
    )
    .then(() => res.send("update success"))
    .catch(err => res.status(500).send(err));
}

exports.userdelete = function(req, res) {
    console.log('user delete');
    let query = req.params.id;
    User.destroy({
        where : {
            ID : query
        }
    })
    .then(() => res.send("delete success"))
    .catch(err => res.status(500).send(err));
}
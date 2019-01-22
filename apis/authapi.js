const {User} = require('../models');
const sessionapi = require('./sessionapi');

exports.init = function(req, res) {
     var sess = req.session;
     sess.logined = true;
     res.send(sess);
 }

exports.loginget = (req, res) => {
    if(req.session.logined) {
        console.log("loginget - logined true : ", req.session);
        res.render('logout', {id : req.session.ID});
    } else {
        console.log("loginget - logined false : ", req.session);
        res.render('login');
    }
}

exports.loginpost = (req, res) => {
    console.log("req body : ", req.body);
    
    User.findOne({
        where : {
            ID : req.body.id
        }
    })
    .then(user => {
        console.log("find complete");
        console.log("req body : ", req.body);
        if(req.body.id == user.ID && req.body.pwd == user.password) {
            req.session.logined = true;
            req.session.ID = user.ID;
            console.log("login success");
            console.log("arter login success : ", req.session);
        } else {
            res.send("login failed");
        }
    })
    .then(() => res.redirect('/auth/login'))
    .catch(err => res.status(500).send(err));
}

exports.logout = (req, res) => {
    req.session.destroy();
    res.redirect('/');
}
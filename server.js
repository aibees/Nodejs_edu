const express = require('express');
const session = require('express-session');
const fileStore = require('session-file-store')(session);

let body = require('body-parser');
let app = express();

app.use(session({
    secret : 'keyboard cat', //session 암호화
    resave : false, //session을 항상 저장할 지 여부를 정하는 값
    saveUninitialized : true, //초기화되지 않은 채 store에 젖아되는 session
    store : new fileStore()
}));

app.use(body.urlencoded({extended:true}));
app.use(body.json());

app.use('/user', require('./routers/user'));
app.use('/session', require('./routers/session'));

app.listen(3000, 'localhost', () => {
    console.log('Server On');
    require('./models').sequelize.sync({force : false})
    .then(() => {
        console.log("Database sync complete");
    });
});
const express = require('express');
const session = require('express-session');
const fileStore = require('session-file-store')(session);

let body = require('body-parser');
let app = express();

//session
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(session({
    secret : 'keyboard cat', //session 암호화
    resave : true, //session을 항상 저장할 지 여부를 정하는 값
    saveUninitialized : true, //세션 아이디를 실제 사용하기 전에는 발급하지 않음
    store : new fileStore()
}));

//body module add
app.use(body.urlencoded({extended:true}));
app.use(body.json());

//router
app.use('/user', require('./routers/user'));
app.use('/auth', require('./routers/auth'));
app.use('/session', require('./routers/session'));

app.listen(3000, 'localhost', () => {
    console.log('Server On');
    require('./models').sequelize.sync({force : false})
    .then(() => {
        console.log("Database sync complete");
    });
});
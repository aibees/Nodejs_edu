//module definition
const express = require('express');
const session = require('express-session');
const fileStore = require('session-file-store')(session);
const helmet = require('helmet');
const path = require('path');

//variable create
let body = require('body-parser');
let app = express();

//views
app.set('view engine', 'ejs');
app.set('views', './views');

//session
app.use(session({
    name : 'aibeesSession',
    secret : 'keyboard cat', //session 암호화
    resave : true, //session을 항상 저장할 지 여부를 정하는 값
    saveUninitialized : true, //세션 아이디를 실제 사용하기 전에는 발급하지 않음
    store : new fileStore()
}));

//security
    //helmet
app.use(helmet());
app.disable('x-powered-by');

//body module add
app.use(body.urlencoded({extended:true}));
app.use(body.json());

//socket
const io = require('socket.io')(require('http').Server(app));

app.get('/', (req, res) => {
    console.log("send chat.html");
    res.sendFile(path.join(__dirname, './static', 'chat.html'));
});

io.on('connection', function(socket) {
    console.log('a user connected');
})

//router
app.use('/user', require('./routers/user'));
app.use('/auth', require('./routers/auth'));
app.use('/session', require('./routers/session'));
app.use('/chat', require('./routers/chat'));

//listen
app.listen(3000, 'localhost', () => {
    console.log('Server On');
    require('./models').sequelize.sync({force : false})
    .then(() => {
        console.log("Database sync complete");
    });
});
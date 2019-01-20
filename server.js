const express = require('express');
let body = require('body-parser');
let app = express();

app.use(body.urlencoded({extended:true}));
app.use(body.json());

const user_router = require('./routers/user');
app.use('/user', user_router);

app.listen(3000, 'localhost', () => {
    console.log('Server On');
    require('./models').sequelize.sync({force : false})
    .then(() => {
        console.log("Database sync complete");
    });
});
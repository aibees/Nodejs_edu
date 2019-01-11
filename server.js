const express = require('express');
let body = require('body-parser');
let app = express();

const http = require('http');

const root_router = require('./routers/root_router');
app.use(root_router);

app.listen(3000, 'localhost', () => {
    console.log('Server On');
});
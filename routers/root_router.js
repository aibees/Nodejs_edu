const express = require('express');
const router = express.Router();

var userapi = require('../apis/userapi');

router.get('/', (req, res) => {
    res.send('root - get');
});

router.post('/', (req, res) => {
    console.log(req.body);
    res.send('root - post');
});

router.get('/user', userapi.userget);

router.post('/user', userapi.userpost);

module.exports = router;
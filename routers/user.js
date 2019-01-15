const express = require('express');
const router = express.Router();

var userapi = require('../apis/userapi');

router.get('/', userapi.userget);

router.post('/', userapi.userpost);

module.exports = router;
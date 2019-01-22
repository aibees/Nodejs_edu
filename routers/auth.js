const express = require('express');
const router = express.Router();

var registerapi = require('../apis/authapi');

router.get('/', registerapi.init);
router.get('/login', registerapi.loginget);
router.post('/login', registerapi.loginpost);
router.post('/logout', registerapi.logout);

module.exports = router;
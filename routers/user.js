const express = require('express');
const router = express.Router();

var userapi = require('../apis/userapi');

router.get('/', userapi.userget);

router.get('/:id', userapi.usergetbyid);

router.post('/', userapi.userinsert);

router.put('/:id', userapi.userupdate);

router.delete('/:id', userapi.userdelete);

module.exports = router;
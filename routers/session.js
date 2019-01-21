const express = require('express');
const router = express.Router();

var sessionapi = require('../apis/sessionapi');

router.get('/', sessionapi.sessionget);

module.exports = router;
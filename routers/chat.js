const express = require('express')
const router = express.Router();
const path = require('path');
const io = require('socket.io')(require('http').Server(express()));

router.get('/', (req, res) => {
    console.log("send chat.html");
    res.sendFile(path.join(__dirname, '../static', 'chat.html'));
});

io.on('connection', function(socket) {
    console.log(socket);
});

module.exports = router;
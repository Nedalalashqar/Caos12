'use strict';

const io = require('socket.io-client');
const pickup = io.connect('http://localhost:3030');
const port = 3000 ||7000;
const ioo = require('socket.io')(port);
pickup.on('order', payload => {
    console.log('Thanks for delivering', payload)
});
module.exports = ioo

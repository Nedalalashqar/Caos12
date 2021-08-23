'use strict';


const port = process.env.PORT || 4000;
const io = require('socket.io')(port);
io.on('connection', (socket) => {
    socket.on('pickup', (payload) => {
        console.log('pickup', payload.orderId)
        io.emit('pickupConnect', payload);
    }); 
    socket.on('in-trainst', payload => {
    
        io.emit('pickupConnect', payload);
    });
    socket.on('deliver', payload => {
        console.log('deliver', payload.orderId)
        io.emit('pickupConnect', payload);
    });
    socket.on('ordered', payload => {
        
        io.emit('order', payload);
    });
})
module.exports = io
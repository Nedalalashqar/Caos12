'use strict';

const io = require('socket.io-client');
const faker = require('faker');
const capsConnection = io.connect('http://localhost:3030');

setInterval(() => {
    setTimeout(() => {
        let customerOrder = {
            storeName: process.env.STORENAME || 'nedal',
            orderId: faker.datatype.uuid(),
            customerName: faker.name.findName(),
            address: faker.address.streetAddress()
        }
        capsConnection.emit('pickup', customerOrder)
        capsConnection.emit('in-trainst', customerOrder)
        capsConnection.emit('deliver', customerOrder)
        capsConnection.emit('ordered', customerOrder.orderId)
    }, 3000)
}, 3000)
'use strict';
const Events = require('../events')
let payload = {
  store: '1-206-flowers',
  orderID: 'e3669048-7313-427b-b6cc-74010ca1f8f0',
  customer: 'Jamal Braun',
  address: 'Schmittfort, LA',
};
jest.useFakeTimers();

describe('caps test', () => {
  it('in-trainst', () => {
    const caps = require('../driver/driver');
    caps.emit('in-trainst', payload);
    expect(caps.emit('in-trainst', payload)).toEqual(true);
  });
  it('orderd', () => {
    const caps = require('../driver/driver');
    caps.emit('orderd', payload);
    expect(caps.emit('orderd', payload)).toEqual(true);
  });
  it('pickup', () => {
    const caps = require('../driver/driver');
    caps.emit('pickup', payload);
    expect(caps.emit('pickup', payload)).toEqual(true);
  });
  it('order', () => {
    const caps = require('../vendor/vendor');
    caps.emit('order', payload);
    expect(caps.emit('order', payload)).toEqual(true);
  });
  it('deliver', () => {
    const caps = require('../driver/driver');
    caps.emit('deliver', payload);
    expect(caps.emit('deliver', payload)).toEqual(true);
  });
  it('pickupConnect', () => {
    const caps = require('../caps/caps');
    caps.emit('pickupConnect', payload);
    expect(caps.emit('pickupConnect', payload)).toEqual(true);
  });
});
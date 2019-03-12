'use strict';
const appManager = require('../../../../app.js');

const orders = appManager.get('internal').buildRestfulRouter({
    version: 1.0,
    url: '/api/{version}/@orders'
});

orders.get('/');
orders.get('/:{key}');
orders.get('/:{key}/@order_items');
orders.put('/:{key}/@order_items/:{key}').validate({
    type: 'object',
    additionalProperties: false,
    properties: {
        quantity: {$ref: 'order_item.quantity'},
        order_status_id: {$ref: 'order_status.id'}
    }
}, 'body');

orders.put('/:{key}').validate({
    type: 'object',
    additionalProperties: false,
    properties: {
        street: {$ref: 'order.street'},
        zip: {$ref: 'order.zip'},
        city: {$ref: 'order.city'},
        order_status_id: {$ref: 'order_status.id'}
    }
}, 'body');

module.exports = orders;

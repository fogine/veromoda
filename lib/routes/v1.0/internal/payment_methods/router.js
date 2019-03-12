'use strict';
const appManager = require('../../../../app.js');

const paymentMethods = appManager.get('internal').buildRestfulRouter({
    version: 1.0,
    url: '/api/{version}/@payment_methods'
});

paymentMethods.get('/');

module.exports = paymentMethods;


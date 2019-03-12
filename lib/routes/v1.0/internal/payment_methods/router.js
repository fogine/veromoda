'use strict';
const appManager = require('../../../../app.js');

const paymentMethods = appManager.get('internal').buildRestfulRouter({
    version: 1.0,
    url: '/api/{version}/@payment_methods'
});


paymentMethods.on('build-route', function auth(route) {
    route.once('after-validation-setup', function() {
        //TODO
        //this.step('admin-auth')
    });
});

paymentMethods.get('/');

module.exports = paymentMethods;


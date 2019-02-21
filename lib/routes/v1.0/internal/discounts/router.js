'use strict';
const appManager = require('../../../../app.js');

const discounts = appManager.get('internal').buildRestfulRouter({
    version: 1.0,
    url: '/api/{version}/@discounts'
});


discounts.on('build-route', function auth(route) {
    route.once('after-validation-setup', function() {
        //TODO
        //this.step('admin-auth')
    });
});

discounts.post('/');
discounts.get('/');
discounts.get('/:{key}');
discounts.put('/:{key}');
discounts.del('/:{key}');

module.exports = coupons;


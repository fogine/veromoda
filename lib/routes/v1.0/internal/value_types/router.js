'use strict';
const appManager = require('../../../../app.js');

const valueTypes = appManager.get('internal').buildRestfulRouter({
    version: 1.0,
    url: '/api/{version}/@value_types'
});


valueTypes.on('build-route', function auth(route) {
    route.once('after-validation-setup', function() {
        //TODO
        //this.step('admin-auth')
    });
});

valueTypes.get('/');

module.exports = coupons;


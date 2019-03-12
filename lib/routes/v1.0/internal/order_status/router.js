'use strict';
const appManager = require('../../../../app.js');

const statuses = appManager.get('internal').buildRestfulRouter({
    version: 1.0,
    url: '/api/{version}/@order_statuses'
});


statuses.on('build-route', function auth(route) {
    route.once('after-validation-setup', function() {
        //TODO
        //this.step('admin-auth')
    });
});

statuses.get('/');

module.exports = statuses;


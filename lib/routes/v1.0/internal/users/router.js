'use strict';
const appManager = require('../../../../app.js');

const users = appManager.get('internal').buildRestfulRouter({
    version: 1.0,
    url: '/api/{version}/@users'
});

users.on('build-route', function(route) {
    route.once('after-validation-setup', function() {
        //TODO
        //this.step('admin-auth')
    });
});

users.get('/');

users.get('/:{key}').respondsWith({
    type: 'object',
    additionalProperties: false,
    properties: {
        email: {$ref: 'user.email'},
        subscribed: {$ref: 'user.subscribed'},
        first_name: {$ref: 'user.first_name'},
        last_name: {$ref: 'user.last_name'},
        street: {$ref: 'user.street'},
        zip: {$ref: 'user.zip'},
        city: {$ref: 'user.city'},
        tel: {$ref: 'user.tel'}
    }
});

module.exports = users;

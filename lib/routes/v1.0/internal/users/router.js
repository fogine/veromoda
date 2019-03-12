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

users.get('/').respondsWith({
    type: 'array',
    items: {
        type: 'object',
        additionalProperties: false,
        properties: {
            id: {type: 'integer'},
            email: {type: 'string'},
            subscribed: {type: 'boolean'},
            first_name: {type: 'string'},
            last_name: {type: 'string'},
            street: {type: 'string'},
            city: {type: 'string'}
        }
    }
});

users.get('/:{key}');
users.get('/:{key}/@orders');

module.exports = users;

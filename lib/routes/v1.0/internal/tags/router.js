'use strict';
const appManager = require('../../../../app.js');

const tags = appManager.get('internal').buildRestfulRouter({
    version: 1.0,
    url: '/api/{version}/@tags'
});


tags.on('build-route', function auth(route) {
    route.once('after-validation-setup', function() {
        //TODO
        //this.step('admin-auth')
    });
});

tags.post('/');
tags.get('/');
tags.put('/:{key}');
tags.get('/:{key}/@products');

module.exports = tags;


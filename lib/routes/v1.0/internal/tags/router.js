'use strict';
const appManager = require('../../../../app.js');

const tags = appManager.get('internal').buildRestfulRouter({
    version: 1.0,
    url: '/api/{version}/@tags'
});

tags.post('/');
tags.get('/');
tags.put('/:{key}');
tags.get('/:{key}/@products');

module.exports = tags;


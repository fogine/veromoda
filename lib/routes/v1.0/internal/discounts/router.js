'use strict';
const appManager = require('../../../../app.js');

const discounts = appManager.get('internal').buildRestfulRouter({
    version: 1.0,
    url: '/api/{version}/@discounts'
});

discounts.post('/');
discounts.get('/');
discounts.get('/:{key}');
discounts.put('/:{key}');
discounts.del('/:{key}');

module.exports = discounts;


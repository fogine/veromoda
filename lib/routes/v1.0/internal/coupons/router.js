'use strict';
const appManager = require('../../../../app.js');

const coupons = appManager.get('internal').buildRestfulRouter({
    version: 1.0,
    url: '/api/{version}/@coupons'
});

coupons.post('/');
coupons.get('/');
coupons.put('/:{key}');
coupons.del('/:{key}');

module.exports = coupons;


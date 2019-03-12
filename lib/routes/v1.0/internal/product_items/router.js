'use strict';
const appManager = require('../../../../app.js');

const productItems = appManager.get('internal').buildRestfulRouter({
    version: 1.0,
    url: '/api/{version}/@product_items'
});

productItems.get('/');
productItems.get('/:{key}');

module.exports = productItems;


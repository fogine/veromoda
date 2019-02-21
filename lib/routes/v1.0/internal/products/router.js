'use strict';
const appManager = require('../../../../app.js');

const products = appManager.get('internal').buildRestfulRouter({
    version: 1.0,
    url: '/api/{version}/@products'
});

products.on('build-route', function auth(route) {
    route.once('after-validation-setup', function() {
        //TODO
        //this.step('admin-auth')
    });
});

products.get('/');
products.get('/:{key}');

products.get('/:{key}/@tags');
products.put('/:{key}/@tags/:{key}', {
    summary: 'Assign tag to product'
});

products.get('/:{key}/@product_items');
products.post('/:{key}/@product_items/:{key}');
products.put('/:{key}/@product_items/:{key}');
products.del('/:{key}/@product_items/:size');
products.del('/:{key}/@product_items/:color');

module.exports = products;


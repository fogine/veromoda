'use strict';
const appManager = require('../../../../app.js');

const productItems = appManager.get('internal').buildRestfulRouter({
    version: 1.0,
    url: '/api/{version}/@product_items'
});

productItems.on('build-route', function auth(route) {
    route.once('after-validation-setup', function() {
        //TODO
        //this.step('admin-auth')
    });
});

productItems.get('/');
productItems.get('/:{key}');

module.exports = productItems;


'use strict';
const appManager = require('../../../../app.js');

const statuses = appManager.get('internal').buildRestfulRouter({
    version: 1.0,
    url: '/api/{version}/@order_statuses'
});

statuses.get('/');

module.exports = statuses;


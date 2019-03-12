'use strict';
const appManager = require('../../../../app.js');

const valueTypes = appManager.get('internal').buildRestfulRouter({
    version: 1.0,
    url: '/api/{version}/@value_types'
});

valueTypes.get('/');

module.exports = valueTypes;


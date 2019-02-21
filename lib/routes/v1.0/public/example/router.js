'use strict';
const app = require('../../../../app.js');

const router = app.appManager.get("public").buildRouter({
    version: 1.0,
    url: '/api/{version}/'
});

module.exports = router;

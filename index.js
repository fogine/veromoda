'use strict';

global.Promise = require('bluebird');

const config  = require('bi-config');
const Service = require('bi-service').Service;

const service = module.exports = new Service(config);

service.resourceManager.register('knex', require('./lib/knex.js'));

service.on('set-up', function() {
    require('./lib/app.js');
});

// bi-service plugin registration
require('bi-service-sdk');
//require('bi-service-doc');
module.exports.Restfulness = require('bi-service-restfulness');
require('./lib/resources'); //load resources
require('bi-service-restfulness-seeder');

//module.exports.Shell = require('bi-service-shell');

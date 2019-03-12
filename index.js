'use strict';

global.Promise = require('bluebird');

const config  = require('serviser-config');
const Service = require('serviser').Service;

const service = module.exports = new Service(config);

service.resourceManager.register('knex', require('./lib/knex.js'));

service.on('set-up', function() {
    require('./lib/app.js');
});

// serviser plugin registration
require('serviser-sdk');
//require('serviser-doc');
module.exports.Restfulness = require('serviser-restfulness');
require('./lib/resources'); //load resources
require('serviser-restfulness-seeder');

//module.exports.Shell = require('bi-service-shell');

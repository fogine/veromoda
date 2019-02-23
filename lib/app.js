'use strict';
const moduleLoader = require('bi-service').moduleLoader;
const service      = require('../index.js');

//service.buildApp('public');
service.buildApp('internal');

module.exports = service.appManager;

moduleLoader.loadModules([
    __dirname + '/routes/v1.0/'
], {
    except: []
});

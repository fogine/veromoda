'use strict';
const moduleLoader = require('serviser').moduleLoader;
const service      = require('../index.js');

service.buildApp('internal', {
    validator: {extendRefs: true}
});

module.exports = service.appManager;

moduleLoader.loadModules([
    __dirname + '/routes/v1.0/'
], {
    except: []
});

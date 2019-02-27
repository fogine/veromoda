const service = require('../../index.js');
const constants = require('../constants.js');
const Resource = service.Restfulness.Resource;

module.exports = new Resource({
    singular: 'image',
    plural: 'images',
    properties: {},
    db: {
        table: 'image'
    },
    responseProperties: {
        id: {type: 'integer', minimum: 1, maximum: constants.PG_MAX_INT},
        name: {type: 'string', maxLength: 64, pattern: '^[a-zA-Zá-žÁ-Ž0-9-_ ]+$'},
        size: {type: 'integer', minimum: 0, maximum: 750000},
        md5: {type: 'string', minLength: 32, maxLength: 32, pattern: '^[a-z0-9]+$'},
        media_type: {type: 'string', maxLength: 32, format: 'media-type'}
    }
});

const service = require('../../index.js');
const constants = require('../constants.js');
const Resource = service.Restfulness.Resource;

module.exports = new Resource({
    singular: 'image_type',
    plural: 'image_types',
    db: {
        table: 'image_type',
        key: {
            minimum: 1,
            maximum: constants.PG_MAX_INT
        }
    },
    properties: {
        name: {type: 'string', maxLength: 32, pattern: '^[a-zA-Z ]+$'}
    }
});

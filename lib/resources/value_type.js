const service = require('../../index.js');
const constants = require('../constants.js');
const Resource = service.Restfulness.Resource;

module.exports = new Resource({
    singular: 'value_type',
    plural: 'value_types',
    db: {
        table: 'value_type',
        key: {
            minimum: 1,
            maximum: constants.PG_MAX_INT
        }
    },
    properties: {
        name: {type: 'string', maxLength: 32, pattern: '^[a-zA-Z ]+$'}
    }
});

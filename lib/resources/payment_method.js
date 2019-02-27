const service = require('../../index.js');
const constants = require('../constants.js');
const Resource = service.Restfulness.Resource;

module.exports = new Resource({
    singular: 'payment_method',
    plural: 'payment_methods',
    db: {
        table: 'payment_method',
        key: {
            minimum: 1,
            maximum: constants.PG_MAX_INT
        }
    },
    properties: {
        name: {type: 'string', maxLength: 32, pattern: '^[a-zA-Z ]+$'}
    }
});

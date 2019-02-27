const service = require('../../index.js');
const constants = require('../constants.js');
const Resource = service.Restfulness.Resource;

module.exports = new Resource({
    singular: 'order_status',
    plural: 'order_statuses',
    db: {
        table: 'order_status',
        key: {
            minimum: 1,
            maximum: constants.PG_MAX_INT
        }
    },
    properties: {
        name: {type: 'string', maxLength: 32, pattern: '^[a-zA-Z ]+$'}
    }
});

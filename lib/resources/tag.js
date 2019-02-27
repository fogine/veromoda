const service = require('../../index.js');
const constants = require('../constants.js');
const Resource = service.Restfulness.Resource;

module.exports = new Resource({
    singular: 'tag',
    plural: 'tags',
    db: {
        table: 'tag',
        key: {
            minimum: 1,
            maximum: constants.PG_MAX_INT
        }
    },
    properties: {
        name: {type: 'string', maxLength: 128, pattern: '^[a-zA-Zá-žÁ-Ž/,_| ]+$'}
    }
});

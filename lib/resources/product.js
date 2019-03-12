const service = require('../../index.js');
const constants = require('../constants.js');
const Resource = service.Restfulness.Resource;

module.exports = new Resource({
    singular: 'product',
    plural: 'products',
    timestamps: true,
    softDelete: true,
    db: {
        table: 'product',
        key: {
            minimum: 1,
            maximum: constants.PG_MAX_INT
        }
    },
    properties: {
        name: {type: 'string', maxLength: 128, pattern: '^[a-zA-Zá-žÁ0-9 ]+$'},
        description: {type: 'string', maxLength: 1024},
        published: {type: 'boolean', default: false},
        unlisted: {type: 'boolean', default: false},
        care: {type: 'string', maxLength: 1024}
    },
});

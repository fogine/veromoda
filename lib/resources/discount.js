const service = require('../../index.js');
const constants = require('../constants.js');
const Resource = service.Restfulness.Resource;

module.exports = new Resource({
    singular: 'discount',
    plural: 'discounts',
    db: {
        table: 'discount',
        key: {minimum: 1, maximum: constants.PG_MAX_INT}
    },
    timestamps: true,
    properties: {
        label: {
            type: 'string',
            maxLength: 32,
            pattern: '^[a-zA-Zá-žÁ-Ž0-9,-_/ ]+$'
        },
        value: {type: 'number', minimum: 0, maximum: constants.MAXIMUM_PRICE},
        value_type_id: {$ref: 'value_type.id'},
        published: {type: 'boolean', default: false},
        starts_at: {type: 'string', format: 'date-time'},
        expires_at: {type: 'string', format: 'date-time'}
    }
});

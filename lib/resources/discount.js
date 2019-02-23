const service = require('../../index.js');
const Resource = service.Restfulness.Resource;

module.exports = new Resource({
    singular: 'discount',
    plural: 'discounts',
    db: {
        key: {minimum: 1, maximum: Number.MAX_SAFE_INTEGER}
    },
    timestamps: true,
    properties: {
        label: {
            type: 'string',
            maxLength: 32,
            pattern: '^[a-zA-Zá-žÁ-Ž0-9,-_/ ]+$'
        },
        value: {type: 'number'},
        value_type_id: {$ref: 'value_type.id'},
        published: {type: 'boolean', default: false},
        stars_at: {type: 'string', format: 'date-time'},
        expires_at: {type: 'string', format: 'date-time'}
    }
});

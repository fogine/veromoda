const service   = require('../../index.js');
const constants = require('../constants.js');
const Resource  = service.Restfulness.Resource;

module.exports = new Resource({
    singular: 'coupon',
    plural: 'coupons',
    timestamps: true,
    db: {
        table: 'coupon'
    },
    properties: {
        label: {
            type: 'string',
            maxLength: 32,
            pattern: '^[a-zA-Zá-žÁ-Ž0-9,-_/ ]+$'
        },
        discount_id: {$ref: 'discount.id'},
        published: {type: 'boolean', default: false}
    },
    responseProperties: {
        id: {type: 'integer', minimum: 1, maximum: constants.PG_MAX_INT},
        label: {$ref: 'coupon.label'},
        discount_id: {$ref: 'discount.id'},
        published: {$ref: 'coupon.published'},
        code: {
            type: 'string',
            minLength: 8,
            maxLength: 32,
            pattern: '^[a-zA-Z0-9]+$'
        },
        created_at: {type: 'string'},
        updated_at: {type: 'string'}
    }
});

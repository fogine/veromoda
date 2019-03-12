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
        number_of_uses: {type: 'integer', minimum: 1, maximum: 1, nullable: true},
        value: {type: 'number', minimum: 0, maximum: constants.MAXIMUM_PRICE},
        value_type_id: {$ref: 'value_type.id'},
        published: {type: 'boolean', default: false},
        starts_at: {type: 'string', format: 'date-time', nullable: true},
        expires_at: {type: 'string', format: 'date-time'}
    },
    responseProperties: {
        id: {type: 'integer', minimum: 1, maximum: constants.PG_MAX_INT},
        code: {
            type: 'string',
            minLength: 8,
            maxLength: 32,
            pattern: '^[a-zA-Z0-9]+$'
        },
        label: {$ref: 'coupon.label'},
        number_of_uses: {$ref: 'coupon.number_of_uses'},
        value: {$ref: 'coupon.value'},
        value_type_id: {$ref: 'value_type.id'},
        published: {$ref: 'coupon.published'},
        starts_at: {$ref: 'coupon.starts_at'},
        expires_at: {$ref: 'coupon.expires_at'},
        created_at: {type: 'string', format: 'date-time'},
        updated_at: {type: 'string', format: 'date-time'}
    }
});

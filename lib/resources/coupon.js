const service = require('../../index.js');
const Resource = service.Restfulness.Resource;

module.exports = new Resource({
    singular: 'coupon',
    plural: 'coupons',
    timestamps: true,
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
        id: {type: 'integer', minimum: 1, maximum: Number.MAX_SAFE_INTEGER},
        label: {$ref: 'coupon.label'},
        discount_id: {$ref: 'coupon.discount_id'},
        published: {$ref: 'coupon.published'},
        code: {
            type: 'string',
            maxLength: 32,
            pattern: '^[a-zA-Z0-9]+$'
        },
        created_at: {type: 'string'},
        updated_at: {type: 'string'}
    }
});

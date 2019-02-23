const service = require('../../index.js');
const Resource = service.Restfulness.Resource;

module.exports = new Resource({
    singular: 'order',
    plural: 'orders',
    timestamps: true,
    softDelete: true,
    properties: {
        payment_method_id: {$ref: 'payment_method.id'},
        street: {
            type: 'string',
            maxLength: 64,
            pattern: '^[a-zA-Zá-žÁ0-9, ]+$'
        },
        zip: {
            type: 'string',
            pattern: '^\d\d\d\ ?\d\d$'
        },
        city: {
            type: 'string',
            pattern: '^[a-zA-Zá-žÁ0-9 ]+$'
        }
    },
    responseProperties: {
        id: {type: 'integer', minimum: 1, maximum: Number.MAX_SAFE_INTEGER},
        user_id: {$ref: 'user.id'},
        payment_method_id: {$ref: 'payment_method.id'},
        coupon_id: {$ref: 'coupon.id'},
        order_status_id: {$ref: 'order_status.id'},
        price: { type: 'number' },
        shipping_price: { type: 'number' },
        ip_address: {type: 'string', format: 'ipv4'},
        street: {$ref: 'order.street'},
        zip: {$ref: 'order.zip'},
        city: {$ref: 'order.city'},
        created_at: {type: 'string', format: 'date-time'},
        updated_at: {type: 'string', format: 'date-time'}
    }
});

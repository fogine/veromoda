const service = require('../../index.js');
const constants = require('../constants.js');
const Resource = service.Restfulness.Resource;

module.exports = new Resource({
    singular: 'order',
    plural: 'orders',
    timestamps: true,
    softDelete: true,
    db: {
        table: 'order'
    },
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
            maxLength: 64,
            pattern: '^[a-zA-Zá-žÁ0-9 ]+$'
        }
    },
    responseProperties: {
        id: {type: 'integer', minimum: 1, maximum: constants.PG_MAX_INT},
        user_id: {$ref: 'user.id'},
        payment_method_id: {$ref: 'payment_method.id'},
        coupon_id: {$ref: 'coupon.id', nullable: true},
        order_status_id: {$ref: 'order_status.id'},
        price: { type: 'number', minimum: 0, maximum: constants.MAXIMUM_PRICE},
        shipping_price: { type: 'number', minimum: 0, maximum: constants.MAXIMUM_PRICE},
        //ip_address: {type: 'string', format: 'ipv4'},
        street: {$ref: 'order.street'},
        zip: {$ref: 'order.zip'},
        city: {$ref: 'order.city'},
        created_at: {type: 'string', format: 'date-time'},
        updated_at: {type: 'string', format: 'date-time'}
    }
});

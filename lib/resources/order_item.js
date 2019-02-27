const service = require('../../index.js');
const constants = require('../constants.js');
const Resource = service.Restfulness.Resource;

module.exports = new Resource({
    singular: 'order_item',
    plural: 'order_items',
    timestamps: true,
    softDelete: true,
    db: {
        table: 'order_item'
    },
    properties: {},
    responseProperties: {
        id: {type: 'integer', minimum: 1, maximum: constants.PG_MAX_INT},
        user_id: {$ref: 'user.id'},
        product_item_id: {$ref: 'product_item.id'},
        order_id: {$ref: 'order.id'},
        order_status_id: {$ref: 'order_status.id'},
        price: { type: 'number', minimum: 0, maximum: constants.MAXIMUM_PRICE},
        tax: { type: 'number', minimum: 0, maximum: constants.MAXIMUM_PRICE},
        quantity: {type: 'integer', minimum: 0, maximum: 10000},
        created_at: {type: 'string', format: 'date-time'},
        updated_at: {type: 'string', format: 'date-time'}
    }
});

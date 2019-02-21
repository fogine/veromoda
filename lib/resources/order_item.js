const service = require('../../index.js');
const Resource = service.Restfulness.Resource;

module.exports = new Resource({
    singular: 'order_item',
    plural: 'order_items',
    timestamps: true,
    softDelete: true,
    properties: {},
    responseProperties: {
        id: {type: 'integer', minimum: 1, maximum: Number.MAX_SAFE_INTEGER},
        user_id: {$ref: 'user.id'},
        product_item_id: {$ref: 'product_item.id'},
        order_id: {$ref: 'order.id'},
        order_status_id: {$ref: 'order_status.id'},
        price: { type: 'number', maximum: Number.MAX_SAFE_INTEGER},
        tax: { type: 'number', maximum: Number.MAX_SAFE_INTEGER},
        quantity: {type: 'integer', minimum: 0, maximum: Number.MAX_SAFE_INTEGER},
        created_at: {type: 'string', format: 'date-time'},
        updated_at: {type: 'string', format: 'date-time'}
    }
});

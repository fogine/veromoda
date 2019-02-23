const service = require('../../index.js');
const Resource = service.Restfulness.Resource;

module.exports = new Resource({
    singular: 'product_item',
    plural: 'product_items',
    timestamps: true,
    db: {
        key: {
            minimum: 1,
            maximum: Number.MAX_SAFE_INTEGER
        }
    },
    properties: {
        price: { type: 'number', maximum: Number.MAX_SAFE_INTEGER},
        quantity: { type: 'integer', minimum: 0, maximum: Number.MAX_SAFE_INTEGER},
        discount_id: {$ref: 'discount.id'},
        product_id: {$ref: 'product.id'},
        size: {type: 'string', maxLength: 8, pattern: '^[a-zA-Z0-9]+$'},
        color: {type: 'string', maxLength: 8, pattern: '^[a-z0-9]+'}
    },
});

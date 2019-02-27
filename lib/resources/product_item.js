const service = require('../../index.js');
const constants = require('../constants.js');
const Resource = service.Restfulness.Resource;

module.exports = new Resource({
    singular: 'product_item',
    plural: 'product_items',
    timestamps: true,
    db: {
        table: 'product_item',
        key: {
            minimum: 1,
            maximum: constants.PG_MAX_INT
        }
    },
    properties: {
        price: { type: 'number', minimum: 0, maximum: constants.MAXIMUM_PRICE},
        quantity: { type: 'integer', minimum: 0, maximum: 10000},
        discount_id: {$ref: 'discount.id'},
        product_id: {$ref: 'product.id'},
        size: {type: 'string', maxLength: 8, pattern: '^[a-zA-Z0-9]+$'},
        color: {type: 'string', maxLength: 8, pattern: '^[a-z0-9]+'}
    },
});

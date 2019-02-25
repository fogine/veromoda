const service = require('../../index.js');
const Resource = service.Restfulness.Resource;

module.exports = new Resource({
    singular: 'image_product_item',
    plural: 'image_product_items',
    db: {
        key: {
            minimum: 1,
            maximum: Number.MAX_SAFE_INTEGER
        }
    },
    properties: {
        image_id: {$ref: 'image.id'},
        image_type_id: {$ref: 'image_type.id'},
        product_item_id: {$ref: 'product_item.id'}
    }
});

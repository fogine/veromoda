const service = require('../../index.js');
const constants = require('../constants.js');
const Resource = service.Restfulness.Resource;

module.exports = new Resource({
    singular: 'image_product_item',
    plural: 'image_product_items',
    db: {
        table: 'image_product_item',
        key: {
            minimum: 1,
            maximum: constants.PG_MAX_INT
        }
    },
    properties: {
        image_id: {$ref: 'image.id'},
        image_type_id: {$ref: 'image_type.id'},
        product_item_id: {$ref: 'product_item.id'}
    }
});

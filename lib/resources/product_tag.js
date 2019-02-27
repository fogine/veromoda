const service = require('../../index.js');
const constants = require('../constants.js');
const Resource = service.Restfulness.Resource;

module.exports = new Resource({
    singular: 'product_tag',
    plural: 'products_tags',
    db: {
        table: 'product_tag',
        key: {
            minimum: 1,
            maximum: constants.PG_MAX_INT
        }
    },
    properties: {
        tag_id: {$ref: 'tag.id'},
        product_id: {$ref: 'product.id'}
    },
});

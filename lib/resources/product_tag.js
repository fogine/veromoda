const service = require('../../index.js');
const Resource = service.Restfulness.Resource;

module.exports = new Resource({
    singular: 'product_tag',
    plural: 'products_tags',
    db: {
        key: {
            minimum: 1,
            maximum: Number.MAX_SAFE_INTEGER
        }
    },
    properties: {
        tag_id: {$ref: 'tag.id'},
        product_id: {$ref: 'product.id'}
    },
});

const service = require('../../index.js');
const Resource = service.Restfulness.Resource;

module.exports = new Resource({
    singular: 'product_tag',
    plural: 'products_tags',
    properties: {
        tag: {$ref: 'tag.id'},
        product_id: {$ref: 'product.id'}
    },
});

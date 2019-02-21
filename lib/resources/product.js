const service = require('../../index.js');
const Resource = service.Restfulness.Resource;

module.exports = new Resource({
    singular: 'product',
    plural: 'products',
    timestamps: true,
    softDelete: true,
    properties: {
        name: {type: 'string', maxLength: 128, pattern: '^[a-zA-Zá-žÁ0-9 ]+$'},
        description: {type: 'string', maxLength: 1024},
        care: {type: 'string', maxLength: 1024}
    },
});

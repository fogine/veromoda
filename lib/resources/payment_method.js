const service = require('../../index.js');
const Resource = service.Restfulness.Resource;

module.exports = new Resource({
    singular: 'payment_method',
    plural: 'payment_methods',
    db: {
        key: {
            minimum: 1,
            maximum: Number.MAX_SAFE_INTEGER
        }
    },
    properties: {
        name: {type: 'string', maxLength: 32, pattern: '[a-zA-Z ]+'}
    }
});

const service = require('../../index.js');
const Resource = service.Restfulness.Resource;

module.exports = new Resource({
    singular: 'value_type',
    plural: 'value_types',
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

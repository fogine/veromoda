const service = require('../../index.js');
const Resource = service.Restfulness.Resource;

module.exports = new Resource({
    singular: 'order_status',
    plural: 'order_statuses',
    properties: {
        name: {type: 'string', maxLength: 32, pattern: '[a-zA-Z ]+'}
    }
});

const service = require('../../index.js');
const Resource = service.Restfulness.Resource;

module.exports = new Resource({
    singular: 'tag',
    plural: 'tags',
    properties: {
        name: {type: 'string', maxLength: 128, pattern: '^[a-zA-Zá-žÁ/,_| ]+$'}
    }
});

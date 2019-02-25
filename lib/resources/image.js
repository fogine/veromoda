const service = require('../../index.js');
const Resource = service.Restfulness.Resource;

module.exports = new Resource({
    singular: 'image',
    plural: 'images',
    properties: {},
    responseProperties: {
        id: {type: 'integer', minimum: 1, maximum: Number.MAX_SAFE_INTEGER},
        name: {type: 'string', maxLength: 64, pattern: '^[a-zA-Zá-žÁ-Ž0-9_- ]+$'},
        size: {type: 'integer'},
        md5: {type: 'string', maxLength: 32, pattern: '^[a-z0-9]+$'},
        media_type: {type: 'string', format: 'media-type'}
    }
});

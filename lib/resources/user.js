const service = require('../../index.js');
const constants = require('../constants.js');
const Resource = service.Restfulness.Resource;

const NAME_REGEX = '^[a-zA-Zá-žÁ ]+$';

module.exports = new Resource({
    singular: 'user',
    plural: 'users',
    db: {
        table: 'user'
    },
    properties: {
        password: { type: 'string', maxLength: 32, minLength: 8 },
        email: { type: 'string', format: 'email', maxLength: 32},
        subscribed: { type: 'boolean', default: false },
        first_name: {
            type: 'string',
            minLength: 2,
            maxLength: 32,
            pattern:  NAME_REGEX
        },
        last_name: {
            type: 'string',
            minLength: 2,
            maxLength: 32,
            pattern:  NAME_REGEX
        },
        street: {
            type: 'string',
            maxLength: 64,
            pattern: '^[a-zA-Zá-žÁ-Ž0-9, ]+$'
        },
        zip: {
            type: 'string',
            pattern: "^\d\d\d\ ?\d\d$"
        },
        city: {
            type: 'string',
            pattern: '^[a-zA-Zá-žÁ-Ž0-9 ]+$'
        },
        tel: {
            type: 'string',
            maxLength: 16,
            pattern: '^[(\\+\\d\\d\\d)?\\ ?(\\d\\d\\d\\ ?){3}]+$'
        },
    },
    responseProperties: {
        id: {type: 'integer', minimum: 1, maximum: constants.PG_MAX_INT},
        email: {$ref: 'user.email'},
        first_name: {$ref: 'user.first_name'},
        last_name: {$ref: 'user.last_name'},
        street: {$ref: 'user.street'},
        city: {$ref: 'user.city'},
        subscribed: {$ref: 'user.subscribed'}
    }
});

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
    timestamps: true,
    properties: {
        password: { type: 'string', maxLength: 32, minLength: 8 },
        email: { type: 'string', format: 'email', maxLength: 32},
        subscribed: { type: 'boolean', default: false },
        first_name: {
            type: 'string',
            minLength: 2,
            maxLength: 32,
            pattern:  NAME_REGEX,
            faker: { fake: "{{name.firstName}}" },
        },
        last_name: {
            type: 'string',
            minLength: 2,
            maxLength: 32,
            pattern:  NAME_REGEX,
            faker: { fake: "{{name.lastName}}" },
        },
        street: {
            type: 'string',
            maxLength: 64,
            pattern: '^[a-zA-Zá-žÁ-Ž0-9, ]+$',
            faker: { fake: "{{address.streetAddress}}" },
        },
        zip: {
            type: 'string',
            pattern: "^\d\d\d\ ?\d\d$",
            maxLength: 16,
            faker: { fake: "{{address.zipCode}}" },
        },
        city: {
            type: 'string',
            pattern: '^[a-zA-Zá-žÁ-Ž0-9 ]+$',
            maxLength: 64,
            faker: { fake: "{{address.city}}" },
        },
        tel: {
            type: 'string',
            maxLength: 16,
            pattern: '^[(\\+\\d\\d\\d)?\\ ?(\\d\\d\\d\\ ?){3}]+$',
            faker: { fake: "{{phone.phoneNumber}}" },
        },
    },
    responseProperties: {
        id: {type: 'integer', minimum: 1, maximum: constants.PG_MAX_INT},
        email: {$ref: 'user.email'},
        first_name: {$ref: 'user.first_name'},
        last_name: {$ref: 'user.last_name'},
        street: {$ref: 'user.street'},
        city: {$ref: 'user.city'},
        zip: {$ref: 'user.zip'},
        tel: {$ref: 'user.tel'},
        subscribed: {$ref: 'user.subscribed'},
        created_at: {
            type: 'string',
            format: 'date-time',
            maxLength: 64,
            faker: { fake: "{{date.recent}}" },
        },
        updated_at: {
            type: 'string',
            format: 'date-time',
            maxLength: 64,
            faker: { fake: "{{date.recent}}" },
        },
    }
});

const service = require('../../index.js');
const Resource = service.Restfulness.Resource;

module.exports = new Resource({
    singular: 'order_history',
    plural: 'orders_history',
    timestamps: true,
    properties: {},
    responseProperties: {
        id: {type: 'integer', minimum: 1, maximum: Number.MAX_SAFE_INTEGER},
        order_id: {$ref: 'order.id'},
        order_status_id: {$ref: 'order_status.id'},
        comment: {type: 'string', maxLength: 256, pattern: '^[a-zA-Zá-žÁ-Ž0-9,-_/ ]+$'},
        changed_by: {type: 'string', maxLength: 32, pattern: '^[a-zA-Zá-žÁ-Ž ]+$'},
        created_at: {type: 'string', format: 'date-time'},
        updated_at: {type: 'string', format: 'date-time'}
    }
});

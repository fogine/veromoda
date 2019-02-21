const path         = require('path');
const service      = require('../../index.js');
const moduleLoader = service.Service.moduleLoader;
const registry     = service.Restfulness.Resource.registry;

moduleLoader.loadModules([
    __dirname
], {
    except: [
        path.resolve(`${__dirname}/index.js`),//itself
    ]
});


//setup resource associations

registry.getBySingularName('coupon').belongsTo(registry.getBySingularName('discount'));
registry.getBySingularName('discount').belongsTo(registry.getBySingularName('value_type'));

registry.getBySingularName('order').belongsTo(registry.getBySingularName('user'));
registry.getBySingularName('order').belongsTo(registry.getBySingularName('payment_method'));
registry.getBySingularName('order').belongsTo(registry.getBySingularName('coupon'));
registry.getBySingularName('order').belongsTo(registry.getBySingularName('order_status'));

registry.getBySingularName('order_history').belongsTo(registry.getBySingularName('order'));
registry.getBySingularName('order_history').belongsTo(registry.getBySingularName('order_status'));

registry.getBySingularName('order_item').belongsTo(registry.getBySingularName('user'));
registry.getBySingularName('order_item').belongsTo(registry.getBySingularName('order'));
registry.getBySingularName('order_item').belongsTo(registry.getBySingularName('product_item'));
registry.getBySingularName('order_item').belongsTo(registry.getBySingularName('order_status'));

registry.getBySingularName('product_item').belongsTo(registry.getBySingularName('discount'));
registry.getBySingularName('product_item').belongsTo(registry.getBySingularName('product'));

registry.getBySingularName('product').belongsToMany(
    registry.getBySingularName('tag'),
    {
        through: {resource: registry.getBySingularName('product_tag')}
    }
);

registry.getBySingularName('product_tag').belongsTo(registry.getBySingularName('product'));
registry.getBySingularName('product_tag').belongsTo(registry.getBySingularName('tag'));

module.exports = registry;

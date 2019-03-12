import React from 'react';
import { Admin, Resource } from 'react-admin';
import { UserList, UserShow } from './users';
import { OrderList, OrderShow} from './orders';
import { ProductList } from './products';
import { CouponList } from './coupons';
import { DiscountList } from './discounts';
import dataProvider from './dataProvider';

const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="users" list={UserList} show={UserShow} />
        <Resource name="orders" list={OrderList} show={OrderShow} />
        <Resource name="products" list={ProductList} />
        <Resource name="coupons" list={CouponList} />
        <Resource name="discounts" list={DiscountList} />
        <Resource name="order_items"/>
        <Resource name="product_items"/>
    </Admin>
);

export default App;

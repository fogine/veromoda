import React from 'react';
import { TextInput, ReferenceField, ReferenceManyField, FunctionField, ChipField, NumberField, TabbedShowLayout, Tab, Show, SimpleShowLayout, List, Datagrid, TextField, DateField, EmailField, Filter, SelectInput } from 'react-admin';
import { ColorField } from 'react-admin-color-input';
import {orderStatusListFetcher, paymentMethodListFetcher} from './dataFetcher.js';


class OrderFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orderStatusList: [],
            paymentMethodList: [],
        };
    }

    async componentDidMount() {
        const orderStatusList = await orderStatusListFetcher();
        const paymentMethodList = await paymentMethodListFetcher();

        this.setState({
            orderStatusList: orderStatusList,
            paymentMethodList: paymentMethodList
        });
    }

    render() {
        return (
            <Filter {...this.props}>
                <SelectInput source="order_status_id" choices={this.state.orderStatusList} alwaysOn />
                <TextInput optionText="email" label='Email' source="user.email" alwaysOn />
                <SelectInput source="payment_method_id" choices={this.state.paymentMethodList} />
            </Filter>
        )
    }
}

//const OrderShowAside = (props) => (
    //<SimpleShowLayout {...props} className="orders-show-aside">
    //</SimpleShowLayout>
//);

export const OrderShow = (props) => (
    <Show {...props}>
        <TabbedShowLayout className="orders-show-tabbed">
            <Tab label='summary'>
                <TextField source="payment_method.name" label='Payment method' />
                <TextField source="order_status.name" label='Status' />
                <TextField source="coupon_id" />
                <TextField source="price" />
                <TextField source="shipping_price" />
                <TextField source="street" />
                <TextField source="city" />
                <TextField source="zip" />
                <DateField label="Created at" source="created_at" />
                <DateField label="Updated at" source="updated_at" />
            </Tab>
            <Tab label='items' path='order-items'>
                <ReferenceManyField addLabel={false} reference="order_items" target="order_id" >
                    <Datagrid>
                        <TextField source="id" />
                        <ReferenceField linkType={false} label="Product" source="product_item_id" reference="product_items">
                            <FunctionField render={(record) => (
                                    <span class="order-item-product-show">
                                        <div>{record.product.name}</div>
                                        <ChipField record={record} source="size" />
                                        <ColorField record={record} source="color" />
                                    </span>
                            )} />
                        </ReferenceField>
                        <TextField source="order_status.name" sortBy='order_status_id' label='Status' />
                        <NumberField source="price" />
                        <NumberField source="tax" />
                        <NumberField source="quantity" />
                    </Datagrid>
                </ReferenceManyField>
            </Tab>
            <Tab label='user' path='user'>
                <TextField source="user.id" label="Id" />
                <TextField source="user.first_name" label="First name" />
                <TextField source="user.last_name" label="Surname" />
                <EmailField source="user.email" label="Email" />
            </Tab>
        </TabbedShowLayout>
    </Show>
);

export const OrderList = props => (
    <List {...props} exporter={false} bulkActionButtons={false} filters={<OrderFilter />} >
        <Datagrid rowClick="show">
            <TextField source="id" />
            <EmailField source="user.email" sortBy='user_id' label='Email' />
            <TextField source="payment_method.name" sortBy='payment_method_id' label='Payment method' />
            <TextField source="order_status.name" sortBy='order_status_id' label='Status' />
            <TextField source="price" />
            <TextField source="shipping_price" />
            <DateField label="Created at" source="created_at" />
            <DateField label="Updated at" source="updated_at" />
        </Datagrid>
    </List>
);

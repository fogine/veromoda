import React from 'react';
import { OrderList } from './orders.js';
import { TabbedShowLayout, Tab, ReferenceManyField, Show, ListView, ListController, BooleanInput, TextInput, NumberField, List, Datagrid, TextField, DateField, EmailField, BooleanField, Filter, ReferenceInput, SelectInput } from 'react-admin';

const UserFilter = (props) => (
    <Filter {...props}>
        <TextInput optionText="email" source="email" alwaysOn />
        <TextInput optionText="First Name" source="first_name" />
        <TextInput optionText="Surname" source="last_name" />
        <BooleanInput label="Subscribed" source="subscribed" />
    </Filter>
);

//const UserShowAside = (props) => (
    //<OrderList {...props} title=" " filter={{user_id: props.record.id}} basePath="/orders" resource="orders" location={{pathname: '/orders', search: '', hash: ''}} />
//);

export const UserShow = (props) => (
    <Show {...props} className="users-show">
        <TabbedShowLayout className="users-show-tabbed">
            <Tab label='summary'>
                <TextField source="first_name" />
                <TextField label="Surname" source="last_name" />
                <EmailField source="email" />
                <TextField source="street" />
                <TextField source="city" />
                <TextField source="zip" />
                <BooleanField source="subscribed" />
                <DateField label="Registered at" source="created_at" />
                <DateField label="Updated at" source="updated_at" />
            </Tab>
        </TabbedShowLayout>
    </Show>
);

export const UserList = props => (
    <List {...props} exporter={false} bulkActionButtons={false} filters={<UserFilter />} >
        <Datagrid rowClick="show">
            <TextField source="id" />
            <TextField source="first_name" />
            <TextField label="Surname" source="last_name" />
            <EmailField source="email" />
            <TextField source="street" />
            <TextField source="city" />
            <BooleanField source="subscribed" />
        </Datagrid>
    </List>
);


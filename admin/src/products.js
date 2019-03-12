import React from 'react';
import { TabbedShowLayout, Tab, FunctionField, ReferenceManyField, Show, ListView, ListController, BooleanInput, TextInput, NumberField, List, Datagrid, TextField, DateField, EmailField, BooleanField, Filter, ReferenceInput, SelectInput } from 'react-admin';

const ProductFilter = (props) => (
    <Filter {...props}>
        <TextInput optionText="name" source="name" alwaysOn />
        <BooleanField optionText="published" source="published" />
    </Filter>
);

export const ProductList = props => (
    <List {...props} exporter={false} bulkActionButtons={false} filters={<ProductFilter />} >
        <Datagrid rowClick="show">
            <TextField source="id" />
            <TextField source="name" />
            <BooleanField source="published" />
            <DateField label="Created at" source="created_at" />
            <DateField label="Updated at" source="updated_at" />
        </Datagrid>
    </List>
);


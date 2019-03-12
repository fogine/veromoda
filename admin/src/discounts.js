import React from 'react';
import { TabbedShowLayout, Tab, FunctionField, ReferenceManyField, Show, ListView, ListController, BooleanInput, TextInput, NumberField, List, Datagrid, TextField, DateField, EmailField, BooleanField, Filter, ReferenceInput, SelectInput } from 'react-admin';

const DiscountFilter = (props) => (
    <Filter {...props}>
        <TextInput optionText="label" source="label" alwaysOn />
        <BooleanField optionText="published" source="published" />
    </Filter>
);

export const DiscountList = props => (
    <List {...props} exporter={false} bulkActionButtons={false} filters={<DiscountFilter />} >
        <Datagrid rowClick="show">
            <TextField source="id" />
            <TextField source="label" />
            <FunctionField label="Discount" render={(record) => {
                return record.value_type_id === 1 ? (record.value * 100) + '%' :
                    record.value;
            }} />
            <BooleanField source="published" />
            <DateField label="Starts at" source="starts_at" />
            <DateField label="Expires at" source="expires_at" />
            <DateField label="Created at" source="created_at" />
            <DateField label="Updated at" source="updated_at" />
        </Datagrid>
    </List>
);


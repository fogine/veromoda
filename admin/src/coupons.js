import React from 'react';
import { TabbedShowLayout, Tab, FunctionField, ReferenceManyField, Show, ListView, ListController, BooleanInput, TextInput, NumberField, List, Datagrid, TextField, DateField, EmailField, BooleanField, Filter, ReferenceInput, SelectInput } from 'react-admin';

const CouponFilter = (props) => (
    <Filter {...props}>
        <TextInput optionText="label" source="label" alwaysOn />
        <TextInput optionText="code" source="code" alwaysOn />
        <BooleanField optionText="published" source="published" />
    </Filter>
);

export const CouponList = props => (
    <List {...props} exporter={false} bulkActionButtons={false} filters={<CouponFilter />} >
        <Datagrid rowClick="show">
            <TextField source="id" />
            <TextField source="label" />
            <TextField source="code" />
            <FunctionField label="Discount" render={(record) => {
                return record.value_type_id === 1 ? (record.value * 100) + '%' :
                    record.value;
            }} />
            <NumberField label="Expires after used times" source="number_of_uses" />
            <BooleanField source="published" />
            <DateField label="Starts at" source="starts_at" />
            <DateField label="Expires at" source="expires_at" />
            <DateField label="Created at" source="created_at" />
            <DateField label="Updated at" source="updated_at" />
        </Datagrid>
    </List>
);


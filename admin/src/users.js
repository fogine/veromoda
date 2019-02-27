import React from 'react';
import { List, Datagrid, TextField, EmailField, BooleanField } from 'react-admin';

export const UserList = props => (
    <List {...props} exporter={false} bulkActionButtons={false}>
        <Datagrid rowClick="edit">
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

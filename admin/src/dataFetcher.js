import { fetchUtils } from 'react-admin';
//import {unstable_createResource as createResource} from 'react-cache'
const { fetchJson } = fetchUtils;

export const orderStatusListFetcher = () => {
    return fetchJson('/api/v1.0/order_statuses')
        .then(response => response.json);
}

export const paymentMethodListFetcher = () => {
    return fetchJson('/api/v1.0/payment_methods')
        .then(response => response.json);
}

//export const orderStatusList = createResource(orderStatusListFetcher);
//export const paymentMethodList = createResource(paymentMethodListFetcher);

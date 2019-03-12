import {
    GET_LIST,
    GET_ONE,
    GET_MANY,
    GET_MANY_REFERENCE,
    CREATE,
    UPDATE,
    DELETE,
    fetchUtils,
} from 'react-admin';
import { stringify } from 'query-string';

const API_URL = '/api/v1.0';

/**
 * @param {String} type One of the constants appearing at the top of this file, e.g. 'UPDATE'
 * @param {String} resource Name of the resource to fetch, e.g. 'posts'
 * @param {Object} params The Data Provider request params, depending on the type
 * @returns {Object} { url, options } The HTTP request parameters
 */
const convertDataProviderRequestToHTTP = (type, resource, params) => {
    switch (type) {
    case GET_LIST: {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;
        const _filter = {};
        const query = {
            _offset: (page-1) * perPage,
            _limit: perPage,
            _sort: (order === 'ASC' ? '' : '-') + field
        };

        if (resource === 'orders') {
            let embed = [
                'user.id',
                'user.email',
                'payment_method.id',
                'payment_method.name',
                'order_status.id',
                'order_status.name'
            ];
            query._embed = embed.join(',');
        }

        Object.keys(params.filter).forEach(function(key) {
            if (typeof params.filter[key] === 'object' && params.filter[key] !== null) {
                Object.keys(params.filter[key]).forEach(function(subKey) {
                    _filter[`${key}.${subKey}`] =
                        _wrapFilterValue(params.filter[key][subKey]);
                });
            } else {
                _filter[key] = _wrapFilterValue(params.filter[key]);
            }
        });

        query._filter = JSON.stringify(_filter);
        //Object.assign(query, params.filter);
        return { url: `${API_URL}/${resource}?${stringify(query)}` };
    }
    case GET_ONE:

        const query = {};
        if (resource === 'orders') {
            let embed = [
                'user.id',
                'user.email',
                'user.first_name',
                'user.last_name',
                'payment_method.id',
                'payment_method.name',
                'order_status.id',
                'order_status.name'
            ];
            query._embed = embed.join(',');
        }
        return { url: `${API_URL}/${resource}/${params.id}?${stringify(query)}` };
    case GET_MANY: {
        const query = {
            _filter: JSON.stringify({ id: {in: params.ids} }),
        };

        if (resource === 'product_items') {
            query._embed = 'product.name';
        }

        return { url: `${API_URL}/${resource}?${stringify(query)}` };
    }
    case GET_MANY_REFERENCE: {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;
        const query = {
            _offset: (page-1) * perPage,
            _limit: perPage,
            _sort: (order === 'ASC' ? '' : '-') + field
        };
        Object.assign(query, params.filter);

        if (resource === 'orders' && params.target === 'user_id') {
            resource = `users/${params.id}/orders`;
            query._embed = 'order_status.name,payment_method.name';
        } else if (resource === 'order_items' && params.target === 'order_id') {
            resource = `orders/${params.id}/order_items`;
            query._embed = 'order_status.id,order_status.name';
        } else {
            query[params.target] = params.id;
        }

        return { url: `${API_URL}/${resource}?${stringify(query)}` };
    }
    case UPDATE:
        return {
            url: `${API_URL}/${resource}/${params.id}`,
            options: { method: 'PUT', body: JSON.stringify(params.data) },
        };
    case CREATE:
        return {
            url: `${API_URL}/${resource}`,
            options: { method: 'POST', body: JSON.stringify(params.data) },
        };
    case DELETE:
        return {
            url: `${API_URL}/${resource}/${params.id}`,
            options: { method: 'DELETE' },
        };
    default:
        throw new Error(`Unsupported fetch action type ${type}`);
    }
};

/**
 * @param {Object} response HTTP response from fetch()
 * @param {String} type One of the constants appearing at the top of this file, e.g. 'UPDATE'
 * @param {String} resource Name of the resource to fetch, e.g. 'posts'
 * @param {Object} params The Data Provider request params, depending on the type
 * @returns {Object} Data Provider response
 */
const convertHTTPResponseToDataProvider = (response, type, resource, params) => {
    const { headers, json } = response;
    switch (type) {
        case GET_LIST:
        case GET_MANY_REFERENCE:
            return {
                data: json.map(x => x),
                total: parseInt(headers.get('x-total-count')),
            };
        case CREATE:
            return { data: { ...params.data, id: json.id } };
        default:
            return { data: json };
    }
};

/**
 * @param {string} type Request type, e.g GET_LIST
 * @param {string} resource Resource name, e.g. "posts"
 * @param {Object} payload Request parameters. Depends on the request type
 * @returns {Promise} the Promise for response
 */
export default (type, resource, params) => {
    const { fetchJson } = fetchUtils;
    const { url, options } = convertDataProviderRequestToHTTP(type, resource, params);
    return fetchJson(url, options)
        .then(response => convertHTTPResponseToDataProvider(response, type, resource, params));
};

/*
 * @param {String|Integer} val
 */
function _wrapFilterValue(val) {
    if (typeof val === 'string') {
        return {like: `%${val}%`};
    } else {
        return {eq: val};
    }
}

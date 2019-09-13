import { GET_ALL_PRODUCT_FAIL, GET_ALL_PRODUCT_SUCCESS, GET_PRODUCT_ID_SUCCESS, GET_PRODUCT_ID__FAIL } from '../actions/type.action';

let initialProductState = {
    products: [],
    error: {},
    product: {}
}

export default (state = initialProductState, action) => {
    switch (action.type) {
        case GET_ALL_PRODUCT_SUCCESS:
            return { ...state, products: action.payload };
        case GET_ALL_PRODUCT_FAIL:
            return { ...state, error: action.payload };
        case GET_PRODUCT_ID_SUCCESS:
            return { ...state, product: action.payload };
        case GET_PRODUCT_ID__FAIL:
            return { ...state, error: action.payload };
        default:
            return state;
    }
}
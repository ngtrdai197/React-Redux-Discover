import * as rootActions from "../actions/type.action";

let initialProductState = {
  products: [],
  error: {},
  product: null
};

export default (state = initialProductState, action) => {
  switch (action.type) {
    case rootActions.GET_ALL_PRODUCT_SUCCESS:
      return { ...state, products: action.payload };
    case rootActions.GET_ALL_PRODUCT_FAIL:
      return { ...state, error: action.payload };
    case rootActions.GET_PRODUCT_ID_SUCCESS:
      return { ...state, product: action.payload };
    case rootActions.GET_PRODUCT_ID__FAIL:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

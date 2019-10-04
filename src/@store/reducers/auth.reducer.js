import * as rootAction from '../actions/type.action'

const initStateAuth = {
    data: null,
    error: null
}

export default (state = initStateAuth, action) => {
    switch (action.type) {
        case rootAction.LOGIN_SUCCESS:
            return { ...state, data: action.payload };
        case rootAction.LOGIN_FAIL:
            return { ...state, error: action.payload };
        case rootAction.SINGUP_SUCCESS:
            return { ...state, data: action.payload };
        case rootAction.SINGUP_FAIL:
            return { ...state, error: action.payload };
        default:
            return state;
    }
}
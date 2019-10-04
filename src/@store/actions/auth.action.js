import * as rootActions from '../actions/type.action';
import { api } from '../../@api/base.api';

export const signup = userSignup => {
    return async dispatch => {
        try {
            const respon = await api.post('/user', userSignup);
            dispatch(signupSucess(respon.data));
        } catch (error) {
            dispatch(signupFail(error));
        }
    }
}

export const login = userLogin => {
    return async dispatch => {
        try {
            const respon = await api.post('/auth/login', userLogin);
            
            localStorage.setItem('token', respon.data.token);
            dispatch(loginSucess(respon.data));
        } catch (error) {
            dispatch(loginFail(error));
        }
    }
}

const loginSucess = data => {
    return {
        type: rootActions.LOGIN_SUCCESS,
        payload: data
    };
};
const loginFail = error => {
    return {
        type: rootActions.LOGIN_FAIL,
        payload: error
    };
};

const signupSucess = data => {
    return {
        type: rootActions.SINGUP_SUCCESS,
        payload: data
    };
};
const signupFail = error => {
    return {
        type: rootActions.SINGUP_FAIL,
        payload: error
    };
};
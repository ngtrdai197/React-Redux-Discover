import { GET_ALL_PRODUCT_SUCCESS, GET_ALL_PRODUCT_FAIL, GET_PRODUCT_ID_SUCCESS, GET_PRODUCT_ID__FAIL } from './type.action'
import { api } from '../../@api/base.api'

export const getAllProduct = () => {
    return async (dispatch) => {
        try {
            const respon = await api.get(`/product?page=1&perPage=7`);
            respon.data.products.map(product => {
                return product.images = product.images.map(img => {
                    return img = `http://localhost:5000/${img}`;
                })
            })
            dispatch(getAllProductSucess(respon.data))
        } catch (error) {
            dispatch(getAllProductFail(error.response))
        }
    }
}

export const getProductById = (productId) => {
    return async (dispatch) => {
        try {
            const respon = await api.get(`/product/${productId}`);
            const newArrayImages = respon.data.images.map(img => {
                return img = `http://localhost:5000/${img}`;
            });
            respon.data.images = newArrayImages;
            dispatch(getProductSucess(respon.data))
        } catch (error) {
            dispatch(getProductFail(error.response.data))
        }
    }
}

const getAllProductSucess = (product) => {
    return {
        type: GET_ALL_PRODUCT_SUCCESS,
        payload: product
    };
}
const getAllProductFail = (error) => {
    return {
        type: GET_ALL_PRODUCT_FAIL,
        payload: error
    }
}

const getProductSucess = (product) => {
    return {
        type: GET_PRODUCT_ID_SUCCESS,
        payload: product
    };
}
const getProductFail = (error) => {
    return {
        type: GET_PRODUCT_ID__FAIL,
        payload: error
    }
}
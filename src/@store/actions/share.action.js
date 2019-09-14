import * as rootAction from './type.action'

export const increment = () => {
    return (dispatch) => {
        const action = { type: rootAction.COUNT_INCREMENT };
        dispatch(action)
    }
}

export const decrement = () => {
    return (dispatch) => {
        const action = { type: rootAction.COUNT_DECREMENT };
        dispatch(action)
    }
}
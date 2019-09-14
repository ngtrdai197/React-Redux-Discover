import * as rootAction from '../actions/type.action'

const initStateShare = {
    count: 0
}

export default (state = initStateShare, action) => {
    switch (action.type) {
        case rootAction.COUNT_INCREMENT:
            return { ...state, ...state.count++ };
        case rootAction.COUNT_DECREMENT:
            return { ...state, ...state.count-- };
        default:
            return state;
    }
}
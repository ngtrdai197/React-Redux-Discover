import { combineReducers } from 'redux'
import foodsReducer from './foods.reducer'
import productReducer from './product.reducer'
import shareReducer from './share.reducer'

export const allReducers = combineReducers({
    foodsReducer,
    productReducer,
    shareReducer
});
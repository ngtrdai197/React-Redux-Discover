import { combineReducers } from 'redux'
import foodsReducer from './foods.reducer'
import productReducer from './product.reducer'

export const allReducers = combineReducers({
    foodsReducer,
    productReducer
});
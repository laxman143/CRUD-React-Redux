import {combineReducers} from 'redux'
import LoginReducer from '../components/Redux-Store/Login/login-reducer'
import ProductReducer from '../components/Redux-Store/Product/product-reducer'

const RootReducer = combineReducers({
    login : LoginReducer,
    product: ProductReducer 
})
export default RootReducer
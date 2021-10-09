import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { cartReducer } from './reducers/cartReducer';
import { productDetailReducer, productlistReducer } from './reducers/productReducer'
import { getWishListReducer } from './reducers/wishListReducer';


const initialState = {
    getCartItem: {
        cartItem: localStorage.getItem('cartItem') ? JSON.parse(localStorage.getItem('cartItem')) : []
    },
    getWishList: {
        wishList: localStorage.getItem('wishList') ? JSON.parse(localStorage.getItem('wishList')) : []
    },
}


const my_reducer = combineReducers({
    productlist: productlistReducer,
    productDetail: productDetailReducer,
    getCartItem: cartReducer,
    getWishList: getWishListReducer,
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
    my_reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
)
export default store;






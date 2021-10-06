import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { productDetailReducer, productlistReducer } from './reducers/productReducer'




const my_reducer = combineReducers({
    productlist: productlistReducer,
    productDetail: productDetailReducer,
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
    my_reducer,
    composeEnhancer(applyMiddleware(thunk))
)
export default store;






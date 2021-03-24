import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

//Reducers
import { cartReducer } from './reducers/cartReducer';
import {
    getFeaturedProductsReducer,
    getProductsReducer,
    getProductDeatailsReducer,
} from './reducers/productReducer';

const reducer = combineReducers({
    cart: cartReducer,
    getProducts: getProductsReducer,
    getFeaturedProducts: getFeaturedProductsReducer,
    getProductDeatails: getProductDeatailsReducer,
});

const middleware = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

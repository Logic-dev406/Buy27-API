import * as actionTypes from '../constants/cartConstants';
import axios from 'axios';

export const addToCart = (slug, qty) => async (dispatch, getState) => {
    const { data } = await axios.get(
        `http://localhost:3000/api/products/${slug}`
    );

    dispatch({
        type: actionTypes.ADD_TO_CART,
        payload: {
            product: data.id,
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            slug: data.slug,
            qty,
        },
    });

    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (slug) => (dispatch, getState) => {
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: slug,
    });

    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
};

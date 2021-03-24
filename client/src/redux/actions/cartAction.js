import * as actionTypes from '../constants/cartConstants';
import axios from 'axios';
import { json } from 'express';

const url = process.env.REACT_APP_BACKEND_URL;

export const addToCart = (id, qty) => async (dispatch, getState) => {
    const { data } = await axios.get(
        `https://localhost:3000/api/products/${id}`
    );

    dispatch({
        type: actionTypes.ADD_TO_CART,
        payload: {
            product: data.id,
            name: data.name,
            imageUrl: data.imageUrl,
            price: data.price,
            countInStock: data.countInStock,
            qty,
        },
    });

    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: id,
    });

    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
};

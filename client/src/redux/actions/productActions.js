import * as actionTypes from '../constants/productConstants';
import axios from 'axios';

export const getProducts = () => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.GET_PRODUCTS_REQUEST });

        const { data } = await axios.get('http://localhost:3000/api/products');

        dispatch({
            type: actionTypes.GET_PRODUCTS_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: actionTypes.GET_PRODUCTS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const getProductDetails = (slug) => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.GET_PRODUCTS_DETAILS_REQUEST });

        const { data } = await axios.get(
            `http://localhost:3000/api/products/${slug}`
        );

        dispatch({
            type: actionTypes.GET_PRODUCTS_DETAILS_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: actionTypes.GET_PRODUCTS_DETAILS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const getSearchedProducts = (input) => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.GET_SEARCHED_PRODUCTS_REQUEST });

        const { data } = await axios.get(
            `http://localhost:3000/api/products/search?name=${input}`
        );

        dispatch({
            type: actionTypes.GET_SEARCHED_PRODUCTS_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: actionTypes.GET_SEARCHED_PRODUCTS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const getFeaturedProducts = () => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.GET_FEATURED_PRODUCTS_REQUEST });

        const { data } = await axios.get(
            'http://localhost:3000/api/products/get/featured/8'
        );

        dispatch({
            type: actionTypes.GET_FEATURED_PRODUCTS_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: actionTypes.GET_FEATURED_PRODUCTS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const removeSearchedProducts = () => (dispatch) => {
    dispatch({
        type: actionTypes.GET_SEARCHED_PRODUCTS_RESET,
    });
};

export const removeProductDetails = () => (dispatch) => {
    dispatch({
        type: actionTypes.GET_PRODUCTS_DETAILS_RESET,
    });
};

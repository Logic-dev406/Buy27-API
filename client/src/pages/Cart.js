import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import DesktopCart from '../sections/Cart/DesktopCart';
import MobileCart from '../sections/Cart/MobileCart';

//Action
import { removeFromCart } from '../redux/actions/cartAction';

export const Cart = ({ addToCart, cartItems }) => {
    const [isMobile, setisMobile] = useState(
        window.matchMedia('(max-width:768px)').matches
    );

    useEffect(() => {
        window.addEventListener('resize', () => {
            setisMobile(window.matchMedia('(max-width:768px)').matches);
        });
    });

    const dispatch = useDispatch();

    const qtyChangeHandler = (slug, qty) => {
        dispatch(addToCart(slug, qty));
    };

    const removeFromCartHandler = (slug) => {
        dispatch(removeFromCart(slug));
    };

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
    };

    const getCartTotalPrice = () => {
        return cartItems.reduce(
            (price, item) => item.price * item.qty + price,
            0
        );
    };

    return (
        <div>
            {isMobile ? (
                <MobileCart
                    cartItems={cartItems}
                    qtyChangeHandler={qtyChangeHandler}
                    removeFromCartHandler={removeFromCartHandler}
                    getCartCount={getCartCount}
                    getCartTotalPrice={getCartTotalPrice}
                />
            ) : (
                <DesktopCart
                    cartItems={cartItems}
                    qtyChangeHandler={qtyChangeHandler}
                    removeFromCartHandler={removeFromCartHandler}
                    getCartCount={getCartCount}
                    getCartTotalPrice={getCartTotalPrice}
                />
            )}
        </div>
    );
};

export default Cart;

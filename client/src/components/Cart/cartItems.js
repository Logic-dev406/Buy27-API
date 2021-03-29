import React, { useEffect, useState } from 'react';
import DesktopCartItem from '../../sections/CartItem/DesktopCartItem';
import MobileCartItem from '../../sections/CartItem/MobileCartItem';

const CartItems = ({ item, qtyChangeHandler, removeFromCartHandler }) => {
    const [isMobile, setisMobile] = useState(
        window.matchMedia('(max-width:768px)').matches
    );

    useEffect(() => {
        window.addEventListener('resize', () => {
            setisMobile(window.matchMedia('(max-width:768px)').matches);
        });
    });

    const [didMount, setDidMount] = useState(false);

    useEffect(() => {
        setDidMount(true);
        return () => setDidMount(false);
    }, []);

    if (!didMount) {
        return null;
    }

    return (
        <div>
            {isMobile ? (
                <MobileCartItem
                    item={item}
                    qtyChangeHandler={qtyChangeHandler}
                    removeFromCartHandler={removeFromCartHandler}
                />
            ) : (
                <DesktopCartItem
                    item={item}
                    qtyChangeHandler={qtyChangeHandler}
                    removeFromCartHandler={removeFromCartHandler}
                />
            )}
        </div>
    );
};

export default CartItems;

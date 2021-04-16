import React from 'react';
import MyOrders from '../PreviousOrdersControl/MyOrders';
import OrderState from '../PreviousOrdersControl/OrderState';

export const PreviousOrders = () => {
    return (
        <div>
            <div className="flex items-center bg-white">
                <MyOrders />
                <OrderState />
            </div>
        </div>
    );
};

export default PreviousOrders;

import React from 'react';
import MyOrders from '../components/PreviousOrdersControl/MyOrders';
import OrderState from '../components/PreviousOrdersControl/OrderState';
import UserDashboardController from '../components/UsersDashboardControl';

export const PreviousOrders = () => {
    return (
        <div className="flex flex-col items-center bg-gray-100 ">
            <div className=" flex justify-between my-8 ">
                <UserDashboardController />
                <div className="flex items-center bg-white">
                    <MyOrders />
                    <OrderState />
                </div>
            </div>
        </div>
    );
};

export default PreviousOrders;

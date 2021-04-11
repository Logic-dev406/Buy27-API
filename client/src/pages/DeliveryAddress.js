import React from 'react';
import UserDashboardController from '../components/UsersDashboardControl';

export const DeliveryAddress = () => {
    return (
        <div className="flex flex-col items-center bg-gray-100 ">
            <div className=" flex justify-between my-8 ">
                <UserDashboardController />
                <div className="bg-white h-96 w-96">Delivery Ad</div>
            </div>
        </div>
    );
};

export default DeliveryAddress;

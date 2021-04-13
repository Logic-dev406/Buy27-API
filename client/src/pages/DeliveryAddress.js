import React from 'react';
import { Link } from 'react-router-dom';
import UserDashboardController from '../components/UsersDashboardControl';

export const DeliveryAddress = () => {
    return (
        <div className="flex flex-col items-center bg-gray-100 ">
            <div className=" flex justify-between my-8 ">
                <UserDashboardController />
                <div className="bg-white h-96 pt-4 rounded">
                    <Link
                        to="/"
                        className="bg-transparent rounded border border-primary-dark py-1 px-2 text-sm text-primary-dark ml-8 "
                    >
                        New Address
                    </Link>
                    <div className="border-b my-4 "></div>
                    <div className="bg-transparent border h-40 w-96 ml-8 rounded"></div>
                </div>
            </div>
        </div>
    );
};

export default DeliveryAddress;

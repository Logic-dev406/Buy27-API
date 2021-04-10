import React from 'react';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';

export const UserDashboard = () => {
    return (
        <div className="flex flex-col items-center bg-gray-100 ">
            <div className=" flex justify-between my-8 ">
                <div className="bg-white h-96 py-5 pl-4 pr-4 mr-8 rounded">
                    <div className="flex flex-col ">
                        <h1 className="font-bold text-lg py-1">
                            <i className="mr-2">
                                <AccountCircleOutlinedIcon />
                            </i>
                            My Profile
                        </h1>
                        <a href="/account" className="pl-8 text-sm py-1">
                            Account Information
                        </a>
                        <a href="/account" className="pl-8 text-sm py-1">
                            Delivery Address
                        </a>
                        <div className="border-b border-gray w-56 my-2"></div>
                        <h1 className="font-bold text-lg py-1">
                            <i className="mr-2">
                                <ShoppingBasketOutlinedIcon />
                            </i>
                            My Orders
                        </h1>
                        <a href="/account" className="pl-8 text-sm py-1">
                            Buy27.com
                        </a>
                    </div>
                </div>
                <div className="bg-white h-96 w-96"></div>
            </div>
        </div>
    );
};

export default UserDashboard;

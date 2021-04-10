import React from 'react';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';
import { Link } from 'react-router-dom';

export const UsersDashboardControl = () => {
    return (
        <div>
            <div className="bg-white h-96 py-5 pl-4 pr-4 mr-8 rounded">
                <div className="flex flex-col text-primary-dark">
                    <h1 className="font-bold text-lg py-1">
                        <i className="mr-2">
                            <AccountCircleOutlinedIcon />
                        </i>
                        My Profile
                    </h1>
                    <Link
                        to={`/My Account/My Profile `}
                        className="pl-8 text-sm py-1"
                    >
                        Account Information
                    </Link>
                    <Link
                        to={`/My Account/My Delivery Address `}
                        className="pl-8 text-sm py-1"
                    >
                        Delivery Address
                    </Link>
                    <div className="border-b border-gray w-56 my-2"></div>
                    <h1 className="font-bold text-lg py-1">
                        <i className="mr-2">
                            <ShoppingBasketOutlinedIcon />
                        </i>
                        My Orders
                    </h1>
                    <Link
                        to={`/My Account/My Orders `}
                        className="pl-8 text-sm py-1"
                    >
                        Buy27.com
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default UsersDashboardControl;

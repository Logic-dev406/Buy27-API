import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PhoneIcon from '@material-ui/icons/Phone';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';

const DesktopTopMenuBar = () => {
    const [active, setActive] = useState(false);

    return (
        <div className="flex bg-primary-dark w-full h-6 text-white text-sm items-center justify-between px-52 relative ">
            <div className="">
                <a
                    className="px-2 border-l-2 border-r-2 border-primary-light "
                    href="/"
                >
                    English
                </a>
                <a className="px-2 " href="/">
                    USD
                </a>
                <a
                    className="px-2 border-l-2 border-r-2 border-primary-light"
                    href="/"
                >
                    <PhoneIcon className="px-1" /> Hotlines: (+234) 70123 445
                    7765
                </a>
            </div>
            <div className="">
                <>
                    <button
                        className="px-2 border-l-2 border-r-2 border-primary-light focus:outline-none"
                        onClick={() => {
                            setActive(!active);
                        }}
                    >
                        My Acount <ArrowDropDownIcon />
                    </button>
                    {active && (
                        <div className="bg-primary-dark flex flex-col absolute border-t-2 py-4 border-grey-200 w-52 rounded">
                            <Link to="/My Account Info" className="px-4 py-1">
                                <AccountCircleOutlinedIcon /> My Profile
                            </Link>
                            <Link to="/My Orders" className="px-4 py-1">
                                <ShoppingBasketOutlinedIcon /> My Orders
                            </Link>
                            <a href="/" className="px-4 pt-1 pb-5 ">
                                <FavoriteBorderIcon /> Saved Items
                            </a>
                            <button className=" border-t-2 border-secondary-dark  pt-3 text-sm font-normal">
                                LOGOUT
                            </button>
                        </div>
                    )}
                    <Link
                        className="px-2 border-r-2 border-primary-light"
                        to="/ContactUs"
                    >
                        Contact Us
                    </Link>
                    <Link
                        className="px-2 border-r-2 border-primary-light"
                        to="/About"
                    >
                        About Us
                    </Link>
                    <Link
                        className="px-2 border-r-2 border-primary-light"
                        to="/Help"
                    >
                        Help
                    </Link>
                </>
            </div>
        </div>
    );
};

export default DesktopTopMenuBar;

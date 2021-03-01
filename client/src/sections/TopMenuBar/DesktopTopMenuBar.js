import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PhoneIcon from '@material-ui/icons/Phone';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

const DesktopTopMenuBar = () => {
    const [active, setActive] = useState(false);

    return (
        <div className="flex bg-primary-dark w-full h-6 text-white text-sm items-center justify-between px-52">
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
                            <a href="/" className="px-4 py-1">
                                <PersonOutlineIcon /> Account
                            </a>
                            <a href="/" className="px-4 py-1">
                                <ShoppingBasketIcon /> Orders
                            </a>
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
                        to="/contactUs"
                    >
                        Contact Us
                    </Link>
                    <Link
                        className="px-2 border-r-2 border-primary-light"
                        to="/about"
                    >
                        About Us
                    </Link>
                    <Link
                        className="px-2 border-r-2 border-primary-light"
                        to="/help"
                    >
                        Help
                    </Link>
                </>
            </div>
        </div>
    );
};

export default DesktopTopMenuBar;

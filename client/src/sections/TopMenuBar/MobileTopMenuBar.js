import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
// import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import CameraAltOutlinedIcon from '@material-ui/icons/CameraAltOutlined';
import WatchOutlinedIcon from '@material-ui/icons/WatchOutlined';
import WbIncandescentOutlinedIcon from '@material-ui/icons/WbIncandescentOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import HomeWorkOutlinedIcon from '@material-ui/icons/HomeWorkOutlined';

const MobileTopMenuBar = () => {
    const [active, setActive] = useState(false);

    return (
        <div className="flex items-center justify-between w-full h-6 bg-primary-dark text-white ">
            <div>
                <>
                    <button
                        className=" border-primary-light focus:outline-none"
                        onClick={() => {
                            setActive(!active);
                        }}
                    >
                        <MenuIcon />
                    </button>
                    {active && (
                        <div className="flex flex-col absolute text-primary-dark font-semibold w-full h-full bg-white py-2 text-sm">
                            <div className=" flex flex-col justify-center px-4 items-start py-2 w-full bg-transparent">
                                <div className="flex">
                                    <div className=" flex justify-center items-center h-10 w-10 mr-4 rounded bg-primary-dark">
                                        <h1 className="text-white text-lg font-semibold">
                                            S
                                        </h1>
                                    </div>
                                    <div>
                                        <h1 className="text-primary-dark font-bold text-sm ">
                                            Sunday Patrick
                                        </h1>
                                        <h2 className="text-primary-dark  ">
                                            sundaypatrick406@gmail.com
                                        </h2>
                                    </div>
                                </div>
                                <Link className=" mt-2 " to="#">
                                    <h1 className="text-primary-dark text-xs font-semibold">
                                        ACCOUNT SETTINGS
                                    </h1>
                                </Link>
                            </div>
                            <div className="flex justify-between my-4 mx-4">
                                <a
                                    href="/login"
                                    className=" py-1 px-10 rounded bg-transparent border border-2 border-primary-dark text-primary-dark  "
                                >
                                    Login
                                </a>
                                <a
                                    href="/signup"
                                    className=" py-1 px-10 rounded bg-transparent border border-2 border-primary-dark text-primary-dark  "
                                >
                                    Signup
                                </a>
                            </div>
                            <a
                                href="/Dashboard/My Account Info"
                                className=" flex px-4 pt-2 border-t border-gray-300"
                            >
                                <AccountCircleOutlinedIcon />{' '}
                                <h1 className="ml-1">My Profile</h1>
                            </a>
                            <a
                                href="/Dashboard/Delivery Address"
                                className=" flex px-4 py-2"
                            >
                                <HomeWorkOutlinedIcon />
                                <h1 className="ml-1">My Address</h1>
                            </a>
                            <a
                                href="/Dashboard/My Orders"
                                className=" flex px-4 pb-2"
                            >
                                <ShoppingBasketOutlinedIcon />
                                <h1 className="ml-1">My Orders</h1>
                            </a>
                            <a
                                href="/"
                                className="flex px-4 py-3 border-t border-gray-300"
                            >
                                OUR CATEGORIES{' '}
                                <h1 className="ml-24 text-xs underline">
                                    See All
                                </h1>
                            </a>
                            <a href="/" className="px-4 py-2">
                                <HomeOutlinedIcon /> Home
                            </a>
                            <a href="/" className="px-4 py-2">
                                <CameraAltOutlinedIcon /> Cameras
                            </a>
                            <a href="/" className="px-4 py-2">
                                <WatchOutlinedIcon /> Watchies
                            </a>
                            <a href="/" className="px-4 py-2">
                                <WbIncandescentOutlinedIcon /> Lighting
                            </a>
                            <a
                                href="/"
                                className="px-4 py-2 border-t border-gray-300"
                            >
                                Contact Us
                            </a>
                            <a href="/" className="px-4 py-2">
                                About Us
                            </a>
                        </div>
                    )}
                </>
            </div>
            <div>
                <TwitterIcon className="text-white px-1" />
                <FacebookIcon className="text-white px-1" />
                <LinkedInIcon className="text-white-light px-1" />
            </div>
        </div>
    );
};

export default MobileTopMenuBar;

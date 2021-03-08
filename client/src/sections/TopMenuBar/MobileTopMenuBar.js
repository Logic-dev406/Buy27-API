import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import CameraAltOutlinedIcon from '@material-ui/icons/CameraAltOutlined';
import WatchOutlinedIcon from '@material-ui/icons/WatchOutlined';
import WbIncandescentOutlinedIcon from '@material-ui/icons/WbIncandescentOutlined';

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
                        <div className="flex flex-col absolute text-white w-screen h-full bg-primary-dark py-2 text-sm">
                            <a href="/" className="px-4 py-3">
                                MY ACCOUNT{' '}
                                <ChevronRightIcon className="ml-36 " />
                            </a>
                            <a href="/" className="px-4 py-3">
                                <ShoppingBasketOutlinedIcon /> Orders
                            </a>
                            <a href="/" className="px-4 py-3">
                                <FavoriteBorderIcon /> Saved items
                            </a>
                            <a href="/" className="flex px-4 py-3 border-t">
                                OUR CATEGORIES{' '}
                                <h1 className="ml-24 text-xs underline">
                                    See All
                                </h1>
                            </a>
                            <a href="/" className="px-4 py-3">
                                <HomeOutlinedIcon /> Home
                            </a>
                            <a href="/" className="px-4 py-3">
                                <CameraAltOutlinedIcon /> Cameras
                            </a>
                            <a href="/" className="px-4 py-3">
                                <WatchOutlinedIcon /> Watchies
                            </a>
                            <a href="/" className="px-4 py-3">
                                <WbIncandescentOutlinedIcon /> Lighting
                            </a>
                            <a href="/" className="px-4 py-3 border-t">
                                Contact Us
                            </a>
                            <a href="/" className="px-4 py-3">
                                Help Center
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

import React, { useState, useEffect } from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import logo from '../assets/images/buy27logo.png';
import { IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlined from '@material-ui/icons/ShoppingCartOutlined';
import TopMenuBar from './TopMenuBar';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMobile, setisMobile] = useState(
        window.matchMedia('(max-width:768px)').matches
    );

    useEffect(() => {
        window.addEventListener('resize', () => {
            setisMobile(window.matchMedia('(max-width:768px)').matches);
        });
    });

    return (
        <div>
            <TopMenuBar />
            <div className="flex px-0 md:px-52 w-full h-32 border-b-2 border-secondary-dark items-center justify-center md:justify-between">
                <div>
                    {isMobile ? (
                        ''
                    ) : (
                        <div>
                            <TwitterIcon className="text-primary-dark px-0.5" />
                            <FacebookIcon className="text-primary-dark px-0.5" />
                            <LinkedInIcon className="text-primary-dark px-0.5" />
                        </div>
                    )}
                </div>
                <div className="flex flex-col items-center">
                    <Link to="/">
                        <img src={logo} width="150" alt="buy27 logo" />
                    </Link>
                    {isMobile ? (
                        <div>
                            <input
                                type="text"
                                placeholder="Search Products"
                                className="focus: outline-none bg-transparent"
                            />{' '}
                            <IconButton className="focus:outline-none">
                                <SearchIcon className="text-primary-dark" />
                            </IconButton>
                            <IconButton className="focus:outline-none">
                                <ShoppingCartOutlined className="text-primary-dark" />
                            </IconButton>
                        </div>
                    ) : (
                        <div className="pt-3 text-primary-dark text-sm font-semibold">
                            <a href="/" className="px-4">
                                Home
                            </a>
                            <a href="/" className="px-4">
                                NewCollections
                            </a>
                            <a href="/" className="px-4">
                                Cameras
                            </a>
                            <a href="/" className="px-4">
                                Watchies
                            </a>
                            <a href="/" className="px-4">
                                Lighting
                            </a>
                        </div>
                    )}
                </div>
                {isMobile ? (
                    ''
                ) : (
                    <div>
                        <input
                            type="text"
                            placeholder="Search Products"
                            className="focus: outline-none bg-transparent"
                        />{' '}
                        <IconButton className="focus:outline-none">
                            <SearchIcon className="text-primary-dark" />
                        </IconButton>
                        <IconButton className="focus:outline-none">
                            <ShoppingCartOutlined className="text-primary-dark" />
                        </IconButton>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;

import React from 'react';
import { IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlined from '@material-ui/icons/ShoppingCartOutlined';
import TopMenuBar from '../../components/TopMenuBar';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/buy27logo.png';

const MobileNavbar = ({ getCartCount }) => {
    return (
        <div>
            <TopMenuBar />
            <div className="flex px-0 md:px-52 w-full h-32 border-b-2 border-secondary-dark items-center justify-center md:justify-between">
                <div className="flex flex-col items-center">
                    <Link to="/">
                        <img src={logo} width="100" alt="buy27 logo" />
                    </Link>
                    <div className="flex items-center justify-between">
                        <input
                            type="text"
                            placeholder="Search Products"
                            className="focus: outline-none bg-transparent"
                        />{' '}
                        <IconButton className="focus:outline-none">
                            <SearchIcon className="text-primary-dark" />
                        </IconButton>
                        <Link to="/cart" className="flex items-center ">
                            <ShoppingCartOutlined className="text-primary-dark" />
                            <h1 className="h-4 w-4 bg-primary-dark text-sm text-center text-white font-semibold rounded ml-">
                                {getCartCount()}
                            </h1>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileNavbar;

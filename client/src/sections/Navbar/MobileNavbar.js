import React from 'react';
import { IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlined from '@material-ui/icons/ShoppingCartOutlined';
import TopMenuBar from '../../components/TopMenuBar';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/buy27logo.png';

const MobileNavbar = () => {
    return (
        <div>
            <TopMenuBar />
            <div className="flex px-0 md:px-52 w-full h-32 border-b-2 border-secondary-dark items-center justify-center md:justify-between">
                <div className="flex flex-col items-center">
                    <Link to="/">
                        <img src={logo} width="150" alt="buy27 logo" />
                    </Link>
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
                </div>
            </div>
        </div>
    );
};

export default MobileNavbar;

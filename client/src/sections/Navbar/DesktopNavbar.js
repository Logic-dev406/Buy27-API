import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import logo from '../../assets/images/buy27logo.png';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlined from '@material-ui/icons/ShoppingCartOutlined';
import TopMenuBar from '../../components/TopMenuBar';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const DesktopNavbar = ({
    getCartCount,
    getSearchedProducts,
    searchTerm,
    setSearchTerm,
}) => {
    const dispatch = useDispatch();

    let history = useHistory();

    const handleInput = (e) => {
        const inputText = e.target.value;
        setSearchTerm(inputText);
    };

    const handleEnterKeyPress = (e) => {
        if (e.key === 'Enter') {
            dispatch(getSearchedProducts(searchTerm));
            history.push(`/Search`);
            setSearchTerm('');
        }
    };

    const handleSearchClicked = (e) => {
        dispatch(getSearchedProducts(searchTerm));
        history.push(`/Search`);
        setSearchTerm('');
    };

    return (
        <div>
            <TopMenuBar />
            <div className="flex px-0 md:px-52 w-full h-32 border-b-2 border-secondary-dark items-center justify-center md:justify-between">
                <div>
                    <div>
                        <TwitterIcon className="text-primary-dark px-0.5" />
                        <FacebookIcon className="text-primary-dark px-0.5" />
                        <LinkedInIcon className="text-primary-dark px-0.5" />
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <Link to="/">
                        <img src={logo} width="150" alt="buy27 logo" />
                    </Link>
                    <div className="pt-3 text-primary-dark text-sm font-semibold">
                        <a href="/" className="px-4">
                            Home
                        </a>
                        <a href="/Shop" className="px-4">
                            Shop
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
                </div>
                <div className="flex">
                    <div className="items-center justify-center border pl-2 rounded bg-primary-light text-white">
                        <input
                            onChange={handleInput}
                            onKeyPress={handleEnterKeyPress}
                            type="search"
                            value={searchTerm}
                            placeholder="Search Products"
                            className="focus: outline-none bg-transparent"
                        />{' '}
                        <button
                            onClick={handleSearchClicked}
                            className="focus:outline-none bg-primary-dark py-1 px-1 rounded-r"
                        >
                            <SearchIcon className="text-white" />
                        </button>
                    </div>
                    <Link
                        to="/Cart"
                        className="flex items-center ml-4 px-2 py-1 rounded bg-primary-dark hover:bg-primary-light focus:outline-none"
                    >
                        <ShoppingCartOutlined className="text-white" />
                        <h1 className="text-white">Cart</h1>
                        <h1 className="h-5 w-5 bg-white text-center text-black font-semibold rounded ml-2">
                            {getCartCount()}
                        </h1>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DesktopNavbar;

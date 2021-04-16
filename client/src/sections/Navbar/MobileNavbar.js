import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlined from '@material-ui/icons/ShoppingCartOutlined';
import TopMenuBar from '../../components/TopMenuBar';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/buy27logo.png';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const MobileNavbar = ({
    getCartCount,
    searchTerm,
    setSearchTerm,
    getSearchedProducts,
}) => {
    const handleInput = (e) => {
        const inputText = e.target.value;
        setSearchTerm(inputText);
    };
    const dispatch = useDispatch();
    let history = useHistory();

    const handleEnterKeyPress = (e) => {
        if (e.key === 'Enter') {
            dispatch(getSearchedProducts(searchTerm));
            history.push(`/search`);
            setSearchTerm('');
        }
    };

    const handleSearchClicked = (e) => {
        dispatch(getSearchedProducts(searchTerm));
        history.push(`/search`);
        setSearchTerm('');
    };

    return (
        <div>
            <TopMenuBar />
            <div className="flex px-0 md:px-52 w-full h-32 border-b-2 border-secondary-dark items-center justify-center md:justify-between">
                <div className="flex flex-col items-center">
                    <Link to="/">
                        <img src={logo} width="100" alt="buy27 logo" />
                    </Link>
                    <div className="flex items-center justify-center mt-3">
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
                        <Link to="/cart" className="flex items-center ml-2 ">
                            <ShoppingCartOutlined className="text-primary-dark" />
                            <h1 className="h-4 w-4 bg-primary-dark text-sm text-center text-white font-semibold rounded">
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

import React from 'react';
import SearchIcon from '@material-ui/icons/Search';

export const SearchBar = ({
    handleEnterKeyPress,
    handleInput,
    handleSearchClicked,
    searchTerm,
}) => {
    return (
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
    );
};

export default SearchBar;

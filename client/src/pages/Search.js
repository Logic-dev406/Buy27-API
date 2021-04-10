import React, { useEffect, useState } from 'react';
import SearchedProducts from '../components/Search/SearchedProducts';
import ScrollToTop from '../components/Shop/ScrollToTop';
import { useDispatch } from 'react-redux';

//Action
import { getProducts as listProducts } from '../redux/actions/productActions';

const Search = ({ searchLoading, searchError, searchedProducts }) => {
    const [isMobile, setisMobile] = useState(
        window.matchMedia('(max-width:768px)').matches
    );

    useEffect(() => {
        window.addEventListener('resize', () => {
            setisMobile(window.matchMedia('(max-width:768px)').matches);
        });
    });

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);

    const [didMount, setDidMount] = useState(false);

    useEffect(() => {
        setDidMount(true);
        return () => setDidMount(false);
    }, []);

    if (!didMount) {
        return null;
    }

    return (
        <div className="flex flex-col bg-gray-100 h-full w-full">
            <div className="flex justify-center mx-0 md:mx-52">
                <div>
                    {isMobile ? (
                        ''
                    ) : (
                        <div className="h-96 w-72 bg-white mr-5"></div>
                    )}
                </div>
                <SearchedProducts
                    searchedProducts={searchedProducts}
                    searchError={searchError}
                    searchLoading={searchLoading}
                />
                <div>{isMobile ? '' : <ScrollToTop />}</div>
            </div>
        </div>
    );
};

export default Search;

import React from 'react';
import { Link } from 'react-router-dom';
import CancelSearchIcon from '../../assets/icons/cancelsearchicon.png';

const SearchedProducts = ({ searchedProducts, searchError, searchLoading }) => {
    return (
        <div>
            <div className="  bg-transparent md:bg-transparent">
                <div>
                    {searchedProducts.length === 0 ? (
                        <div className="flex flex-col items-center px-2 my-28 mx-0 md:mx-28 h-72 md:w-96 bg-white rounded shadow-lg text-primary-dark">
                            <img
                                className="mt-10"
                                src={CancelSearchIcon}
                                width="100"
                                alt="SearchIcon"
                            />
                            <h1 className="font-bold text-sm md:text-normal mt-5 mb-2">
                                We couldn’t find what you were looking for.
                            </h1>
                            <h3 className="text-sm ">
                                - Try searching more general terms
                            </h3>
                            <h3 className="text-sm ">
                                - Try searching with short and simple keywords
                            </h3>
                        </div>
                    ) : (
                        <div className=" grid grid-cols-2 md:grid-cols-4 gap-y-2 md:gap-y-2 gap-x-2 md:gap-x-2 py-2 md:py-2 px2 md:px-2 bg-transparent md:bg-white">
                            {searchLoading ? (
                                <h1>Loading...</h1>
                            ) : searchError ? (
                                <h2>{searchError}</h2>
                            ) : (
                                searchedProducts.map((product) => (
                                    <Link
                                        to={`/Shop/${product.slug}`}
                                        key={product.id}
                                        className=" bg-white * hover:shadow-lg h-68 md:h-80 w-36 md:w-44 rounded justify-center "
                                    >
                                        <img
                                            className="h-40 md:h-48 w-36 md:w-44 rounded-t"
                                            src={product.image}
                                            alt="product"
                                        />
                                        <h1 className="text-left text-black text-xs font-semibold pl-2 pt-2 truncate">
                                            {product.name}
                                        </h1>

                                        <h5 className="text-left text-gray-500 text-xs pl-2 font-semibold">
                                            <span className="mr-1">
                                                &#8358;
                                            </span>
                                            {product.price}
                                        </h5>
                                        <button className="text-sm font-normal md:font-bold mb-2 md:mb-0 mt-4 md:mt-10 mx-0 md:mx-2 ml-2 bg-primary-dark md:bg-transparent hover:bg-primary-dark rounded border border-primary-dark text-white md:text-primary-dark hover:text-white w-32 md:w-40 h-8 md:h-10 focus:outline-none">
                                            View Product
                                        </button>
                                    </Link>
                                ))
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SearchedProducts;

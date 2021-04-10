import React from 'react';
import { Link } from 'react-router-dom';

const ShopProducts = ({ products, loading, error }) => {
    return (
        <div>
            <div className="  bg-transparent md:bg-white">
                <div className=" grid grid-cols-2 md:grid-cols-4 gap-y-2 md:gap-y-2 gap-x-2 md:gap-x-2 py-2 md:py-2 px2 md:px-2 bg-transparent">
                    {loading ? (
                        <h1>Loading...</h1>
                    ) : error ? (
                        <h2>{error}</h2>
                    ) : (
                        products.map((product) => (
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
                                <h1 className="text-left text-black text-xs font-semibold pl-2 pt-2">
                                    {product.name}
                                </h1>

                                <h5 className="text-left text-gray-500 text-xs pl-2 font-semibold">
                                    <span className="mr-1">&#8358;</span>
                                    {product.price}
                                </h5>
                                <button className="text-sm font-normal md:font-bold mb-2 md:mb-0 mt-4 md:mt-10 mx-0 md:mx-2 ml-2 bg-primary-dark md:bg-transparent hover:bg-primary-dark rounded border border-primary-dark text-white md:text-primary-dark hover:text-white w-32 md:w-40 h-8 md:h-10 focus:outline-none">
                                    View Product
                                </button>
                            </Link>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default ShopProducts;

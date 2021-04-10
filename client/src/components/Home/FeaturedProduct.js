import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

//Action
import { getFeaturedProducts as featuredProducts } from '../../redux/actions/productActions';

const FeaturedProduct = () => {
    const dispatch = useDispatch();

    const getFeaturedProducts = useSelector(
        (state) => state.getFeaturedProducts
    );
    const { products, loading, error } = getFeaturedProducts;

    useEffect(() => {
        dispatch(featuredProducts());
    }, [dispatch]);

    return (
        <div>
            <div className="flex flex-col items-center text-center ">
                <div>
                    <h1 className="text-primary-dark font-bold text-3xl">
                        Featured Product
                    </h1>
                    <h1 className="text-gray-500 text-sm">
                        These are some of our top best selling products on our
                        site.
                    </h1>
                </div>
                <div className=" grid grid-cols-2 md:grid-cols-4 gap-y-2 md:gap-y-5 gap-x-2 md:gap-x-5 bg-transparent md:bg-white p-0 md:p-5 mt-5">
                    {loading ? (
                        <h1>Loading...</h1>
                    ) : error ? (
                        <h1>{error}</h1>
                    ) : (
                        products.map((product) => (
                            <Link
                                to={`/Shop/${product.slug}`}
                                key={product.id}
                                className="bg-white * hover:shadow-lg h-60 md:h-72 w-36 md:w-44 rounded"
                            >
                                <img
                                    className="h-40 md:h-48 w-40 md:w-48 rounded-t"
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
                            </Link>
                        ))
                    )}
                </div>
                <a
                    href="/shop"
                    className="flex flex-col mt-5 md:mt-8 mb-5 bg-primary-dark h-10 w-40 items-center justify-center"
                >
                    <h1 className="text-white text-center text-sm">
                        VIEW ALL PRODUCTS
                    </h1>
                </a>
                <div className="bg-gray-500 h-52 md:h-72 w-full md:w-2/3 mb-8"></div>
            </div>
        </div>
    );
};

export default FeaturedProduct;

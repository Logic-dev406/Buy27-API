import React, { useEffect, useState } from 'react';
import ShopProduct from '../components/Shop/ShopProducts';
import ScrollToTop from '../components/Shop/ScrollToTop';

//Action
import { addToCart } from '../redux/actions/cartAction';

const Shop = () => {
    const [isMobile, setisMobile] = useState(
        window.matchMedia('(max-width:768px)').matches
    );

    useEffect(() => {
        window.addEventListener('resize', () => {
            setisMobile(window.matchMedia('(max-width:768px)').matches);
        });
    });

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
                <ShopProduct addToCartAction={addToCart} />
                <div>{isMobile ? '' : <ScrollToTop />}</div>
            </div>
        </div>
    );
};

export default Shop;

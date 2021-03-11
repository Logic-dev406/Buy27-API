import React from 'react';
import ShopProduct from '../components/Shop/ShopProducts';

const Shop = () => {
    return (
        <div className="flex flex-col bg-gray-100 h">
            <div className="flex justify-center mx-52">
                <div className="h-96 w-72 bg-white mr-5"></div>
                <ShopProduct />
            </div>
        </div>
    );
};

export default Shop;

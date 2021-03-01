import { Divider } from '@material-ui/core';
import React from 'react';
import Banner from '../components/Banner';
import FeaturedProduct from '../components/FeaturedProduct';

const Home = () => {
    return (
        <div className="flex flex-col ">
            <Banner />
            <div className="border-b-2 border-gray mx-0 md:mx-20 mb-4 md:mb-8"></div>
            <FeaturedProduct />
            <div className="flex flex-col items-center">
                <div className=" h-64 w-full md:w-2/3 mb-4 md:mb-8 bg-primary-dark text-white">
                    <h1 className="text-center mt-8 text-lg font-normal">
                        Online Shopping on Buy27.com – Nigeria’s Largest Online
                        Mall
                    </h1>
                    <h1 className="text-center my-2 mx-8 font-light">
                        Buy27.com is Nigeria’s number one online Shopping
                        destination.We pride ourselves in having everything you
                        could possibly need for life and living at the best
                        prices than anywhere else. Our access to Original
                        Equipment Manufacturers and premium sellers gives us a
                        wide range of products at very low prices. Some of our
                        popular categories include electronics, mobile phones,
                        computers, fashion, beauty products, home and kitchen,
                        Building and construction materials and a whole lot more
                        from premium brands.
                    </h1>
                    <h1 className="text-center text-normal font-normal">
                        Mr.Sunday Patrick
                    </h1>
                    <h1 className="text-center text-xs font-light">
                        Buy27 Manager
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Home;

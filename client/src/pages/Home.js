import React from 'react';
import Banner from '../components/Home/Banner';
import FeaturedProduct from '../components/Home/FeaturedProduct';
import Buy27Info from '../components/Home/Buy27Info';

const Home = () => {
    return (
        <div className="flex flex-col bg-gray-100 h-full w-full">
            <Banner />
            <div className="border-b-2 border-gray mx-0 md:mx-20 mb-4 md:mb-8"></div>
            <FeaturedProduct />
            <Buy27Info />
        </div>
    );
};

export default Home;

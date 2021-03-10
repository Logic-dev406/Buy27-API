import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FeaturedProduct = () => {
    useEffect(() => {
        fechItems();
    }, []);

    const [items, setItems] = useState([]);

    const fechItems = async () => {
        const response = await axios.get(
            'http://localhost:3000/api/products/get/featured/8'
        );

        console.log(response.data);
        setItems(response.data);
    };

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
                <div className=" grid grid-cols-2 md:grid-cols-4 gap-y-0 md:gap-y-5 gap-x-1 md:gap-x-14">
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white mt-8 h-72 md:h-72 w-40 md:w-44 rounded"
                        >
                            <img
                                className="h-48 w-48 rounded-t"
                                src={item.image}
                                alt="product"
                            />
                            <h1 className="text-left text-black text-xs font-semibold pl-2 pt-2">
                                {item.name}
                            </h1>

                            <h5 className="text-left text-gray-500 text-xs pl-2 font-semibold">
                                {item.price}
                            </h5>
                        </div>
                    ))}
                </div>
                <a
                    href="/shop"
                    className="flex flex-col mt-8 md:mt-32 mb-8 bg-primary-dark h-10 w-40 items-center justify-center"
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

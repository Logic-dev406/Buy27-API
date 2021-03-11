import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ShopProducts = () => {
    useEffect(() => {
        fechItems();
    }, []);

    const [items, setItems] = useState([]);

    const fechItems = async () => {
        const response = await axios.get('http://localhost:3000/api/products');

        console.log(response.data);
        setItems(response.data);
    };

    return (
        <div>
            <div className="  bg-white">
                <div className=" grid grid-cols-2 md:grid-cols-4 gap-y-0 md:gap-y-2 gap-x-1 md:gap-x-2 py-4 px-4 bg-transparent">
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className=" bg-white * hover:shadow-lg h-72 md:h-80 w-40 md:w-48 rounded justify-center"
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
                                <span className="mr-1">&#8358;</span>
                                {item.price}
                            </h5>
                            <button className="mt-10 mx-2 bg-transparent hover:bg-primary-dark rounded border text-primary-dark hover:text-white border-primary-dark w-44 h-10">
                                <h1 className=" text-sm font-bold">
                                    Add To Cart
                                </h1>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ShopProducts;

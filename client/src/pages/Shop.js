import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Shop = () => {
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
        <div className="flex flex-col bg-gray-100 h">
            <div className="flex justify-center mx-20">
                <div className="h-96 w-72 bg-white mr-5"></div>
                <div className="  bg-white">
                    <div className=" grid grid-cols-2 md:grid-cols-4 gap-y-0 md:gap-y-2 gap-x-1 md:gap-x-2 py-4 px-4">
                        {items.map((item) => (
                            <div
                                key={item.id}
                                className="bg-white * hover:shadow-lg h-72 hover:h-76 md:h-72 w-40 hover:w-44  md:w-44 rounded"
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
                </div>
            </div>
        </div>
    );
};

export default Shop;

import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

const MobileOrders = () => {
    let { path, url } = useRouteMatch();

    return (
        <div>
            <div className=" h-screen w-screen bg-gray-100 overflow-y-auto">
                <h1 className="flex  justify-between w-full py-1 px-4 mb-2 bg-white text-sm font-bold">
                    My orders
                </h1>
                <div className="bg-white rounded py-4 px-2 mx-4 border ">
                    <div className="flex text-sm justify-between border-b pb-2">
                        <h1 className=" font-semibold ">
                            Order Date: 13 Feb 2021
                        </h1>
                        <Link
                            to={`${url}/Order detais`}
                            className="text-primary-dark"
                        >
                            View Order
                        </Link>
                    </div>
                    <div className="flex justify-between border-b py-2 text-sm">
                        <div className="flex ">
                            <h1 className="pr-1 font-semibold">Total:</h1>{' '}
                            <h1>
                                <span className="">&#8358;</span>3,050
                            </h1>
                        </div>
                        <div className="flex">
                            <h1 className="pr-1 font-semibold">Order No:</h1>
                            <h1>R5T67FgWE</h1>
                        </div>
                    </div>
                    <img className="h-10 w-10 pt-2" src="" alt="Product" />
                </div>
            </div>
        </div>
    );
};

export default MobileOrders;

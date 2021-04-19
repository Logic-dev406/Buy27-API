import React from 'react';
import { Link } from 'react-router-dom';

export const MyOrders = () => {
    return (
        <div>
            <div className="h-screen bg-transparent">
                <div className="flex flex-col justify-center pl-4 h-16 w-full bg-white shadow-lg">
                    <h1 className="font-bold text-sm">My Orders</h1>
                </div>
                <div className="flex flex-col items-center w-full overflow-y-scroll mr-12">
                    <div className="w-96 "></div>
                    <Link
                        to="#"
                        className="h-44 w-96 bg-transparent border border-primary-dark rounded my-8"
                    >
                        <div className="flex items-center h-10 w-full bg-primary-light">
                            <h1 className="ml-3 text-white text-xs ">
                                Order Date: 19 Oct 2020
                            </h1>
                        </div>
                        <div className="flex justify-between mx-3 mt-4 text-primary-dark">
                            <div className="text-sm font-semibold ">
                                <div className="flex">
                                    <h1>Total:</h1>
                                    <h1 className="text-sm font-normal ml-1">
                                        1,000
                                    </h1>
                                </div>
                                <div className="flex">
                                    <h1>Order No: </h1>
                                    <h1 className="text-sm font-normal ml-1">
                                        14R3H0JGn3
                                    </h1>
                                </div>
                                <div className="flex">
                                    <h1>Payment Method:</h1>
                                    <h1 className="text-sm font-normal ml-1">
                                        Pay Befor Order
                                    </h1>
                                </div>
                                <img
                                    src=""
                                    alt="product"
                                    className="h-10 w-10 mt-2"
                                />
                            </div>
                            <div className="text-right">
                                <h1 className="text-sm font-semibold">
                                    Delivery Address:
                                </h1>
                                <h1 className="text-sm font-normal">
                                    Fct Abuja
                                </h1>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MyOrders;

import React from 'react';
import { TabGroup } from '@statikly/funk';
import { Link } from 'react-router-dom';

export const OrderState = () => {
    return (
        <div>
            <TabGroup numTabs={4} direction={TabGroup.direction.HORIZONTAL}>
                <div className="h-screen bg-transparent border-l">
                    <div className="flex flex-col justify-center pl-4 h-16 w-full bg-primary-light shadow-lg ">
                        <TabGroup.TabList>
                            <TabGroup.Tab
                                index={0}
                                className="h-16 px-4 transition-colors duration-150"
                                activeClassName="bg-primary-dark focus:outline-none text-white"
                                inactiveClassName="text-white focus:outline-none"
                            >
                                All
                            </TabGroup.Tab>
                            <TabGroup.Tab
                                index={1}
                                className="h-16 px-4 transition-colors duration-150"
                                activeClassName="bg-primary-dark focus:outline-none text-white"
                                inactiveClassName="text-white focus:outline-none"
                            >
                                Being Processed
                            </TabGroup.Tab>
                            <TabGroup.Tab
                                index={2}
                                className="h-16 px-4 transition-colors duration-150"
                                activeClassName="bg-primary-dark focus:outline-none text-white"
                                inactiveClassName="text-white focus:outline-none"
                            >
                                Delivered
                            </TabGroup.Tab>
                            <TabGroup.Tab
                                index={3}
                                className="h-16 px-4 transition-colors duration-150"
                                activeClassName="bg-primary-dark focus:outline-none text-white"
                                inactiveClassName="text-white focus:outline-none"
                            >
                                Cancelled
                            </TabGroup.Tab>
                        </TabGroup.TabList>
                    </div>
                    <div className="flex flex-col items-center w-full overflow-y-scroll mr-12">
                        <div className="w-96 "></div>
                        <TabGroup.TabPanel
                            index={0}
                            className="flex flex-col items-center transition-all transform"
                            activeClassName="opacity-100 duration-500 translate-x-0"
                            inactiveClassName="absolute opacity-0 -translate-x-2"
                        >
                            <Link
                                to="#"
                                className="h-52 w-96 bg-transparent border border-primary-dark rounded my-8"
                            >
                                <div className="flex items-center justify-between h-14 w-full px-4 bg-primary-light text-white">
                                    <div>
                                        <div className="flex text-sm font-normal">
                                            <h1>Tracking ID:</h1>
                                            <h1 className="font-semibold ml-2">
                                                A2Dw42F3e42
                                            </h1>
                                        </div>
                                        <div className="flex text-sm font-normal">
                                            <h1>Sold By:</h1>
                                            <h1 className="font-semibold ml-2">
                                                Buy27
                                            </h1>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex text-sm font-normal">
                                            <h1>Shipping Fee:</h1>
                                            <h1 className="font-semibold ml-2">
                                                000.00
                                            </h1>
                                        </div>
                                        <div className="flex text-sm font-normal">
                                            <h1>Total:</h1>
                                            <h1 className="font-semibold ml-2">
                                                3,890
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                                <div className=" flex items-center justify-between px-4  w-full bg-transparent border-b py-2">
                                    <h1 className="text-primary-dark">
                                        Track Order
                                    </h1>
                                    <h1 className="bg-primary-light py-1 px-2 text-xs text-white rounded">
                                        Delivered
                                    </h1>
                                </div>
                                <div className="flex justify-between mx-3 mt-3 text-primary-dark">
                                    <div className=" flex text-sm font-medium ">
                                        <div className="mr-4">
                                            <img
                                                src=""
                                                alt="product"
                                                className="h-10 w-10 mt-2 "
                                            />
                                        </div>
                                        <div>
                                            <h1 className="flex">
                                                This is a product that was
                                                ordered by u
                                            </h1>
                                            <h1 className="flex font-bold">
                                                3,000
                                            </h1>
                                            <div className="flex">
                                                <h1>Quantity:</h1>
                                                <h1 className="text-sm font-normal ml-1">
                                                    1
                                                </h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <h1 className="text-sm font-meduim">
                                            Rate This Product
                                        </h1>
                                    </div>
                                </div>
                            </Link>
                        </TabGroup.TabPanel>
                        <TabGroup.TabPanel
                            index={1}
                            className="p-16 transition-all transform h-64 flex flex-col"
                            activeClassName="opacity-100 duration-500 translate-x-0"
                            inactiveClassName="absolute opacity-0 -translate-x-2"
                        >
                            <h1>No transition</h1>
                            <h2>Please select an order</h2>
                        </TabGroup.TabPanel>
                        <TabGroup.TabPanel
                            index={2}
                            className="p-16 transition-all transform h-64"
                            activeClassName="opacity-100 duration-500 translate-x-0"
                            inactiveClassName="absolute opacity-0 -translate-x-2"
                        >
                            Content 3
                        </TabGroup.TabPanel>
                        <TabGroup.TabPanel
                            index={3}
                            className="p-16 transition-all transform h-64"
                            activeClassName="opacity-100 duration-500 translate-x-0"
                            inactiveClassName="absolute opacity-0 -translate-x-2"
                        >
                            Content 4
                        </TabGroup.TabPanel>
                    </div>
                </div>
            </TabGroup>
        </div>
    );
};

export default OrderState;

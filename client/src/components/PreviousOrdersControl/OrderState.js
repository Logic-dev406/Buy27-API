import React from 'react';
import { TabGroup } from '@statikly/funk';
import { Link } from 'react-router-dom';
import ReceiptIcon from '@material-ui/icons/Receipt';

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
                                className="h-44 w-96 bg-transparent border border-primary-dark rounded my-8"
                            >
                                <div className="flex items-center h-10 w-full bg-primary-light">
                                    {' '}
                                    <h1 className="ml-3 text-white text-xs ">
                                        Order Date: 19 Oct 2020
                                    </h1>
                                </div>
                                <div className="flex justify-between mx-3 mt-4 text-primary-dark">
                                    <div className="text-sm font-semibold ">
                                        <h1 className="flex">
                                            Total:{' '}
                                            <h2 className="text-sm font-normal ml-1">
                                                1,000
                                            </h2>
                                        </h1>
                                        <h1 className="flex">
                                            Order No:{' '}
                                            <h2 className="text-sm font-normal ml-1">
                                                14R3H0JGn3
                                            </h2>
                                        </h1>
                                        <h1 className="flex">
                                            Payment Method:{' '}
                                            <h2 className="text-sm font-normal ml-1">
                                                Pay Befor Order
                                            </h2>
                                        </h1>
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

import React from 'react';
import { TabGroup } from '@statikly/funk';
import { Link, Switch, Route } from 'react-router-dom';
import OrdersDetails from '../../components/OrderDetail/OrderDetails';

const MobileOrders = ({ path, url }) => {
    return (
        <div>
            <Switch>
                <Route exact={true} path={path}>
                    <TabGroup
                        numTabs={4}
                        direction={TabGroup.direction.HORIZONTAL}
                    >
                        <div className=" bg-white">
                            <div className="flex flex-col justify-center pl-4 h-16 w-screen bg-white border-b">
                                <h1 className="font-bold text-sm">My Orders</h1>
                            </div>
                            <div className="flex flex-col justify-center pl-2 h-16 w-full bg-white border-b border-gray">
                                <TabGroup.TabList>
                                    <TabGroup.Tab
                                        index={0}
                                        className="h-16 px-2 transition-colors duration-150"
                                        activeClassName=" focus:outline-none text-primary-dark border-b-2 border-primary-dark"
                                        inactiveClassName="text-gray-500 focus:outline-none"
                                    >
                                        Deliverd Orders (2)
                                    </TabGroup.Tab>
                                    <TabGroup.Tab
                                        index={1}
                                        className="h-16 px-2 transition-colors duration-150"
                                        activeClassName=" focus:outline-none text-primary-dark border-b-2 border-primary-dark"
                                        inactiveClassName="text-gray-500 focus:outline-none"
                                    >
                                        Cancel Orders (4)
                                    </TabGroup.Tab>
                                </TabGroup.TabList>
                            </div>
                            <div className="flex flex-col items-center h-screen w-screen overflow-y-auto pt-4 ">
                                <TabGroup.TabPanel
                                    index={0}
                                    className=" pb-4 transition-all transform flex flex-col"
                                    activeClassName="opacity-100 duration-500 translate-x-0"
                                    inactiveClassName="absolute opacity-0 -translate-x-2"
                                >
                                    <Link
                                        to={`${url}/Details`}
                                        className=" flex justify-between text-sm py-4 px-4 bg-transparent border border-primary-dark rounded "
                                    >
                                        <div className="mr-4">
                                            <img
                                                className="h-20 w-20 bg-black"
                                                src=""
                                                alt="Product"
                                            />
                                        </div>
                                        <div className="flex flex-col">
                                            <h1 className="">
                                                Unisex plain soolo tshirt
                                            </h1>
                                            <div className="flex">
                                                <h1>Order No:</h1>
                                                <h1 className="font-normal ml-1">
                                                    28495839
                                                </h1>
                                            </div>
                                            <div className=" flex flex-col  items-center text-white rounded text-sm w-16 bg-primary-dark">
                                                <h1 className="">Delivered</h1>
                                            </div>
                                            <div className="flex text-sm">
                                                <h1>Date:</h1>
                                                <h1 className="font-normal ml-1">
                                                    1-12-2021
                                                </h1>
                                            </div>
                                        </div>
                                    </Link>
                                </TabGroup.TabPanel>
                                <TabGroup.TabPanel
                                    index={1}
                                    className=" pb-4 transition-all transform flex flex-col"
                                    activeClassName="opacity-100 duration-500 translate-x-0"
                                    inactiveClassName="absolute opacity-0 -translate-x-2"
                                >
                                    <Link
                                        to={`${url}/Details`}
                                        className=" flex justify-between  text-sm py-4 px-4 bg-transparent border border-primary-dark rounded "
                                    >
                                        <div className="mr-4">
                                            <img
                                                className="h-20 w-20 bg-black"
                                                src=""
                                                alt="Product"
                                            />
                                        </div>
                                        <div className="flex flex-col">
                                            <h1 className="">
                                                Unisex plain soolo tshirt
                                            </h1>
                                            <div className="flex">
                                                <h1>Order No:</h1>
                                                <h1 className="font-normal ml-1">
                                                    28495839
                                                </h1>
                                            </div>
                                            <div className=" flex flex-col  items-center text-white rounded text-sm w-16 bg-primary-dark">
                                                <h1 className="">Cancelled</h1>
                                            </div>
                                            <div className="flex text-sm">
                                                <h1>Date:</h1>
                                                <h1 className="font-normal ml-1">
                                                    1-12-2021
                                                </h1>
                                            </div>
                                        </div>
                                    </Link>
                                </TabGroup.TabPanel>
                            </div>
                        </div>
                    </TabGroup>
                </Route>
                <Route exact={true} path={`${path}/Details`}>
                    <OrdersDetails />
                </Route>
            </Switch>
        </div>
    );
};

export default MobileOrders;

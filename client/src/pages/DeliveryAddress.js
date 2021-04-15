import React from 'react';
import { Link } from 'react-router-dom';
import UserDashboardController from '../components/UsersDashboardControl';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';

export const DeliveryAddress = ({ url }) => {
    return (
        <div className="flex flex-col items-center bg-gray-100 ">
            <div className=" flex justify-between my-8 ">
                <UserDashboardController />
                <div className="bg-white h-screen pt-4 rounded">
                    <div className="flex flex-col justify-center pl-4 h-5 w-full ">
                        <h1 className="font-bold text-sm">
                            My Delivery Address
                        </h1>
                    </div>
                    <div className="border-b my-4 "></div>
                    <div className="bg-transparent border h-40 w-96 mx-8 rounded">
                        <div className="flex items-center justify-between px-4 py-2 text-sm font-semibold text-primary-dark ">
                            <div>
                                <h1>Address</h1>
                            </div>
                            <Link to={`${url}/Edit`}>
                                <h1>Update Address</h1>
                            </Link>
                        </div>
                        <div className="border-b  "></div>
                        <div className="flex flex-col pt-4 px-4 text-primary-dark text-sm">
                            <h1 className="my-1">
                                <i>
                                    <AccountCircleOutlinedIcon fontSize="small" />
                                </i>{' '}
                                Sunday Patrick
                            </h1>
                            <h1 className="my-1">
                                {' '}
                                <i>
                                    <LocationOnIcon fontSize="small" />
                                </i>{' '}
                                Vatican suite dei-dei,Abuja Auniciple,Abuja
                            </h1>
                            <h1 className="my-1">
                                {' '}
                                <i>
                                    <PhoneIcon fontSize="small" />
                                </i>{' '}
                                07016538707
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeliveryAddress;

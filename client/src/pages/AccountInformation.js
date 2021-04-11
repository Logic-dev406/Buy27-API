import React from 'react';
import { Link } from 'react-router-dom';
import UserDashboardController from '../components/UsersDashboardControl';

export const AccountInfomation = () => {
    return (
        <div className="flex flex-col items-center bg-gray-100 ">
            <div className=" flex my-8 ">
                <UserDashboardController />
                <div className="bg-white pt-4 pb-40 px-8 rounded text-primary-dark">
                    <h1 className="font-bold text-lg">Account Information</h1>
                    <div className="border-b  mt-3 mb-8"></div>
                    <div className="flex items-center">
                        <div className="flex flex-col mr-5">
                            <label>First Name</label>
                            <input
                                onChange={''}
                                type="text"
                                placeholder="Enter First Name"
                                className="focus: outline-none bg-transparent border border-primary-dark rounded pl-4 mb-8 h-12 w-96"
                            />
                            <label>Email Address</label>
                            <input
                                onChange={''}
                                type="text"
                                placeholder="Enter Email Address"
                                className="focus: outline-none bg-transparent border border-primary-dark rounded pl-4 mb-8 h-12 w-96"
                            />
                            <label>New Password</label>
                            <input
                                onChange={''}
                                type="text"
                                value=""
                                className="focus: outline-none bg-transparent border border-primary-dark rounded pl-4 mb-8 h-12 w-96"
                            />
                        </div>
                        <div className="flex flex-col ml-5">
                            <label>Last Name</label>
                            <input
                                onChange={''}
                                type="text"
                                placeholder="Enter Last Name"
                                className="focus: outline-none bg-transparent border border-primary-dark rounded pl-4 mb-8 h-12 w-96"
                            />
                            <label>New Password</label>
                            <input
                                onChange={''}
                                type="text"
                                className="focus: outline-none bg-transparent border border-primary-dark rounded pl-4 mb-8 h-12 w-96"
                            />
                            <label>Confirm Password</label>
                            <input
                                onChange={''}
                                type="text"
                                className="focus: outline-none bg-transparent border border-primary-dark rounded pl-4 mb-8 h-12 w-96"
                            />
                        </div>
                    </div>
                    <Link className="bg-primary-dark py-2 px-10 rounded text-white mb-40">
                        Save Changes
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AccountInfomation;

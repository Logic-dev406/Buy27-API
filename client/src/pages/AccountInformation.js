import React, { useState } from 'react';
import UserDashboardController from '../components/UsersDashboardControl';

export const AccountInfomation = () => {
    const [values, setvalues] = useState({
        firstname: '',
        emailaddress: '',
        newpassword: '',
        lastname: '',
        currentpassword: '',
        confirmpassword: '',
    });

    const handleInput = (e) => {
        const { name, value } = e.target;
        setvalues({
            ...values,
            [name]: value,
        });
    };

    const handleSubmit = () => {
        console.log(values);
    };

    return (
        <div className="flex flex-col items-center bg-gray-100 ">
            <div className=" flex my-8 ">
                <UserDashboardController />
                <div className="bg-white pt-4 h-screen px-8 rounded text-primary-dark">
                    <h1 className="font-bold text-lg">Account Information</h1>
                    <div className="border-b  mt-3 mb-8"></div>
                    <div className="flex items-center">
                        <div className="flex flex-col mr-5">
                            <label htmlFor="firstname">First Name</label>
                            <input
                                onChange={handleInput}
                                id="firstname"
                                type="text"
                                name="firstname"
                                value={values.firstname}
                                placeholder="Enter First Name"
                                className="focus: outline-none bg-transparent border border-primary-dark rounded pl-4 mb-8 h-12 w-96"
                            />
                            <label htmlFor="emailaddress">Email Address</label>
                            <input
                                onChange={handleInput}
                                id="emailaddress"
                                type="email"
                                name="emailaddress"
                                value={values.emailaddress}
                                placeholder="Enter Email Address"
                                className="focus: outline-none bg-transparent border border-primary-dark rounded pl-4 mb-8 h-12 w-96"
                            />
                            <label htmlFor="newpassword">New Password</label>
                            <input
                                onChange={handleInput}
                                id="newpassword"
                                type="password"
                                name="newpassword"
                                value={values.newpassword}
                                className="focus: outline-none bg-transparent border border-primary-dark rounded pl-4 mb-8 h-12 w-96"
                            />
                        </div>
                        <div className="flex flex-col ml-5">
                            <label htmlFor="lastname">Last Name</label>
                            <input
                                onChange={handleInput}
                                id="lastname"
                                type="text"
                                name="lastname"
                                value={values.lastname}
                                placeholder="Enter Last Name"
                                className="focus: outline-none bg-transparent border border-primary-dark rounded pl-4 mb-8 h-12 w-96"
                            />
                            <label htmlFor="currentpassword">
                                Current Password
                            </label>
                            <input
                                onChange={handleInput}
                                id="currentpassword"
                                type="password"
                                name="currentpassword"
                                value={values.currentpassword}
                                className="focus: outline-none bg-transparent border border-primary-dark rounded pl-4 mb-8 h-12 w-96"
                            />
                            <label htmlFor="confirmpassword">
                                Confirm Password
                            </label>
                            <input
                                onChange={handleInput}
                                id="confirmpassword"
                                type="password"
                                name="confirmpassword"
                                value={values.confirmpassword}
                                className="focus: outline-none bg-transparent border border-primary-dark rounded pl-4 mb-8 h-12 w-96"
                            />
                        </div>
                    </div>
                    <button
                        onClick={handleSubmit}
                        className="bg-primary-dark py-2 px-10 rounded text-white"
                    >
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AccountInfomation;

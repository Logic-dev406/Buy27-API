import React, { useState } from 'react';
import validate from '../../helper/validator';

export const AccountInfomation = () => {
    const [values, setvalues] = useState({
        firstname: '',
        emailaddress: '',
        newpassword: '',
        lastname: '',
        currentpassword: '',
        confirmpassword: '',
    });

    const [errors, setErrors] = useState({});

    const handleInput = (e) => {
        const { name, value } = e.target;
        setvalues({
            ...values,
            [name]: value,
        });
    };

    const handleSubmit = () => {
        setErrors(validate(values));
        console.log(values);
    };

    return (
        <div>
            <div className="bg-white pt-4 h-full md:h-screen px-4 md:px-8 rounded text-primary-dark">
                <h1 className="font-bold text-lg">Account Information</h1>
                <div className="border-b  mt-3 mb-4 md:mb-8"></div>
                <div className="flex flex-col md:flex-row items-center">
                    <div className="flex flex-col mr-0 md:mr-5">
                        <div className="flex flex-col mb-4 md:mb-8">
                            <label htmlFor="firstname">First Name</label>
                            <input
                                onChange={handleInput}
                                id="firstname"
                                type="text"
                                name="firstname"
                                value={values.firstname}
                                placeholder="Enter First Name"
                                className="focus: outline-none bg-transparent border border-primary-dark rounded pl-4  h-10 md:h-12 w-72 md:w-96"
                            />
                            {errors.firstname && (
                                <p className="text-red-500 text-sm ">
                                    {errors.firstname}
                                </p>
                            )}
                        </div>
                        <div className="flex flex-col mb-4 md:mb-8 ">
                            <label htmlFor="emailaddress">Email Address</label>
                            <input
                                onChange={handleInput}
                                id="emailaddress"
                                type="email"
                                name="emailaddress"
                                value={values.emailaddress}
                                placeholder="Enter Email Address"
                                className="focus: outline-none bg-transparent border border-primary-dark rounded pl-4  h-10 md:h-12 w-72 md:w-96"
                            />
                            {errors.emailaddress && (
                                <p className="text-red-500 text-sm ">
                                    {errors.emailaddress}
                                </p>
                            )}
                        </div>
                        <div className="flex flex-col mb-4 md:mb-8">
                            <label htmlFor="newpassword">New Password</label>
                            <input
                                onChange={handleInput}
                                id="newpassword"
                                type="password"
                                name="newpassword"
                                value={values.newpassword}
                                className="focus: outline-none bg-transparent border border-primary-dark rounded pl-4  h-10 md:h-12 w-72 md:w-96"
                            />
                            {errors.password && (
                                <p className="text-red-500 text-sm ">
                                    {errors.password}
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="flex flex-col ml-0 md:ml-5">
                        <div className="flex flex-col mb-4 md:mb-8">
                            <label htmlFor="lastname">Last Name</label>
                            <input
                                onChange={handleInput}
                                id="lastname"
                                type="text"
                                name="lastname"
                                value={values.lastname}
                                placeholder="Enter Last Name"
                                className="focus: outline-none bg-transparent border border-primary-dark rounded pl-4  h-10 md:h-12 w-72 md:w-96"
                            />
                            {errors.lastname && (
                                <p className="text-red-500 text-sm ">
                                    {errors.lastname}
                                </p>
                            )}
                        </div>
                        <div className="flex flex-col mb-4 md:mb-8">
                            <label htmlFor="currentpassword">
                                Current Password
                            </label>
                            <input
                                onChange={handleInput}
                                id="currentpassword"
                                type="password"
                                name="currentpassword"
                                value={values.currentpassword}
                                className="focus: outline-none bg-transparent border border-primary-dark rounded pl-4  h-10 md:h-12 w-72 md:w-96"
                            />
                            {errors.password && (
                                <p className="text-red-500 text-sm ">
                                    {errors.password}
                                </p>
                            )}
                        </div>
                        <div className="flex flex-col mb-4 md:mb-8 ">
                            <label htmlFor="confirmpassword">
                                Confirm Password
                            </label>
                            <input
                                onChange={handleInput}
                                id="confirmpassword"
                                type="password"
                                name="confirmpassword"
                                value={values.confirmpassword}
                                className="focus: outline-none bg-transparent border border-primary-dark rounded pl-4  h-10 md:h-12 w-72 md:w-96"
                            />
                            {errors.password && (
                                <p className="text-red-500 text-sm ">
                                    {errors.password}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
                <button
                    onClick={handleSubmit}
                    className="bg-primary-dark mb-4 md:mb-0 py-2 px-10 focus:outline-none rounded text-white"
                >
                    Save Changes
                </button>
            </div>
        </div>
    );
};

export default AccountInfomation;

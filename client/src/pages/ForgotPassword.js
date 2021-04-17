import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import validate from '../helper/validator';
import buy27logo from '../assets/images/buy27logo.png';

export const ForgotPassword = () => {
    const [values, setvalues] = useState({
        emailaddress: '',
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
        <div className=" flex flex-col items-center justify-center h-screen w-full bg-gray-100">
            <a href="/">
                <img className="w-40 mb-8" src={buy27logo} alt="logo" />
            </a>
            <div className=" flex flex-col items-center pt-4 pb-8 bg-white shadow-lg rounded">
                <h1 className=" text-xl md:text-3xl font-bold mb-2">
                    Forgot Password
                </h1>
                <div className="  border-b border-gray w-full my-2"></div>
                <div className=" flex flex-col items-center justify-center text-center text-sm h-28 w-72 md:w-96 px-4 bg-gray-100">
                    <h1>
                        Please enter the e-mail address associated with your
                        buy27 account. We will send you a link to this e-mail
                        address to reset your password.
                    </h1>
                </div>
                <div className="flex flex-col px-4 md:px-8 mt-2 mb-4">
                    <div className="text-sm text-primary-dark mb-2">
                        <label htmlFor="emailaddress ">Email Address</label>
                    </div>
                    <input
                        onChange={handleInput}
                        id="emailaddress"
                        type="email"
                        name="emailaddress"
                        value={values.emailaddress}
                        placeholder="Enter Email Address"
                        className="focus: outline-none bg-transparent border border-primary-dark rounded px-4 h-10 md:h-12 w-72 md:w-96"
                    />
                    {errors.emailaddress && (
                        <p className="text-red-500 text-sm ">
                            {errors.emailaddress}
                        </p>
                    )}
                </div>
                <button
                    onClick={handleSubmit}
                    className="h-10 px-32 md:px-44 bg-primary-dark hover:bg-primary-light focus:outline-none text-white rounded"
                >
                    Login
                </button>
                <div className="flex flex-col items-center mt-8">
                    <h1 className="text-sm">I remember my password?</h1>
                    <Link
                        to="/login"
                        className="flex items-center h-10 px-32 md:px-44 mt-2 bg-transparent hover:bg-primary-dark border border-primary-dark no-underline font-semibold text-primary-dark hover:text-white rounded"
                    >
                        <h1>Login</h1>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;

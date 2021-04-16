import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const ForgotPassword = () => {
    const [values, setvalues] = useState({
        emailaddress: '',
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
        <div className=" flex flex-col items-center justify-center h-screen w-full bg-gray-100">
            <div className=" flex flex-col items-center pt-4 pb-8 bg-white shadow-lg rounded">
                <h1 className=" text-3xl font-bold mb-2">Forgot Password</h1>
                <div className="  border-b border-gray w-full my-2"></div>
                <div className=" flex flex-col items-center justify-center text-center text-sm h-28 w-96 px-4 bg-gray-100">
                    <h1>
                        Please enter the e-mail address associated with your
                        Jumia account. We will send you a link to this e-mail
                        address to reset your password.
                    </h1>
                </div>
                <div className="flex flex-col px-8 mt-2">
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
                        className="focus: outline-none bg-transparent border border-primary-dark rounded px-4 mb-8 h-12 w-96"
                    />
                </div>

                <button
                    onClick={handleSubmit}
                    className="h-10 px-44  bg-primary-dark hover:bg-primary-light text-white rounded"
                >
                    Login
                </button>
                <div className="flex flex-col items-center mt-10">
                    <h1 className="text-sm">I remember my password?</h1>
                    <Link
                        to="/login"
                        className="flex items-center h-10 px-44 mt-2 bg-transparent hover:bg-primary-dark border border-primary-dark no-underline font-semibold text-primary-dark hover:text-white rounded"
                    >
                        <h1>Login</h1>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;

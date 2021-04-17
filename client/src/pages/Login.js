import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import VisibilityIcon from '@material-ui/icons/Visibility';

export const SignUp = () => {
    const [values, setvalues] = useState({
        emailaddress: '',
        password: '',
    });

    const [ShowPassword, setShowPassword] = useState(false);

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

    const ToggleShowPassword = () => {
        setShowPassword(!ShowPassword);
    };

    return (
        <div className=" flex flex-col items-center justify-center h-screen w-full bg-gray-100">
            <div className=" flex flex-col items-center pt-4 pb-8 bg-white shadow-lg rounded">
                <h1 className=" text-3xl font-bold mb-2">Login</h1>
                <div className="border-b border-gray w-full my-2"></div>
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
                <div className="flex flex-col px-8">
                    <div className="flex justify-between text-sm text-primary-dark mb-2">
                        <label htmlFor="password">Password</label>
                        <Link
                            to="/forgotpassword"
                            className="text-red-500 underline"
                        >
                            Forget Password?
                        </Link>
                    </div>
                    <div className="flex items-center justify-between px-4 focus: outline-none bg-transparent border border-primary-dark rounded pl-4 mb-8 h-12 w-96">
                        <input
                            onChange={handleInput}
                            id="password"
                            type={ShowPassword === false ? 'password' : 'text'}
                            name="password"
                            value={values.password}
                            placeholder="Enter Password"
                            className="focus:outline-none w-80"
                        />
                        <button
                            className="focus:outline-none"
                            onClick={() => {
                                ToggleShowPassword();
                            }}
                        >
                            {ShowPassword === false ? (
                                <VisibilityOffIcon className="text-primary-dark" />
                            ) : (
                                <VisibilityIcon className="text-primary-dark" />
                            )}
                        </button>
                    </div>
                </div>
                <button
                    onClick={handleSubmit}
                    className="h-10 px-44 focus:outline-none bg-primary-dark hover:bg-primary-light text-white rounded"
                >
                    Login
                </button>
                <div className="flex flex-col items-center mt-10">
                    <h1 className="text-sm">Dont have an Account?</h1>
                    <Link
                        to="/signup"
                        className="flex items-center h-10 px-32 mt-2 bg-transparent hover:bg-primary-dark border border-primary-dark no-underline font-semibold text-primary-dark hover:text-white rounded"
                    >
                        <h1>Create an Account</h1>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SignUp;

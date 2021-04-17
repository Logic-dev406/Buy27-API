import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import VisibilityIcon from '@material-ui/icons/Visibility';
import validate from '../helper/validator';
import buy27logo from '../assets/images/buy27logo.png';

export const Register = () => {
    const [values, setvalues] = useState({
        emailaddress: '',
        firstname: '',
        lastname: '',
        mobilenumber: '',
        password: '',
    });

    const [errors, setErrors] = useState({});

    const [ShowPassword, setShowPassword] = useState(false);

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

    const ToggleShowPassword = () => {
        setShowPassword(!ShowPassword);
    };

    return (
        <div className=" flex flex-col items-center justify-center py-16 w-full bg-gray-100">
            <a href="/">
                <img className="w-40 mb-8" src={buy27logo} alt="logo" />
            </a>
            <div className=" flex flex-col items-center pt-4 pb-8 bg-white shadow-lg rounded">
                <h1 className=" text-2x1 md:text-3xl font-bold mb-2">
                    Create An Account
                </h1>
                <div className="border-b border-gray w-full mt-2"></div>
                <div className="flex flex-col px-4 md:px-8 mt-2">
                    <div className="text-sm text-primary-dark mb-1">
                        <label htmlFor="firstname">First Name</label>
                    </div>
                    <input
                        onChange={handleInput}
                        id="firstname"
                        type="text"
                        name="firstname"
                        value={values.firstname}
                        placeholder="Enter First Name"
                        className="focus: outline-none bg-transparent border border-primary-dark rounded pl-4 mb-2 h-10 md:h-12 w-72 md:w-96"
                    />
                    {errors.firstname && (
                        <p className="text-red-500 text-sm ">
                            {errors.firstname}
                        </p>
                    )}
                </div>
                <div className="flex flex-col px-4 md:px-8 mt-2">
                    <div className="text-sm text-primary-dark mb-1">
                        <label htmlFor="lastname">Last Name</label>
                    </div>
                    <input
                        onChange={handleInput}
                        id="lastname"
                        type="text"
                        name="lastname"
                        value={values.lastname}
                        placeholder="Enter Last Name"
                        className="focus: outline-none bg-transparent border border-primary-dark rounded pl-4 mb-2 h-10 md:h-12 w-72 md:w-96"
                    />
                    {errors.lastname && (
                        <p className="text-red-500 text-sm ">
                            {errors.lastname}
                        </p>
                    )}
                </div>
                <div className="flex flex-col px-4 md:px-8 mt-2">
                    <div className="text-sm text-primary-dark mb-1">
                        <label htmlFor="emailaddress">Email Address</label>
                    </div>
                    <input
                        onChange={handleInput}
                        id="emailaddress"
                        type="email"
                        name="emailaddress"
                        value={values.emailaddress}
                        placeholder="Enter Email Address"
                        className="focus: outline-none bg-transparent border border-primary-dark rounded pl-4 mb-2 h-10 md:h-12 w-72 md:w-96"
                    />
                    {errors.emailaddress && (
                        <p className="text-red-500 text-sm ">
                            {errors.emailaddress}
                        </p>
                    )}
                </div>
                <div className="flex flex-col px-4 md:px-8 mt-2">
                    <div className="text-sm text-primary-dark mb-1">
                        <label htmlFor="mobilenumber">Mobile Number</label>
                    </div>
                    <input
                        onChange={handleInput}
                        id="mobilenumber"
                        type="number"
                        name="mobilenumber"
                        value={values.mobilenumber}
                        placeholder="Enter Email Address"
                        className="focus: outline-none bg-transparent border border-primary-dark rounded pl-4 mb-2 h-10 md:h-12 w-72 md:w-96"
                    />
                    {errors.mobilenumber && (
                        <p className="text-red-500 text-sm ">
                            {errors.mobilenumber}
                        </p>
                    )}
                </div>
                <div className="flex flex-col px-4 md:px-8">
                    <div className="text-sm text-primary-dark mb-1">
                        <label htmlFor="password">Password</label>
                    </div>
                    <div className="flex items-center justify-between px-4 focus: outline-none bg-transparent border border-primary-dark rounded pl-4 mb-2 h-10 md:h-12 w-72 md:w-96">
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
                    {errors.password && (
                        <p className="text-red-500 text-sm ">
                            {errors.password}
                        </p>
                    )}
                </div>
                <button
                    onClick={handleSubmit}
                    className="h-10 px-20 md:px-32 mt-2 bg-primary-dark hover:bg-primary-light focus:outline-none text-white rounded"
                >
                    Create an Account
                </button>
                <div className=" flex flex-col items-center w-72 md:w-96 text-xs md:text-sm text-primary-dark font-semibold md:font-normal my-5 ">
                    <div className="flex items-center ">
                        <h1>By signing up you accept our </h1>
                        <Link to="#" className="underline ml-2">
                            terms and conditions
                        </Link>
                    </div>
                    <Link to="#" className="underline">
                        & privacy policy
                    </Link>
                </div>
                <div className="flex flex-col items-center">
                    <h1 className="text-sm">Alredy have an Account?</h1>
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

export default Register;

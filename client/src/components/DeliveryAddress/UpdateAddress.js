import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const UpdateAddress = () => {
    const [values, setvalues] = useState({
        firstname: '',
        mobilenumber: '',
        state: '',
        lastname: '',
        lga: '',
        city: '',
        direction: '',
        streetaddress: '',
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
        <div>
            <div className="bg-white pt-4 h-screen px-8 rounded text-primary-dark">
                <Link
                    className=" flex w-20 justify-center text-sm font-semibold bg-transparent hover:bg-primary-dark border border-primary-dark text-primary-dark hover:text-white rounded px-2 py-2 "
                    to="/Dashboard/Delivery Address"
                >
                    <h1>Cancel</h1>
                </Link>
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
                        <label htmlFor="mobilenumber">Mobile Number</label>
                        <input
                            onChange={handleInput}
                            id="mobilenumber"
                            type="number"
                            name="mobilenumber"
                            value={values.mobilenumber}
                            placeholder="Enter Email Address"
                            className="focus: outline-none bg-transparent border border-primary-dark rounded pl-4 mb-8 h-12 w-96"
                        />
                        <label htmlFor="direction">Direction</label>
                        <input
                            onChange={handleInput}
                            id="direction"
                            type="text"
                            name="direction"
                            value={values.direction}
                            className="focus: outline-none bg-transparent border border-primary-dark rounded pl-4 mb-8 h-12 w-96"
                        />
                        <label htmlFor="State">State</label>
                        <input
                            onChange={handleInput}
                            id="State"
                            type="select"
                            name="State"
                            value={values.State}
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
                        <label htmlFor="city">City</label>
                        <input
                            onChange={handleInput}
                            id="city"
                            type="text"
                            name="city"
                            value={values.city}
                            className="focus: outline-none bg-transparent border border-primary-dark rounded pl-4 mb-8 h-12 w-96"
                        />
                        <label htmlFor="streetaddress">Street Address</label>
                        <input
                            onChange={handleInput}
                            id="streetaddress"
                            type="password"
                            name="streetaddress"
                            value={values.streetaddress}
                            className="focus: outline-none bg-transparent border border-primary-dark rounded pl-4 mb-8 h-12 w-96"
                        />
                        <label htmlFor="Lga">Lga</label>
                        <input
                            onChange={handleInput}
                            id="Lga"
                            type="select"
                            name="Lga"
                            value={values.Lga}
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
    );
};

export default UpdateAddress;

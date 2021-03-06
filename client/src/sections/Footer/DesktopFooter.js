import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import verve from '../../assets/icons/verve.png';
import visa from '../../assets/icons/visa.png';
import mastercard from '../../assets/icons/mastercard.png';
import buy27logo from '../../assets/images/buy27.png';

const DesktopFooter = () => {
    return (
        <div className=" items-center bg-primary-dark  w-full py-8 px-64 text-white">
            <div className="flex justify-between items-center ">
                <div>
                    <h1 className=" text-2xl font-bold">
                        Sign Up For Newsletter
                    </h1>
                </div>
                <div>
                    <input
                        className="bg-gray-700 h-10 w-96 focus:outline-none p-2 rounded-l"
                        type="text"
                        placeholder="Email Address"
                    />{' '}
                    <button className="bg-white h-10 w-28 text-primary-dark focus:outline-none rounded-r">
                        <h1 className=" font-semibold">Sign Up</h1>
                    </button>
                </div>
            </div>
            <div className="border-b border-primary-light my-8"></div>
            <div className="flex justify-center pb-4">
                <img src={buy27logo} width="150" alt="logo" />
            </div>
            <div className="flex items-center justify-between divide-x divide-primary-light">
                <div className="">
                    <h1 className=" font-semibold">Social Media</h1>
                    <div className="border-b-2 border-white w-10 mt-1"></div>
                    <TwitterIcon fontSize="small" />
                    <FacebookIcon className="mx-1" fontSize="small" />
                    <LinkedInIcon className="mx-1" fontSize="small" />
                </div>
                <div className="text-center pl-40">
                    <h1 className="text-sm font-light">
                        <LocationOnIcon className="mr-2" fontSize="small" />
                        Corner shop dei-dei Abuja
                    </h1>
                    <h1 className="text-sm font-light">
                        <PhoneIcon className="mr-2" fontSize="small" />
                        Phone: 07016538707
                    </h1>
                    <h1 className="text-sm font-light">
                        <EmailIcon className="mr-2" fontSize="small" />
                        E-mail: Buy27store@gmail.com
                    </h1>
                </div>
                <div className="pl-40">
                    <h1 className=" font-semibold">Payment Option</h1>
                    <div className="border-b-2 border-white w-10 my-2"></div>
                    <div className="flex">
                        <img className="h-5 pr-1" src={verve} alt="verve" />
                        <img className="h-5 px-1" src={visa} alt="visa" />
                        <img
                            className="h-5 px-1"
                            src={mastercard}
                            alt="mastercard"
                        />
                    </div>
                </div>
            </div>
            <div className="border-b border-primary-light my-8"></div>
            <div className=" items-center ">
                <div className="flex justify-center text-sm font-light divide-x">
                    <h1 className="px-2">Search Terms</h1>
                    <h1 className="px-2">Advance Search</h1>
                    <h1 className="px-2">Orders And Return </h1>
                    <h1 className="px-2">Contact Us</h1>
                </div>
                <div>
                    <p className="flex justify-center text-sm font-light pt-4">
                        Copyright &copy; {new Date().getFullYear()} Buy27.com.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DesktopFooter;

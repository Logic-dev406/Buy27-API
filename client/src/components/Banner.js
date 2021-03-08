import React from 'react';
import LocalShippingOutlinedIcon from '@material-ui/icons/LocalShippingOutlined';
import HeadsetMicOutlinedIcon from '@material-ui/icons/HeadsetMicOutlined';
import AttachMoneyOutlinedIcon from '@material-ui/icons/AttachMoneyOutlined';

const Banner = () => {
    return (
        <div>
            <div className="flex flex-col md:flex-row justify-center items-center my-4 md:my-8">
                <div className="bg-header1 rounded-md bg-contain mr-0 md:mr-12 md:bg-cover bg-no-repeat bg-center h-56 md:h-96 w-full md:w-2/5"></div>
                <div className="flex grid grid-cols-2 gap-y-4 md:gap-y-8 gap-x-4 md:gap-x-12 mt-4 md:mt-0 ">
                    <div className="h-36 md:h-44 w-36 md:w-44 bg-primary-light rounded-md">
                        1
                    </div>
                    <div className="h-36 md:h-44 w-36 md:w-44 bg-primary-light rounded-md">
                        2
                    </div>
                    <div className="h-36 md:h-44 w-36 md:w-44 bg-primary-dark rounded-md">
                        3
                    </div>
                    <div className="h-36 md:h-44 w-36 md:w-44 bg-primary-dark rounded-md">
                        4
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between mx-4 md:mx-72 mb-4 md:mb-8">
                <div className="flex items-center">
                    <LocalShippingOutlinedIcon className="text-primary-light" />{' '}
                    <div className="ml-3 md:ml-5">
                        <h1 className="text-primary-dark font-bold text-sm">
                            Free Shipping Worldwild
                        </h1>{' '}
                        <h1 className="text-xs md:text-sm text-gray-500">
                            We diliver to your door step worldwild for free.
                        </h1>
                    </div>
                </div>
                <div className="flex items-center">
                    <HeadsetMicOutlinedIcon className="text-primary-light" />
                    <div className="ml-3 md:ml-5">
                        <h1 className="text-primary-dark font-bold text-sm">
                            24/7 Customer Service
                        </h1>{' '}
                        <h1 className="text-xs md:text-sm text-gray-500">
                            We make sure you get the best user experience.
                        </h1>
                    </div>
                </div>
                <div className="flex items-center ">
                    <AttachMoneyOutlinedIcon className="text-primary-light" />{' '}
                    <div className="ml-3 md:ml-5">
                        <h1 className="text-primary-dark font-bold text-sm">
                            Money Back Garantee
                        </h1>{' '}
                        <h1 className="text-xs md:text-sm text-gray-500">
                            Checkout our return policy for more info.
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;

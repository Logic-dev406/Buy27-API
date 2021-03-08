import React from 'react';

const MobileFooter = () => {
    return (
        <div className="items-center bg-primary-dark mt-4  w-full py-4 px-2 text-white">
            <div className="flex justify-center text-xs font-light ">
                <a href="/" className="px-2">
                    Help Center
                </a>
                <a href="/" className="px-2">
                    Search Terms
                </a>
                <a href="/" className="px-2">
                    Advance Search
                </a>
            </div>
            <div className="flex justify-center text-xs font-light pt-2">
                <a href="/" className="px-2">
                    Orders And Return{' '}
                </a>
                <a href="/" className="px-2">
                    Contact Us
                </a>
            </div>
            <div className="border-b border-primary-light my-4"></div>
            <div>
                <p className="flex justify-center text-xs font-light ">
                    Copyright &copy; {new Date().getFullYear()} Buy27.com.
                </p>
            </div>
        </div>
    );
};

export default MobileFooter;

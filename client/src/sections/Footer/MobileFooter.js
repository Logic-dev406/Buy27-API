import React from 'react';

const MobileFooter = () => {
    return (
        <div className="items-center bg-primary-dark mt-4  w-full py-4 px-2 text-white">
            <div className="flex justify-center text-xs font-light ">
                <h1 className="px-2">Help Center</h1>
                <h1 className="px-2">Search Terms</h1>
                <h1 className="px-2">Advance Search</h1>
            </div>
            <div className="flex justify-center text-xs font-light pt-2">
                <h1 className="px-2">Orders And Return </h1>
                <h1 className="px-2">Contact Us</h1>
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

import React from 'react';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const MobileFooter = () => {
    const topFunction = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };

    return (
        <div className="items-center bg-primary-dark  w-full pb-4 pt-1 px-2 text-white">
            <div onClick={topFunction} className="flex flex-col items-center">
                <ExpandLessIcon fontSize="small" />
                <h1 className="text-xs font-light">BACK TO TOP</h1>
            </div>
            <div className="border-b border-primary-light my-2"></div>
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
            <div className="border-b border-primary-light my-2"></div>
            <div>
                <p className="flex justify-center text-xs font-light ">
                    Copyright &copy; {new Date().getFullYear()} Buy27.com.
                </p>
            </div>
        </div>
    );
};

export default MobileFooter;

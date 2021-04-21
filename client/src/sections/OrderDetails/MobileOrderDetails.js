import React from 'react';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const MobileOrderDetails = () => {
    return (
        <div className=" pb-4 w-full bg-gray-100">
            <div className="flex items-center bg-white py-4 w-screen mb-2 px-4 ">
                <Link to="/Dashboard/My Orders">
                    <ArrowBackIcon fontSize="small" />
                </Link>
                <h1 className="font-semibold text- ml-4">OrderDetails</h1>
            </div>
            <div className=" bg-white text-sm px-4 py-2">
                <div className="flex items-center mb-1 font-semibold">
                    <h1>Order no:</h1>
                    <h1>2983943049</h1>
                </div>
                <h1> 1 item</h1>
                <h1>Placed on 16-18-2021</h1>
                <h1>Total price: 3,400</h1>
            </div>
            <h1 className=" text-sm py-2 px-4 font-semibold">
                ITEMS IN YOUR ORDER
            </h1>
            <div className=" w-screen mb-4 px-4 py-2 bg-white">
                <h1 className="flex flex-col  items-center text-white rounded text-sm w-16 bg-gray-500">
                    Cancelled
                </h1>
                <div className="flex text-sm">
                    <h1>Date:</h1>
                    <h1 className="font-normal ml-1">1-12-2021</h1>
                </div>
                <div className="border-b"></div>
                <div className="flex items-center mb-8 ">
                    <Link to="#" className="mr-4 mt-2">
                        <img
                            className="h-20 w-20 bg-black rounded"
                            src=""
                            alt="Product"
                        />
                    </Link>
                    <div>
                        <Link to="#" className="">
                            Unisex plain soolo tshirt
                        </Link>
                        <h1> qty: 1</h1>
                        <h1>
                            <span className="mr-1">&#8358;</span>3,400
                        </h1>
                    </div>
                </div>
            </div>
            <div className=" bg-white text-sm px-4 py-2 mb-4">
                <h1 className="border-b  py-1">PAYMENT INFORMATION</h1>
                <h1 className="py-1 ">Payment Method</h1>
                <h1 className="  pb-2 text-sm font-normal">
                    Stay Safe, pay with buy27
                </h1>
                <h1 className="py-1 ">Payment Details</h1>
                <h1 className="  text-sm font-normal">Items total: 12,493</h1>
                <h1 className="  text-sm font-normal">Shipping fee: 12,493</h1>
                <h1 className="  text-sm font-normal">Total: 12,493</h1>
            </div>
            <div className=" bg-white text-sm px-4 py-2">
                <h1 className="border-b pl-4 py-1">Delivery INFORMATION</h1>
                <h1 className="py-1 pl-4">Delivery Method</h1>
                <h1 className=" pl-4 pb-2 text-sm font-normal">
                    Standard door delivery
                </h1>
                <h1 className="py-1 pl-4">Shipping Address</h1>
                <h1 className=" pl-4 text-sm font-normal">Sunday Patrick</h1>
                <h1 className=" pl-4 text-sm font-normal">Dei-dei,Abuja</h1>
                <h1 className=" pl-4 text-sm font-normal">
                    Abuja-Dei-dei,Federal Capital Territory
                </h1>
            </div>
        </div>
    );
};

export default MobileOrderDetails;

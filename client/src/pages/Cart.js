import React from 'react';

export const Cart = () => {
    return (
        <div className="flex flex-col items-center bg-gray-100 h-screen w-full">
            <div className="flex flex-col justify-center h-24 w-full bg-white px-52">
                <h1>breadcrum</h1>
                <h1 className="text-4xl font-bold"> Shopping Cart</h1>
            </div>
            <div className="flex py-10 px-52">
                <div className="h-40 w-2/3 bg-white mr-8">
                    <div className="flex items-center justify-between text-white font-semibold bg-primary-dark h-10 w-full px-5">
                        <h1>Item Details</h1>
                        <h1>Quantity</h1>
                        <h1>Item Price</h1>
                        <h1>Action</h1>
                    </div>
                    <div></div>
                </div>
                <div className="w-96 bg-white ">
                    <div className="flex justify-between px-3 my-2 font-bold">
                        <h1>Order Surmmary: </h1>
                        <h1>4 Items</h1>
                    </div>
                    <div className="border-b border-gray-200"></div>
                    <div className="flex justify-between px-3 my-2 text-sm">
                        <h1>Subtotal: </h1>
                        <h1 className="font-semibold">
                            <span className="">&#8358;</span> 6,000
                        </h1>
                    </div>
                    <div className="border-b border-gray-200"></div>
                    <div className="flex justify-between px-3 my-2 text-sm">
                        <h1>Order Surmmary: </h1>
                        <h1 className="text-xs text-gray-500 w-24">
                            Add your Delivery address at checkout to see
                            delivery charges
                        </h1>
                    </div>
                    <div className="border-b border-gray-200"></div>
                    <div className="flex justify-between px-3 my-2 font-bold">
                        <h1>
                            <span className="">&#8358;</span> 6,000
                        </h1>
                    </div>
                    <div className="border-b border-gray-200"></div>
                    <div className="flex flex-col px-3 my-5 items-center ">
                        <button className="bg-primary-dark text-sm rounded text-white font-semibold h-10 w-full focus:outline-none">
                            Continue to Checkout
                        </button>
                    </div>
                    <div className="border-b border-gray-200"></div>
                    <div className="justify-between px-3 my-2 font-light text-sm text-gray-500">
                        <h1>Total </h1>
                        <h1>Transctions are 100% safe and secure</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;

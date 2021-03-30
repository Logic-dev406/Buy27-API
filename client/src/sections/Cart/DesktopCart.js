import React from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../../components/Cart/CartItems';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import cart from '../../assets/icons/cart.png';

export const DesktopCart = ({
    getCartTotalPrice,
    removeFromCartHandler,
    qtyChangeHandler,
    getCartCount,
    cartItems,
}) => {
    return (
        <div>
            <div className="flex flex-col bg-gray-100 w-full">
                {cartItems.length === 0 ? (
                    <div className="flex flex-col items-center">
                        <div className="flex flex-col w-96 h-96 bg-white my-40 items-center justify-center">
                            <img src={cart} alt="cart" className="h-44" />
                            <h1 className="text-lg font-bold">
                                Your cart is empty.
                            </h1>
                            <span className="text-gray-500">
                                Your have not added any item to your cart.
                            </span>
                            <Link
                                className="text-black hover:text-white font-semibold bg-transparent hover:bg-primary-dark border-2 border-primary-dark px-4 py-1 mt-4 rounded"
                                to="/shop"
                            >
                                <ArrowBackIcon fontSize="small" /> Go Back
                            </Link>
                        </div>
                    </div>
                ) : (
                    <div>
                        <div className="flex flex-col justify-center mt-8 mx-52 ">
                            <Link to="/shop">
                                <span className="font-semibold text-sm text-primary-dark hover:text-white border-2 border-primary-dark bg-transparent hover:bg-primary-dark px-2 py-2 rounded ">
                                    <ArrowBackIcon fontSize="small" /> Continue
                                    Shopping
                                </span>
                            </Link>
                        </div>
                        <div className="flex py-8 px-52">
                            <div className=" w-full bg-transparent mr-8">
                                <div className="flex items-center justify-between text-white font-semibold bg-primary-dark h-10 w-full px-5">
                                    <h1>Item Details</h1>
                                    <h1>Quantity</h1>
                                    <h1>Item Price</h1>
                                    <h1>Action</h1>
                                </div>
                                {cartItems.map((item) => {
                                    return (
                                        <CartItem
                                            key={item.product}
                                            item={item}
                                            removeFromCartHandler={
                                                removeFromCartHandler
                                            }
                                            qtyChangeHandler={qtyChangeHandler}
                                        />
                                    );
                                })}
                            </div>
                            <div className="h-96 w-96 bg-white ">
                                <div className="flex justify-between px-3 my-2 font-bold">
                                    <h1>Order Surmmary: </h1>
                                    <div className="flex items-center ">
                                        <h1 className="mr-1">
                                            {getCartCount()}
                                        </h1>
                                        <h1>
                                            {getCartCount() > 1
                                                ? 'Items'
                                                : 'Item'}
                                        </h1>
                                    </div>
                                </div>
                                <div className="border-b border-gray-200"></div>
                                <div className="flex justify-between px-3 my-2 text-sm">
                                    <h1>Subtotal: </h1>
                                    <h1 className="font-semibold">
                                        <span className="">&#8358;</span>{' '}
                                        {getCartTotalPrice().toFixed(2)}
                                    </h1>
                                </div>
                                <div className="border-b border-gray-200"></div>
                                <div className="flex justify-between px-3 my-2 text-sm">
                                    <h1>Order Surmmary: </h1>
                                    <h1 className="text-xs text-gray-500 w-24">
                                        Add your Delivery address at checkout to
                                        see delivery charges
                                    </h1>
                                </div>
                                <div className="border-b border-gray-200"></div>
                                <div className="flex justify-between px-3 my-2 font-bold">
                                    <h1>Total</h1>
                                    <h1>
                                        <span className="">&#8358;</span>{' '}
                                        {getCartTotalPrice().toFixed(2)}
                                    </h1>
                                </div>
                                <div className="border-b border-gray-200"></div>
                                <div className="flex flex-col px-3 my-5 items-center ">
                                    <button className="bg-primary-dark text-sm rounded text-white font-semibold h-10 w-full focus:outline-none">
                                        Proceed to Checkout
                                    </button>
                                </div>
                                <div className="border-b border-gray-200"></div>
                                <div className="justify-between px-3 my-2 font-light text-sm text-gray-500">
                                    <h1>Total </h1>
                                    <h1>
                                        Transctions are 100% safe and secure
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DesktopCart;

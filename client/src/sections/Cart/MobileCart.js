import React from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../../components/Cart/CartItems';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import cart from '../../assets/icons/cart.png';

export const MobileCart = ({
    getCartTotalPrice,
    removeFromCartHandler,
    qtyChangeHandler,
    cartItems,
    getCartCount,
}) => {
    return (
        <div>
            <div className="flex flex-col bg-gray-100 w-full">
                {cartItems.length === 0 ? (
                    <div className="flex flex-col items-center">
                        <div className="flex flex-col w-80 md:w-96 h-80 md:h-96 bg-white my-20 items-center justify-center">
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
                        <div className="flex items-center justify-between h-12 w-full bg-white mt-8 px-5">
                            <h1 className="font-semibold text-primary-light">
                                Subtotal ({getCartCount()}{' '}
                                {getCartCount() > 1 ? 'Items' : 'Item'})
                            </h1>
                            <h1 className="font-semibold text-primary-dark">
                                <span className="">&#8358;</span>
                                {getCartTotalPrice()}
                            </h1>
                        </div>
                        <div className="flex flex-col justify-center mt-5 mx-0 md:mx-52 ">
                            <Link to="/shop">
                                <span className="ml-4 font-semibold text-xs md:text-sm text-primary-dark hover:text-white border-2 border-primary-dark bg-transparent hover:bg-primary-dark px-1 md:px-2 py-2 md:py-2 rounded ">
                                    <ArrowBackIcon fontSize="small" /> Continue
                                    Shopping
                                </span>
                            </Link>
                        </div>
                        <div className=" mt-5 mb-8 px-0 md:px-52">
                            <div className=" w-full bg-transparent mr-8">
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
                            <div className="flex flex-col items-center px-3 my-4 font-light text-sm text-gray-500">
                                <h1>We accept: </h1>
                                <h1>Transctions are 100% safe and secure</h1>
                            </div>
                            <div className="px-5">
                                <h1 className="py-2 text-white bg-primary-dark rounded text-center font-semibold">
                                    Continue to Checkout
                                </h1>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MobileCart;

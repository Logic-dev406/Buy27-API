import React from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../../components/Cart/CartItems';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import cart from '../../assets/icons/cart.png';

export const MobileCart = ({
    getCartTotalPrice,
    removeFromCartHandler,
    qtyChangeHandler,
    getCartCount,
    cartItems,
}) => {
    return (
        <div>
            <div className="flex flex-col bg-gray-100 w-full">
                <div className="flex flex-col justify-center h-24 w-full bg-white px-0 md:px-52">
                    <h1>breadcrum</h1>
                    <h1 className="text-normal md:text-4xl font-semibold md:font-bold">
                        Shopping Cart
                    </h1>
                </div>
                {cartItems.length === 0 ? (
                    <div className="flex flex-col items-center">
                        <div className="flex flex-col w-80 md:w-96 h-80 md:h-96 bg-white my-40 items-center justify-center">
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
                        <div className="flex flex-col justify-center mt-8 mx-0 md:mx-52 ">
                            <Link to="/shop">
                                <span className="ml-4 font-semibold text-xs md:text-sm text-primary-dark hover:text-white border-2 border-primary-dark bg-transparent hover:bg-primary-dark px-1 md:px-2 py-2 md:py-2 rounded ">
                                    <ArrowBackIcon fontSize="small" /> Continue
                                    Shopping
                                </span>
                            </Link>
                        </div>
                        <div className=" py-8 px-0 md:px-52">
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
                            <div className="justify-between px-3 my-2 font-light text-sm text-gray-500">
                                <h1>Total </h1>
                                <h1>Transctions are 100% safe and secure</h1>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MobileCart;

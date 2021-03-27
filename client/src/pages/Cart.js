import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from '../components/Cart/cartItems';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

//Action
import { addToCart, removeFromCart } from '../redux/actions/cartAction';

export const Cart = () => {
    const dispatch = useDispatch();

    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    const qtyChangeHandler = (id, qty) => {
        dispatch(addToCart(id, qty));
    };

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id));
    };

    return (
        <div className="flex flex-col bg-gray-100 w-full">
            <div className="flex flex-col justify-center h-24 w-full bg-white px-52">
                <h1>breadcrum</h1>
                <h1 className="text-4xl font-bold"> Shopping Cart</h1>
            </div>
            {cartItems.length === 0 ? (
                <div>
                    Your cart is empty <Link to="/shop">Go Back</Link>
                </div>
            ) : (
                <div>
                    <div className="flex flex-col justify-center mt-8 mx-52 ">
                        <Link to="/shop">
                            <span className="font-semibold text-sm text-primary-dark border-2 border-primary-dark bg-transparent px-2 py-2 rounded ">
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
                                    Proceed to Checkout
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
            )}
        </div>
    );
};

export default Cart;

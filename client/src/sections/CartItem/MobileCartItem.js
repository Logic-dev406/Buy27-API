import React from 'react';
import { Link } from 'react-router-dom';
import CancelIcon from '@material-ui/icons/Cancel';

export const MobileCartItem = ({
    item,
    qtyChangeHandler,
    removeFromCartHandler,
}) => {
    return (
        <div>
            <div className="flex flex-col justify-between px-5 pt-4 pb-3 w-full bg-white border-b">
                <Link to={`/Shop/${item.product}`} className="flex">
                    <img src={item.image} alt="item" className="w-10 mr-4" />
                    <h1 className="font-semibold text-primary-dart truncate">
                        {item.name}
                    </h1>
                </Link>
                <div className="flex items-end justify-left my-2 border-b pb-3">
                    <div>
                        <h1 className="text-xs mb-1">Quantity:</h1>
                        <select
                            onChange={(e) =>
                                qtyChangeHandler(item.product, e.target.value)
                            }
                            value={item.qty}
                            className="flex items-center justify-between * hover:shadow-lg px-2  h-8 w-20 mr-4 bg-transparent border rounded focus:outline-none"
                        >
                            {[...Array(item.countInStock).keys()].map((x) => (
                                <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <h1 className="font-bold text-lg text-primary-dark">
                            <span className="">&#8358;</span>
                            {item.price * item.qty}
                        </h1>
                        <h1 className="text-xs text-gray-500 font-semibold">
                            <span className="">&#8358;</span>
                            {item.price} X {item.qty}{' '}
                            {item.qty > 1 ? 'items' : 'item'}
                        </h1>
                    </div>
                </div>
                <button
                    onClick={() => removeFromCartHandler(item.product)}
                    className="text-primary-dark rounded text-sm font-semibold focus:outline-none border-2 border-primary-dark py-2"
                >
                    <CancelIcon fontSize="small" /> Remove item
                </button>
            </div>
        </div>
    );
};

export default MobileCartItem;

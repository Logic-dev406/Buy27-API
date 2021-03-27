import React from 'react';

const cartItems = ({ item, qtyChangeHandler, removeFromCartHandler }) => {
    return (
        <div>
            <div
                key={item.id}
                className="flex justify-between h-24 px-5 py-6 w-full bg-white border-b"
            >
                <div className="flex">
                    <img src={item.image} alt="item" className="w-10 mr-4" />
                    <h1 className="font-semibold text-primary-dart">
                        {item.name}
                    </h1>
                </div>
                <div>
                    <select
                        onChange={(e) =>
                            qtyChangeHandler(item.product, e.target.value)
                        }
                        value={item.qty}
                        className="flex items-center justify-between * hover:shadow-lg px-2  h-8 w-20 bg-transparent border rounded ml-5 focus:outline-none"
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
                <div>
                    <button
                        onClick={() => removeFromCartHandler(item.product)}
                        className="text-red-500 text-sm font-semibold focus:outline-none"
                    >
                        Remove item
                    </button>
                </div>
            </div>
        </div>
    );
};

export default cartItems;

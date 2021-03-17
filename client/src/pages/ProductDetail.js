import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FavoriteIcon from '@material-ui/icons/Favorite';
import StorefrontIcon from '@material-ui/icons/Storefront';
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';
import LocalShippingOutlinedIcon from '@material-ui/icons/LocalShippingOutlined';
import AttachMoneyOutlinedIcon from '@material-ui/icons/AttachMoneyOutlined';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

const ProductDetail = ({ match }) => {
    useEffect(() => {
        fechItem();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [count, setCount] = useState(1);
    const [item, setItem] = useState({});
    const [image, setImage] = useState(0);

    const onDecrement = () => {
        if (count <= 1) {
            setCount(1);
            return;
        }

        setCount(count - 1);
    };

    const onIncrement = () => setCount(count + 1);

    const fechItem = async () => {
        const response = await axios.get(
            `http://localhost:3000/api/products/${match.params.id}`
        );

        console.log(response.data);
        setItem(response.data);
    };

    const HandleClick = (index) => {
        setImage({ index: index });
    };

    return (
        <div className="flex flex-col items-center bg-gray-100 h-full w-full">
            <div className="h-24 w-full bg-white"></div>
            <div className="flex items-center justify-between w-9/12 bg-white my-8">
                <div key={item._id}>
                    <div className="w-80 ml-24">
                        <img src={item.images[image]} alt="Product" />
                    </div>
                    <div className="flex items-center ml-24 mt-8">
                        {item.images &&
                            item.images.map((image, index) => {
                                return (
                                    <img
                                        key={index}
                                        className="h-16 w-14 mr-2"
                                        src={image}
                                        alt="Product gallery"
                                        onClick={() => HandleClick(index)}
                                    />
                                );
                            })}
                    </div>
                </div>
                <div className="bg-transparent h-full w-1/2 py-8 px-8">
                    <h1 className="text-3xl font-semibold">
                        {item.description}
                    </h1>
                    <div className="border-b my-5"></div>
                    <h1 className="text-2xl font-bold">
                        <span className="mr-1">&#8358;</span>
                        {item.price}
                    </h1>
                    <div className="border-b my-5"></div>
                    <div className="flex items-center">
                        <h1>Quantity:</h1>
                        <div className="flex items-center justify-between * hover:shadow-lg px-2 divide-x h-8 w-24 bg-transparent border rounded ml-5">
                            <button
                                onClick={onDecrement}
                                className="text-lg font-bold focus:outline-none "
                            >
                                -
                            </button>
                            <h1 className="pl-3">{count}</h1>
                            <button
                                onClick={onIncrement}
                                className="text-lg font-bold pl-2 focus:outline-none"
                            >
                                +
                            </button>
                        </div>
                    </div>
                    <h1 className="mt-5  text-sm text-gray-500">
                        Call Us for bulk purchases:
                    </h1>
                    <button className="font-semibold text-black">
                        Click here to show phone number
                    </button>
                    <div className="border-b my-5"></div>
                    <div className="flex items-center items-center">
                        <button className="h-10 w-72 mr-8 rounded text-lg font-semibold bg-primary-dark text-white focus:outline-none">
                            Buy Now
                        </button>
                        <h1 className="text-sm text-gray-500">
                            <FavoriteIcon className="mr-2 h-10 w-14 rounded text-white bg-gray-500" />
                            Save For Later
                        </h1>
                    </div>
                    <div className="border-b my-5"></div>
                    <div className="flex items-center justify-between text-black text-sm font-semibold">
                        <div>
                            <h1 className="mb-4">
                                <EmojiTransportationIcon className="text-primary-dark mr-2" />{' '}
                                Pickup & Pay on Collection Available
                            </h1>
                            <h1 className="mt-4">
                                <AttachMoneyOutlinedIcon className="text-primary-dark mr-2" />
                                Money Back Garantee
                            </h1>
                        </div>
                        <div>
                            <h1 className="mb-4">
                                <StorefrontIcon className="text-primary-dark mr-2" />{' '}
                                Buy27 Warehouse
                            </h1>
                            <h1 className="mt-4">
                                <LocalShippingOutlinedIcon className="text-primary-dark mr-2" />
                                Express Delivery Available
                            </h1>
                        </div>
                    </div>
                    <div className="border-b my-5"></div>
                    <h1 className="text-sm font-semibold">
                        Share This Product
                    </h1>
                    <div className="flex items-center my-2 text-primary-dark">
                        <FacebookIcon className="mx-1" fontSize="small" />
                        <TwitterIcon className="mx-1" fontSize="small" />
                        <WhatsAppIcon className="mx-1" fontSize="small" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;

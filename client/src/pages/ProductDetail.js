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
    const [isMobile, setisMobile] = useState(
        window.matchMedia('(max-width:768px)').matches
    );

    useEffect(() => {
        window.addEventListener('resize', () => {
            setisMobile(window.matchMedia('(max-width:768px)').matches);
        });
    });

    useEffect(() => {
        fechItem();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [count, setCount] = useState(1);
    const [item, setItem] = useState({});
    const [image, setImage] = useState(0);

    const HandleClick = (index) => {
        setImage(index);
    };

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

    return (
        <div className="flex flex-col items-center bg-gray-100 h-full w-full">
            <div className="h-24 w-full bg-white">
                <h1>Todo Product brand</h1>
                <h2> breadcrum</h2>
            </div>
            <div className="flex md:flex-row flex-col items-center justify-center md:justify-between mx-0 md:mx-4 w-full md:w-9/12 bg-white my-8">
                <div key={item._id}>
                    <div className="mt-8 md:mt-0 w-72 md:w-80 ml-0 md:ml-24">
                        {item.images && item.images[image] ? (
                            item.images && (
                                <img src={item.images[image]} alt="Product" />
                            )
                        ) : (
                            <img src={item.image} alt="Product" />
                        )}
                    </div>
                    <div className="flex items-center ml-0 md:ml-24 mt-4 md:mt-8">
                        {item.images &&
                            item.images.map((image, index) => {
                                return (
                                    <img
                                        key={index}
                                        className="h-14 md:h-16 w-12 md:w-14 mr-2 border border-gray-400 "
                                        src={image}
                                        alt="Product gallery"
                                        onClick={() => HandleClick(index)}
                                    />
                                );
                            })}
                    </div>
                </div>
                <div className="bg-transparent h-full w-full md:w-1/2 py-8 px-2 md:px-8">
                    <h1 className="text-xl md:text-3xl font-semibold">
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
                        <button className="h-10 w-full md:w-72 mr-5 md:mr-8 rounded text-lg font-semibold bg-primary-dark text-white focus:outline-none">
                            Buy Now
                        </button>
                        {isMobile ? (
                            <h1 className=" text-gray-500">
                                <FavoriteIcon className="mr-5 md:mr-2 h-10 w-14 rounded text-white bg-gray-500" />
                            </h1>
                        ) : (
                            <h1 className="text-sm text-gray-500">
                                <FavoriteIcon className="mr-2 h-10 w-14 rounded text-white bg-gray-500" />
                                Save For Later
                            </h1>
                        )}
                    </div>
                    <div className="border-b my-5"></div>
                    {isMobile ? (
                        <div className="text-black text-sm font-semibold">
                            <div>
                                <h1 className="mb-4">
                                    <EmojiTransportationIcon className="text-primary-dark mr-2" />{' '}
                                    Pickup & Pay on Collection Available
                                </h1>
                                <h1 className="mt-4">
                                    <LocalShippingOutlinedIcon className="text-primary-dark mr-2" />
                                    Express Delivery Available
                                </h1>
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-col md:flex-row items-center justify-between text-black text-sm font-semibold">
                            <div className="">
                                <h1 className="mb-4">
                                    <EmojiTransportationIcon className="text-primary-dark mr-2" />{' '}
                                    Pickup & Pay on Collection Available
                                </h1>
                                <h1 className="mt-4">
                                    <LocalShippingOutlinedIcon className="text-primary-dark mr-2" />
                                    Express Delivery Available
                                </h1>
                            </div>
                            <div>
                                <h1 className="mb-4">
                                    <StorefrontIcon className="text-primary-dark mr-2" />{' '}
                                    Buy27 Warehouse
                                </h1>
                                <h1 className="mt-4">
                                    <AttachMoneyOutlinedIcon className="text-primary-dark mr-2" />
                                    Money Back Garantee
                                </h1>
                            </div>
                        </div>
                    )}
                    <div className="border-b my-5"></div>
                    <h1 className="text-sm font-semibold">
                        Share This Product
                    </h1>
                    <div className="flex items-center my-0 md:my-2 text-primary-dark">
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

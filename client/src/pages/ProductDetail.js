import React, { useEffect, useState } from 'react';
// import FavoriteIcon from '@material-ui/icons/Favorite';
import StorefrontIcon from '@material-ui/icons/Storefront';
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';
import LocalShippingOutlinedIcon from '@material-ui/icons/LocalShippingOutlined';
import AttachMoneyOutlinedIcon from '@material-ui/icons/AttachMoneyOutlined';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import { useSelector, useDispatch } from 'react-redux';

//Actions
import { getProductDetails } from '.././redux/actions/productActions';

const ProductDetail = ({ match, history, qty, setQty, addToCart }) => {
    const [isMobile, setisMobile] = useState(
        window.matchMedia('(max-width:768px)').matches
    );

    useEffect(() => {
        window.addEventListener('resize', () => {
            setisMobile(window.matchMedia('(max-width:768px)').matches);
        });
    });

    const [image, setImage] = useState(0);

    const dispatch = useDispatch();

    const productDetails = useSelector((state) => state.getProductDetails);
    const { loading, error, product } = productDetails;

    useEffect(() => {
        if (product && match.params.id !== product.slug) {
            dispatch(getProductDetails(match.params.id));
        }
    }, [dispatch, match, product]);

    const addToCartHandler = () => {
        dispatch(addToCart(product.slug, qty));
        history.push('/Cart');
    };

    const HandleImageClick = (index) => {
        setImage(index);
    };

    const [didMount, setDidMount] = useState(false);

    useEffect(() => {
        setDidMount(true);
        return () => setDidMount(false);
    }, []);

    if (!didMount) {
        return null;
    }

    return (
        <div>
            {loading ? (
                <h1>Loading...</h1>
            ) : error ? (
                <h1>{error}</h1>
            ) : (
                <>
                    <div className="flex flex-col items-center bg-gray-100 h-full w-full">
                        <div className="flex md:flex-row flex-col items-center justify-center md:justify-between mx-0 md:mx-4 w-full md:w-9/12 bg-white my-8">
                            <div key={product.id}>
                                <div className=" md:ml-32 ">
                                    {product.images && product.images[image] ? (
                                        product.images && (
                                            <img
                                                className="w-72 md:w-80 mt-8 md:mt-0"
                                                src={product.images[image]}
                                                alt="Product"
                                            />
                                        )
                                    ) : (
                                        <img
                                            className="w-72 md:w-80 mt-8 md:mt-0"
                                            src={product.image}
                                            alt="Product"
                                        />
                                    )}
                                </div>
                                <div className="flex items-center ml-0 md:ml-24 mt-4 md:mt-8">
                                    {product.images &&
                                        product.images.map((image, index) => {
                                            return (
                                                <img
                                                    key={index}
                                                    className="h-14 md:h-16 w-12 md:w-14 mr-2 border border-gray-400 "
                                                    src={image}
                                                    alt="Product gallery"
                                                    onClick={() =>
                                                        HandleImageClick(index)
                                                    }
                                                />
                                            );
                                        })}
                                </div>
                            </div>
                            <div className="bg-transparent h-full w-full md:w-1/2 py-8 px-4 md:px-8">
                                <h1 className="text-xl md:text-3xl font-semibold">
                                    {product.description}
                                </h1>
                                <div className="border-b my-5"></div>
                                <h1 className="text-2xl font-bold">
                                    <span className="mr-1">&#8358;</span>
                                    {product.price}
                                </h1>
                                <div className="border-b my-5"></div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <h1>Quantity:</h1>
                                        <select
                                            onChange={(e) =>
                                                setQty(e.target.value)
                                            }
                                            value={qty}
                                            className="flex items-center justify-between * hover:shadow-lg px-2 h-8 w-20 bg-transparent border rounded ml-5 focus:outline-none"
                                        >
                                            {[
                                                ...Array(
                                                    product.countInStock
                                                ).keys(),
                                            ].map((x) => (
                                                <option
                                                    key={x + 1}
                                                    value={x + 1}
                                                >
                                                    {x + 1}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <h1 className="">
                                            Status:{' '}
                                            <span>
                                                {product.countInStock > 0
                                                    ? 'InStock'
                                                    : 'Out of Stock'}
                                            </span>
                                        </h1>
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
                                    <button
                                        type="button"
                                        onClick={addToCartHandler}
                                        className="h-10 w-full md:w-full  rounded text-lg font-semibold bg-primary-dark text-white focus:outline-none"
                                    >
                                        Buy Now
                                    </button>
                                </div>
                                <div className="border-b my-5"></div>
                                {isMobile ? (
                                    <div className="text-black text-sm font-semibold">
                                        <div>
                                            <h1 className="mb-4">
                                                <EmojiTransportationIcon className="text-primary-dark mr-2" />{' '}
                                                Pickup & Pay on Collection
                                                Available
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
                                                Pickup & Pay on Collection
                                                Available
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
                                    <FacebookIcon
                                        className="mx-1"
                                        fontSize="small"
                                    />
                                    <TwitterIcon
                                        className="mx-1"
                                        fontSize="small"
                                    />
                                    <WhatsAppIcon
                                        className="mx-1"
                                        fontSize="small"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default ProductDetail;

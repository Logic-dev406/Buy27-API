import React, { useState } from 'react';
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Search from './pages/Search';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Breadcrumbs from './components/Breadcrumbs';
import AccountInfo from './pages/AccountInformation';
import DeliveryAddres from './pages/DeliveryAddress';
import PreviousOrders from './pages/PreviousOrders';
import UpdateAddress from './components/DeliveryAddress/UpdateAddress';

//Action
import { addToCart } from './redux/actions/cartAction';
import { getSearchedProducts } from './redux/actions/productActions';

const App = () => {
    const [qty, setQty] = useState(1);

    const [searchTerm, setSearchTerm] = useState('');

    const SearchedProducts = useSelector((state) => state.getSearchedProducts);
    const { loading, error, products } = SearchedProducts;

    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                <div>
                    <Navbar
                        cartItems={cartItems}
                        getSearchedProducts={getSearchedProducts}
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                    />
                    <Breadcrumbs />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route
                            path="/Shop"
                            exact
                            render={(props) => (
                                <Shop
                                    {...props}
                                    qty={qty}
                                    addToCart={addToCart}
                                />
                            )}
                        />
                        <Route
                            path="/Shop/:id"
                            render={(props) => (
                                <ProductDetail
                                    {...props}
                                    qty={qty}
                                    setQty={setQty}
                                    addToCart={addToCart}
                                />
                            )}
                        />
                        <Route
                            path="/Search"
                            render={(props) => (
                                <Search
                                    {...props}
                                    searchLoading={loading}
                                    searchError={error}
                                    searchedProducts={products}
                                />
                            )}
                        />
                        <Route
                            path="/My Profile"
                            render={(props) => <AccountInfo {...props} />}
                        />
                        <Route
                            path="/My Delivery Address"
                            render={(props) => <DeliveryAddres {...props} />}
                        />
                        <Route
                            path="/Edit"
                            render={({ match: { url } }) => (
                                <UpdateAddress url={url} />
                            )}
                        />
                        <Route
                            path="/My Orders"
                            render={(props) => <PreviousOrders {...props} />}
                        />
                        <Route path="/About" component={About} />
                        <Route path="/ContactUs" component={ContactUs} />
                        <Route
                            path="/Cart"
                            render={(props) => (
                                <Cart
                                    {...props}
                                    cartItems={cartItems}
                                    addToCart={addToCart}
                                />
                            )}
                        />
                    </Switch>
                    <Footer className="fixed" />
                </div>
            </div>
        </Router>
    );
};

export default App;

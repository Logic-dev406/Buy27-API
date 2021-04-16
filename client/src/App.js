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
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Breadcrumbs from './components/Breadcrumbs';
// import DeliveryAddres from './components/UserDashboardPages/DeliveryAddress';
// import PreviousOrders from './components/UserDashboardPages/PreviousOrders';
import UserDashboard from './pages/UsersDashboardControl';

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
                            path="/Dashboard"
                            render={(props) => <UserDashboard {...props} />}
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
                        <Route>
                            {' '}
                            <h1>This page does not exist</h1>{' '}
                        </Route>
                    </Switch>
                    <Footer className="fixed" />
                </div>
            </div>
        </Router>
    );
};

export default App;

import React from 'react';
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <div className="relative">
                <div>
                    <Navbar />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/shop" exact component={Shop} />
                        <Route path="/about" component={About} />
                        <Route path="/contactUs" component={ContactUs} />
                    </Switch>
                </div>
            </div>
        </Router>
    );
};

export default App;
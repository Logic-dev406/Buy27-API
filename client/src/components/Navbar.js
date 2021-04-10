import React, { useState, useEffect } from 'react';
import DesktopNavbar from '../sections/Navbar/DesktopNavbar';
import MobileNavbar from '../sections/Navbar/MobileNavbar';

const Navbar = ({
    cartItems,
    getSearchedProducts,
    searchTerm,
    setSearchTerm,
}) => {
    const [isMobile, setisMobile] = useState(
        window.matchMedia('(max-width:768px)').matches
    );

    useEffect(() => {
        window.addEventListener('resize', () => {
            setisMobile(window.matchMedia('(max-width:768px)').matches);
        });
    });

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
    };

    return (
        <div>
            {isMobile ? (
                <MobileNavbar
                    getCartCount={getCartCount}
                    getSearchedProducts={getSearchedProducts}
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                />
            ) : (
                <DesktopNavbar
                    getCartCount={getCartCount}
                    getSearchedProducts={getSearchedProducts}
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                />
            )}
        </div>
    );
};

export default Navbar;

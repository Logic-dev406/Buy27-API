import React, { useState, useEffect } from 'react';
import DesktopNavbar from '../sections/Navbar/DesktopNavbar';
import MobileNavbar from '../sections/Navbar/MobileNavbar';

const Navbar = () => {
    const [isMobile, setisMobile] = useState(
        window.matchMedia('(max-width:768px)').matches
    );

    useEffect(() => {
        window.addEventListener('resize', () => {
            setisMobile(window.matchMedia('(max-width:768px)').matches);
        });
    });

    return <div>{isMobile ? <MobileNavbar /> : <DesktopNavbar />}</div>;
};

export default Navbar;

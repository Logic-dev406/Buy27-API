import React, { useState, useEffect } from 'react';
import MobileFooter from '../sections/Footer/MobileFooter';
import DesktopFooter from '../sections/Footer/DesktopFooter';

const Footer = () => {
    const [isMobile, setisMobile] = useState(
        window.matchMedia('(max-width:768px)').matches
    );

    useEffect(() => {
        window.addEventListener('resize', () => {
            setisMobile(window.matchMedia('(max-width:768px)').matches);
        });
    });

    return <div>{isMobile ? <MobileFooter /> : <DesktopFooter />}</div>;
};

export default Footer;

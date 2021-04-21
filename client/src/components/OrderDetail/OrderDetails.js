import React, { useState, useEffect } from 'react';
import DesktopOrderDetails from '../../sections/OrderDetails/DesktopOrderDetails';
import MobileOrderDetails from '../../sections/OrderDetails/MobileOrderDetails';

const OrderDetails = () => {
    const [isMobile, setisMobile] = useState(
        window.matchMedia('(max-width:768px)').matches
    );

    useEffect(() => {
        window.addEventListener('resize', () => {
            setisMobile(window.matchMedia('(max-width:768px)').matches);
        });
    });

    return (
        <div>{isMobile ? <MobileOrderDetails /> : <DesktopOrderDetails />}</div>
    );
};

export default OrderDetails;

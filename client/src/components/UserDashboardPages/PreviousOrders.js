import React, { useState, useEffect } from 'react';
import MyOrders from '../../sections/PreviousOrders/DesktopPreviousOrders/MyOrders';
import OrderState from '../../sections/PreviousOrders/DesktopPreviousOrders/OrderState';
import MobileOrders from '../../sections/PreviousOrders/MobilePreviousOrders/MyOrders';

export const PreviousOrders = () => {
    const [isMobile, setisMobile] = useState(
        window.matchMedia('(max-width:768px)').matches
    );

    useEffect(() => {
        window.addEventListener('resize', () => {
            setisMobile(window.matchMedia('(max-width:768px)').matches);
        });
    });

    return (
        <div>
            <div className="flex items-center bg-white">
                {isMobile ? (
                    <MobileOrders />
                ) : (
                    <div className="flex">
                        <MyOrders />
                        <OrderState />
                    </div>
                )}
            </div>
        </div>
    );
};

export default PreviousOrders;

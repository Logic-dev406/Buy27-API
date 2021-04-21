import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import MobileOrder from '../../sections/PreviousOrder/MobileOrders';
import DesktopOrder from '../../sections/PreviousOrder/DesktopOrders';

export const PreviousOrders = () => {
    const [isMobile, setisMobile] = useState(
        window.matchMedia('(max-width:768px)').matches
    );

    useEffect(() => {
        window.addEventListener('resize', () => {
            setisMobile(window.matchMedia('(max-width:768px)').matches);
        });
    });

    let { path, url } = useRouteMatch();

    return (
        <div>
            {isMobile ? (
                <MobileOrder path={path} url={url} />
            ) : (
                <DesktopOrder path={path} url={url} />
            )}
        </div>
    );
};

export default PreviousOrders;

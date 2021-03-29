import React, { useState, useEffect } from 'react';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const ScrollArrow = () => {
    const [showScroll, setShowScroll] = useState(false);

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400) {
            setShowScroll(true);
        } else if (showScroll && window.pageYOffset <= 400) {
            setShowScroll(false);
        }
    };

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('scroll', checkScrollTop);

    const [didMount, setDidMount] = useState(false);

    useEffect(() => {
        setDidMount(true);
        return () => setDidMount(false);
    }, []);

    if (!didMount) {
        return null;
    }

    return (
        <div className="">
            <ExpandLessIcon
                className="flex ml-10 text-white fixed h-16 w-16 rounded-lg bg-primary-dark "
                onClick={scrollTop}
                style={{ display: showScroll ? 'flex' : 'none' }}
            />
        </div>
    );
};

export default ScrollArrow;

import React, { useState } from 'react';
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

    return (
        <ExpandLessIcon
            className="h-10 w-10 rounded bg-red-500"
            onClick={scrollTop}
            style={{ height: 40, display: showScroll ? 'flex' : 'none' }}
        />
    );
};

export default ScrollArrow;

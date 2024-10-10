import { useState } from 'react';

export const useSidebar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };

    const handleDrawerToggle = () => {
        if (!isClosing) {
            setMobileOpen((prev) => !prev);
        }
    };

    return {
        mobileOpen,
        handleDrawerClose,
        handleDrawerToggle,
        handleDrawerTransitionEnd,
    };
};

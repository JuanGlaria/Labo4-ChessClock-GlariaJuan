import { useState } from "react";

export const useModal = () => {
    const [isShowing, setIsShowing] = useState(true);
    const toggle = () => {
        setIsShowing(!isShowing);
    };
    return {
        isShowing,
        toggle,
    };
};

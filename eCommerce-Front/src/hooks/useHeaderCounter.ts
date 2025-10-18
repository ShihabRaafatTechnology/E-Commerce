import { useEffect, useState } from "react";

const useHeaderCounter = (totalQuantity: number) => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        if (!totalQuantity) return;
        setAnimate(true);
        const timer = setTimeout(() => setAnimate(false), 300);

        return () => clearTimeout(timer); // Cleanup to prevent memory leaks
    }, [totalQuantity]);

    return animate;
};

export default useHeaderCounter;

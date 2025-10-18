import { useNavigate } from "react-router-dom";
import { useAppSelector } from "@store/hooks";
import { useEffect, useState } from "react";

const useIconWishlist = () => {
    const [animate, setAnimate] = useState(false);
    const totalItems = useAppSelector(state => state.wishlist.itemsId);
    const navigate = useNavigate();
    useEffect(() => {
        if (!totalItems) return;
        setAnimate(true);
        setTimeout(() => setAnimate(false), 300);
    }, [totalItems]);
    return { animate, totalItems, navigate }
}

export default useIconWishlist
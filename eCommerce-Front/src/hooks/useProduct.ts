import { addToCart } from "@store/cart/cartSlice";
import { useAppDispatch } from "@store/hooks";
import { actLikeToggle } from "@store/wishlist/wishlistSlice";
import { useState, useEffect } from "react";

const useProduct = ({ id, quantity, max }: { id: number; quantity?: number; max: number }) => {
    const dispatch = useAppDispatch();
    const [isBtnDisabled, setIsBtnDisabled] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const currentQuantity = quantity ?? 0;
    const isMaxOrders = currentQuantity >= max ? true : false;

    useEffect(() => {
        if (!isBtnDisabled) {
            return;
        }
        setTimeout(() => {
            setIsBtnDisabled(false);
        }, 300);
    }, [isBtnDisabled]);

    const addToCartHandler = () => {
        dispatch(addToCart(id));
        setIsBtnDisabled(true);
    };

    const likeToggleHandler = () => {
        if (!isLoading) {
            setIsLoading(true);
            dispatch(actLikeToggle(id as number))
                .unwrap()
                .then(() => setIsLoading(false));
        }
    };

    return {likeToggleHandler, isLoading, isMaxOrders, addToCartHandler, isBtnDisabled}
}

export default useProduct
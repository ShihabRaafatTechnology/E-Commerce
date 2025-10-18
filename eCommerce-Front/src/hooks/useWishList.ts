import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetWishlist, wishlistCleanUp } from "@store/wishlist/wishlistSlice";
import { useEffect } from "react";
import { shallowEqual } from "react-redux";

const useWishList = () => {
    const dispatch = useAppDispatch();
    const { productsFullInfo, loading, error } = useAppSelector((state) => state.wishlist);

    const cartItems = useAppSelector((state) => state.cart.items, shallowEqual);
    useEffect(() => {
        const promise = dispatch(actGetWishlist());
        return () => {
            dispatch(wishlistCleanUp());
            promise.abort();
        };
    }, [dispatch]);

    const records = productsFullInfo.map((item) => ({
        ...item,
        quantity: item.id ? cartItems[item.id] ?? 0 : 0,
        isLiked: true,
    }));
    return {records, loading, error}
}

export default useWishList
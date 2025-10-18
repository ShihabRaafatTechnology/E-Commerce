import { useAppDispatch, useAppSelector } from "@store/hooks";
import actGetProductsByCatPrefix from "@store/products/act/actGetProductsByCatPrefix";
import { productsCleanUp } from "@store/products/productsSlice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const useProducts = () => {
    const params = useParams();
    const dispatch = useAppDispatch();
    const { records, loading, error } = useAppSelector((state) => state.products);
    const cartItems = useAppSelector((state) => state.cart.items);
    const wishlistItems = useAppSelector((state) => state.wishlist.itemsId);

    const productsFullInfo = records.map((item) => ({
        ...item,
        quantity: item.id ? cartItems[item.id] ?? 0 : 0,
        isLiked: wishlistItems.includes(item.id ?? 0),
    }));

    useEffect(() => {
        if (params.prefix) {
            const promise = dispatch(actGetProductsByCatPrefix(params.prefix));
            return () => { 
                dispatch(productsCleanUp());
                promise.abort();
             };
        }
    }, [dispatch, params]);
    return { productsFullInfo, params, loading, error }
}

export default useProducts
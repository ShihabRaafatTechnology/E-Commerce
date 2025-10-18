import { actGetProductsByItems, cartProductsFullInfo } from "@store/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useEffect, useMemo } from "react";
import { shallowEqual } from "react-redux";

const useShoppingCart = () => {
    const dispatch = useAppDispatch();
    const { items, productsFullInfo, loading, error } = useAppSelector(
        (state) => state.cart,
        shallowEqual
    );
    useEffect(() => {
        const promise = dispatch(actGetProductsByItems());
        return () => { 
            dispatch(cartProductsFullInfo());
            promise.abort(); 
        }
    }, [dispatch]);

    const products = useMemo(
        () =>
            productsFullInfo.map((item) => ({
                ...item,
                quantity: item.id ? items[item.id] ?? 0 : 0,
            })),
        [productsFullInfo, items]
    );
    return { products, loading, error }
}

export default useShoppingCart
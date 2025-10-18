import { useAppDispatch } from "@store/hooks";
import { addToCart, removeCart, removeFromCart } from "@store/cart/cartSlice";
import { useCallback } from "react";

const useCartItems = (id:number, quantity:number, max:number) => {
    const dispatch = useAppDispatch();
    const currentQuantity = quantity ?? 0;
    const isMaxOrders = currentQuantity >= max ? true : false;
    const isMinOrders = currentQuantity > 1 ? true : false;


    const removeFromCartHandler = useCallback(() => {
        if (isMinOrders) {
            dispatch(removeFromCart(id));
        }
    }, [dispatch, id, isMinOrders]);

    const removeCartHandler = useCallback(() => {
        console.log("removeCartHandler: " + id);

        dispatch(removeCart(id));
    }, [dispatch, id]);

    const addToCartHandler = useCallback(() => {
        if (!isMaxOrders) {
            dispatch(addToCart(id));
        }
    }, [dispatch, id, isMaxOrders]);
    return {removeFromCartHandler, removeCartHandler, addToCartHandler}
}

export default useCartItems
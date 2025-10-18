import { TotalQuantityShop } from "@store/cart/selectors";
import { useAppSelector } from "@store/hooks";

const useHeaderRightBar = () => {
    const totalWishlist = useAppSelector(state => state.wishlist.itemsId.length);
    const totalCart = useAppSelector(TotalQuantityShop);
    return {totalWishlist, totalCart}
}

export default useHeaderRightBar
import { useNavigate } from "react-router-dom";
import { TotalQuantityShop } from "@store/cart/selectors";
import { useAppSelector } from "@store/hooks";
import { useEffect, useState } from "react";

const useIconShoppingBag = () => {
    const [animate, setAnimate] = useState(false);
    const totalItems = useAppSelector(TotalQuantityShop);
    const navigate = useNavigate();
    
    useEffect(() => {
      if (!totalItems) return;
      setAnimate(true);
      setTimeout(() => setAnimate(false), 300);
    }, [totalItems]);
  return {animate, totalItems, navigate}
}

export default useIconShoppingBag
import { TProduct } from "@types";

const useCartItemsSubTotalPrice = (products: TProduct[]) => {
    const Subtotal = products.reduce((acc, product) => {
        if (product.quantity && typeof product.quantity === "number") {
          return acc + product.price * product?.quantity;
        } else {
          return acc;
        }
      }, 0);
      const totalCheck = Subtotal + 200;
      const formatPrice = (price: number) =>
        new Intl.NumberFormat("en-US", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }).format(price);
  return {formatPrice, totalCheck, Subtotal}
}

export default useCartItemsSubTotalPrice
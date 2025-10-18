import { TProduct } from "@types";
import useCartItemsSubTotalPrice from "@hooks/useCartItemsSubTotalPrice";

export type TCartItemsListProps = { products: TProduct[] };

export const CartItemsSubTotalPrice = ({ products }: TCartItemsListProps) => {
  const { formatPrice, totalCheck, Subtotal } = useCartItemsSubTotalPrice(products);
  return (
    <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
      <div className="mb-2 flex justify-between">
        <p className="text-gray-700">Subtotal</p>
        <p className="text-gray-700">{formatPrice(Subtotal)} L.E</p>
      </div>
      <div className="flex justify-between">
        <p className="text-gray-700">Shipping</p>
        <p className="text-gray-700">200.00 L.E</p>
      </div>
      <hr className="my-4" />
      <div className="flex justify-between">
        <p className="text-lg font-bold">Total</p>
        <p className="mb-1 text-lg font-bold">{formatPrice(totalCheck)} L.E</p>
      </div>
      <p className="text-sm text-gray-700 flex justify-end">including VAT</p>
      <button className="mt-6 w-full rounded-md bg-secondary py-1.5 font-medium text-blue-50 hover:bg-btn-secondary">
        Check out
      </button>
    </div>
  );
};
export default CartItemsSubTotalPrice;

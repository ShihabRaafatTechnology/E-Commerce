import { TProduct } from "@types";
import { AiFillDelete } from "react-icons/ai";
import { memo } from "react";
import useCartItems from "@hooks/useCartItems";

const CartItems = memo(({ id, title, cat_prefix, img, price, quantity, max }: TProduct) => {
  const {removeFromCartHandler, removeCartHandler, addToCartHandler} = useCartItems(id ?? 0, quantity ?? 0, max);
    
  return (
    quantity !== 0 && (
      <div className="rounded-lg md:w-[50vw]">
      <div className="justify-between mb-6 rounded-lg border border-gray-100 bg-white p-6 drop-shadow-md sm:flex sm:justify-start">
        <img
          src={img}
          alt="product-image"
          className="w-full rounded-lg sm:w-40"
        />
        <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
          <div className="mt-5 sm:mt-0">
            <h2 className="text-lg font-bold text-gray-900">{title}</h2>
            <p className="mt-1 text-xs text-gray-700">{cat_prefix}</p>
          </div>
          <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
            <div className="flex items-center border-gray-100">
              <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-secondary hover:text-blue-50" onClick={removeFromCartHandler}>
                -
              </span>
              <input
                className="h-8 w-8 border bg-white text-center text-xs outline-none"
                value={quantity}
                min="1"
                readOnly
              />
              <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-secondary hover:text-blue-50" onClick={addToCartHandler}>
                +
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <p className="text-sm">{price.toFixed(2)} L.E</p>
              <AiFillDelete className="text-2xl hover:text-red-600 cursor-pointer" onClick={removeCartHandler} />
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  );
});

export default CartItems;

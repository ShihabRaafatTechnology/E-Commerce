import { Heading } from "@components/common";
import { CartItemsList, CartItemsSubTotalPrice } from "@components/eCommerce";
import { Loading, LottieHandler } from "@components/feedback";
import useShoppingCart from "@hooks/useShoppingCart";

const ShoppingCart = () => {
  const { products, loading, error } = useShoppingCart();
  return (
    <>
      <Heading title={<>home / <span className="active">cart</span></>} />
        <div className="justify-center md:flex md:space-x-6 xl:px-0 mt-10">
          <Loading status={loading} error={error} type="cart">
            {products.length ? (
              <>
                <CartItemsList products={products} />
                <CartItemsSubTotalPrice products={products} />
              </>
            ) : (
              <div className="absolute bottom-0 md:w-[50rem]">
              <LottieHandler type="cart" message="No Cart Available"/>
            </div>
            )}
          </Loading>
        </div>
    </>
  );
};

export default ShoppingCart;

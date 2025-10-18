import { TProduct } from "@types"
import CartItems from "../CartItems"

type TCartItemsListProps = {products: TProduct[]}

const CartItemsList = ({products}:TCartItemsListProps) => {
    const renderList = products.map((product) => <CartItems key={product.id} {...product}/>);
  return (
    <div>{renderList}</div>
  )
}

export default CartItemsList
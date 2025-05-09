import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { CartItem } from "../types/types";
import { server } from "../redux/store";
type CartItemProps = {
cartItem: CartItem;
increment: (cartItem: CartItem) => void;
decrement: (cartItem: CartItem) => void;
remove: (id: string) => void;
};
const CartItem = ({ cartItem, decrement, remove, increment} : CartItemProps) => {
    const { photo, productId, name, price, quantity } = cartItem;
  return (
    <div className="cart-item">
        <img src={`${server}/${photo}`} alt="name" />
        <article>
            <Link to={`/product/${productId}`}>{name}</Link>
            <span>₹{price}</span>
        </article>
        <div>
            <button onClick={()=>decrement(cartItem)}>-</button>
            <p>{quantity}</p>
            <button onClick={()=>increment(cartItem)}>+</button>
        </div>

        <button onClick={()=>remove(productId)}>
            <FaTrash />
        </button>

    </div>
  );
};

export default CartItem;
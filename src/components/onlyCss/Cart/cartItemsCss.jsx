import { useCart } from "../../../context/useCartContext";
import { localePrice } from "../../../utils/localePrice"

import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import "./cartItems.css"

export function CartItemsCss({ product }) {
  const { removeToCart, increaseQuantity, decreaseQuantity } = useCart();
  const { id, imageUrl, price, name, quantity } = product;

  return (
    <div className={`cart-items`}>
      <img src={imageUrl} alt={name} />

      <div className="items-container">
        <p className="title">{name}</p>
        <p className="price">{localePrice(price)}</p>

        <div className="items-details">
          <div>
            <button
              onClick={() => decreaseQuantity(id)}
            >
              <FaMinus />
            </button>

            <span>{quantity}</span>

            <button
              onClick={() => increaseQuantity(id)}
            >
              <FaPlus />
            </button>
          </div>

          <button onClick={() => removeToCart(id)}>
            <FaTrashAlt />
          </button>
        </div>
      </div>
    </div>
  );
}

import { useCart } from "../../../context/useCartContext";
import { localePrice } from "../../../utils/localePrice"

import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import styles from "./cartItems.module.css"

export function CartItemsModule({ product }) {
  const { removeToCart, increaseQuantity, decreaseQuantity } = useCart();
  const { id, imageUrl, price, name, quantity } = product;

  return (
    <div className={styles.cartItems}>
      <img src={imageUrl} alt={name} />

      <div className={styles.itemsContainer}>
        <p className={styles.title}>{name}</p>
        <p className={styles.price}>{localePrice(price)}</p>

        <div className={styles.itemsDetails}>
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
            <FaTrashAlt className={styles.trash} />
          </button>
        </div>
      </div>
    </div>
  );
}

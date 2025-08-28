import { useCart } from "../../../context/useCartContext";
import { useTheme } from "../../../context/useThemeContext";
import { localePrice } from "../../../utils/localePrice";
import { CartItemsModule } from "./cartItemsModules";

import styles from "./cart.module.css";
import { X } from "lucide-react";

export function CartModules() {
  const { theme } = useTheme();
  const { cartItems, setIsCartOpen, totalToPay } = useCart();

  return (
    <div
      role="dialog"
      aria-label="Carrinho de compras"
      aria-modal="true"
      className={`${styles.cart} ${
        theme
          ? `${styles.dark} ${styles.cartDark}`
          : `${styles.light} ${styles.cartLight} shadow-light`
      }`}
    >
      <div
        className={`${styles.cartContainer} ${
          cartItems.length <= 0 && `${styles.noneItems}`
        }`}
      >
        <div className={styles.cartHeader}>
          <h2>Seu Carrinho</h2>
          <button onClick={() => setIsCartOpen(false)}>
            <X />
          </button>
        </div>

        <div className={styles.spaceItems}>
          {cartItems.map((product, index) => (
            <div key={index} className={styles.cartItemsContainer}>
              <CartItemsModule product={product} />
            </div>
          ))}
        </div>
      </div>

      <p className={styles.totalPrice}>
        Total: <span>{localePrice(totalToPay)}</span>
      </p>
    </div>
  );
}

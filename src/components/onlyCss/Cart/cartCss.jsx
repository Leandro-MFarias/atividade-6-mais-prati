import { useCart } from "../../../context/useCartContext";
import { useTheme } from "../../../context/useThemeContext";
import { localePrice } from "../../../utils/localePrice";
import { CartItemsCss } from "./cartItemsCss";

import "./cart.css";
import { X } from "lucide-react";

export function CartCss() {
  const { theme } = useTheme();
  const { cartItems, setIsCartOpen, totalToPay } = useCart();

  return (
    <div
      role="dialog"
      aria-label="Carrinho de compras"
      aria-modal="true"
      className={`cart ${theme ? "dark cart-dark" : "light shadow-light"}`}
    >
      <div
        className={`cart-container ${cartItems.length <= 0 && `none-items`}`}
      >
        <div className="cart-header">
          <h2>Seu Carrinho</h2>
          <button onClick={() => setIsCartOpen(false)}>
            <X />
          </button>
        </div>

        <div className="space-items">
          {cartItems.map((product, index) => (
            <div key={index} className="cart-items-container">
              <CartItemsCss product={product} />
            </div>
          ))}
        </div>
      </div>

      <p className="total-price">
        Total: <span>{localePrice(totalToPay)}</span>
      </p>
    </div>
  );
}

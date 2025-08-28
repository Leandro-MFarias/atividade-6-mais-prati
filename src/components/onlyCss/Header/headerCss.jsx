import { useCart } from "../../../context/useCartContext";
import { useTheme } from "../../../context/useThemeContext";
import { useEffect } from "react";
import "./header.css";

import logo from "../../../assets/logo.png";
import { ShoppingBag } from "lucide-react";

export function HeaderCss() {
  const { theme, setTheme } = useTheme();
  const { cartItems, isCartOpen, setIsCartOpen } = useCart();

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isCartOpen]);

  return (
    <header className="header-css">
      <div className="container-logo">
        <img src={logo} alt="logo do Site" />
        <h2>GameShop</h2>
      </div>

      <nav className="navigation">
        <button
          className={`container-toggle shadow-light`}
          onClick={() => setTheme(!theme)}
        >
          <div
            className={`toggle shadow-dark ${
              theme ? "toggle-dark" : "toggle-light"
            }`}
          >
            {theme ? (
              <p className="sm:text-xl">🌙</p>
            ) : (
              <p className="sm:text-xl">☀</p>
            )}
          </div>
        </button>

        <button
          aria-label="Abrir carrinho de compras"
          aria-haspopup="dialog"
          aria-expanded={isCartOpen}
          className="btn-cart"
          onClick={() => setIsCartOpen(true)}
        >
          <span>Carrinho</span>
          <div className="btn-cart-items">
            <ShoppingBag />
            <span>
              {cartItems.length}
            </span>
          </div>
        </button>
      </nav>
    </header>
  );
}

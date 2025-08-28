import { useCart } from "../../../context/useCartContext";
import { useTheme } from "../../../context/useThemeContext";
import { useEffect } from "react";
import styles from "./header.module.css";

import logo from "../../../assets/logo.png";
import { ShoppingBag } from "lucide-react";

export function HeaderModules() {
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
    <header className={styles.headerCss}>
      <div className={styles.containerLogo}>
        <img src={logo} alt="logo do Site" />
        <h2>GameShop</h2>
      </div>

      <nav className={styles.navigation}>
        <button
          className={`${styles.containerToggle} ${styles.shadowLight}`}
          onClick={() => setTheme(!theme)}
        >
          <div
            className={`${styles.toggle} ${styles.shadowDark} ${
              theme ? `${styles.toggleDark}` : `${styles.toggleLight}`
            }`}
          >
            {theme ? <p>🌙</p> : <p>☀</p>}
          </div>
        </button>

        <button
          aria-label="Abrir carrinho de compras"
          aria-haspopup="dialog"
          aria-expanded={isCartOpen}
          className={styles.btnCart}
          onClick={() => setIsCartOpen(true)}
        >
          <span>Carrinho</span>
          <div className={styles.btnCartItems}>
            <ShoppingBag />
            <span>{cartItems.length}</span>
          </div>
        </button>
      </nav>
    </header>
  );
}

import { useCart } from "../../context/useCartContext";
import { useTheme } from "../../context/useThemeContext";
import { CartModules } from "./Cart/cartModules";
import { HeaderModules } from "./Header/headerModules"
import { ProductsModules } from "./Products/productsModules";

import styles from "./global.module.css"

export function PageModules() {
  const { theme } = useTheme();
  const { isCartOpen } = useCart();

  return (
    <div className={`${theme ? `${styles.dark}` : `${styles.light}`}`}>
      <div className={styles.container}>
        <HeaderModules />
        <ProductsModules />
        {isCartOpen && <CartModules /> }
      </div>
    </div>
  );
}

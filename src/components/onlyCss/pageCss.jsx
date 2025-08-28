import { useCart } from "../../context/useCartContext";
import { useTheme } from "../../context/useThemeContext";
import { CartCss } from "./Cart/cartCss";
import { HeaderCss } from "./Header/headerCss";
import { ProductsCss } from "./Products/productsCss";

import "./global.css"

export function PageCss() {
  const { theme } = useTheme();
  const { isCartOpen } = useCart();

  return (
    <div className={`${theme ? "dark" : "light"}`}>
      <div className={`container`}>
        <HeaderCss />
        <ProductsCss />
        {isCartOpen && <CartCss /> }
      </div>
    </div>
  );
}

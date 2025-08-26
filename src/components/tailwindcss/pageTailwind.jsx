import { useCart } from "../../context/useCartContext";
import { useTheme } from "../../context/useThemeContext";
import { CartTailwind } from "./cartTailwind";
import { HeaderTailwind } from "./headerTailwind";
import { ProductsTailwind } from "./productsTailwind";

export function PageTailwind() {
  const { theme } = useTheme();
  const { isCartOpen } = useCart();

  return (
    <div className={`h-full ${theme && "bg-zinc-800 text-white"}`}>
      <div className={`max-w-screen-2xl mx-auto space-y-10 pb-10`}>
        <HeaderTailwind />
        <ProductsTailwind />
        {isCartOpen && <CartTailwind />}
      </div>
    </div>
  );
}

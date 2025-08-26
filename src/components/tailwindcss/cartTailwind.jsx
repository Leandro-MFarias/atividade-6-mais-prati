import { X } from "lucide-react";
import { useCart } from "../../context/useCartContext";
import { CartItems } from "./cartItemsTailwind";
import { localePrice } from "../../utils/localePrice";
import { useTheme } from "../../context/useThemeContext";

export function CartTailwind() {
  const { theme } = useTheme();
  const { cartItems, setIsCartOpen, totalToPay } = useCart();

  return (
    <div
      role="dialog"
      aria-label="Carrinho de compras"
      aria-modal="true"
      className={`fixed w-full sm:w-[380px] top-0 right-0 flex flex-col justify-between px-2 py-6 h-full ${
        theme
          ? "bg-neutral-800 border-zinc-600 border-l"
          : "bg-white shadow-light text-black"
      }`}
    >
      <div
        className={`space-y-8 flex-grow-1 overflow-y-auto overflow-x-hidden ${
          cartItems.length <= 0 && `overflow-y-hidden`
        }`}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-3xl pl-2 font-bold">Seu Carrinho</h2>
          <button onClick={() => setIsCartOpen(false)}>
            <X className="text-5xl hover:scale-110 transition duration-200 ease cursor-pointer" />
          </button>
        </div>
        <div className="space-y-6">
          {cartItems.map((product, index) => (
            <div key={index} className="space-y-4">
              <CartItems product={product} />
              <div className="w-full h-[1px] bg-zinc-400" />
            </div>
          ))}
        </div>
      </div>

      <p className="text-3xl font-bold py-4 pl-4">
        Total: <span className="">{localePrice(totalToPay)}</span>
      </p>
    </div>
  );
}

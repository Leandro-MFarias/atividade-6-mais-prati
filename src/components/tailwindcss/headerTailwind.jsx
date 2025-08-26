import { ShoppingBag } from "lucide-react";
import { useCart } from "../../context/useCartContext";
import { useTheme } from "../../context/useThemeContext";
import logo from "../../assets/logo.png";

export function HeaderTailwind() {
  const { theme, setTheme } = useTheme();
  const { cartItems, isCartOpen, setIsCartOpen } = useCart();

  return (
    <header className="flex items-center justify-between py-6 xl:px-3 px-4 border-b-2 border-orange-600 ">
      <div className="flex items-center space-x-2">
        <img src={logo} alt="" className="w-11" />
        <h2 className="self-end text-xl sm:text-3xl text-orange-500 font-semibold">
          GameShop
        </h2>
      </div>

      <nav className="flex items-end space-x-2 sm:space-x-8 mt-4 sm:mt-0">
        <button
          className={`relative w-14 h-8 sm:w-20 sm:h-10 rounded-3xl cursor-pointer shadow-light translate-y-1 sm:translate-y-2.5 bg-neutral-200`}
          onClick={() => setTheme(!theme)}
        >
          <div
            className={`absolute top-[5px] p-1 w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center rounded-full transition-all duration-300 ease-in-out shadow-dark bg-zinc-400 ${
              theme
                ? "translate-x-1 text-sky-600"
                : "translate-x-7 sm:translate-x-11 text-yellow-400"
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
          className="flex items-center space-x-2 text-xl hover:scale-105 transition duration-150 ease-in cursor-pointer"
          onClick={() => setIsCartOpen(true)}
        >
          <span>Carrinho</span>
          <div className="relative">
            <ShoppingBag />
            <span className="absolute -top-2 -right-2 text-white bg-red-600 px-1 text-xs font-bold rounded-full">
              {cartItems.length}
            </span>
          </div>
        </button>
      </nav>
    </header>
  );
}

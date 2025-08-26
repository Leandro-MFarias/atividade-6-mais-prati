import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { useCart } from "../../context/useCartContext";
import { localePrice } from "../../utils/localePrice"
import { useTheme } from "../../context/useThemeContext";

export function CartItems({ product }) {
  const { removeToCart, increaseQuantity, decreaseQuantity } = useCart();
  const { theme } = useTheme()
  const { id, imageUrl, price, name, quantity } = product;

  return (
    <div className={`flex flex-grow-1 space-x-4 pl-2 ${theme && "text-white"}`}>
      <img src={imageUrl} className="w-24 rounded-md" alt={name} />

      <div className="pt-2 space-y-3 w-full">
        <p className="font-bold max-w-[95%] truncate text-orange-600">{name}</p>
        <p className="text-lg font-bold">{localePrice(price)}</p>

        <div className="flex space-x-24">
          <div className="flex items-center space-x-2 pl-2">
            <button
              className="cursor-pointer"
              onClick={() => decreaseQuantity(id)}
            >
              <FaMinus className="hover:scale-125 transition duration-150 ease-linear text-orange-600" />
            </button>

            <span>{quantity}</span>

            <button
              className="cursor-pointer"
              onClick={() => increaseQuantity(id)}
            >
              <FaPlus className="hover:scale-125 transition duration-150 ease-linear text-orange-600" />
            </button>
          </div>

          <button onClick={() => removeToCart(id)} className="cursor-pointer">
            <FaTrashAlt className="text-xl text-red-500 hover:scale-110 transition duration-150 ease" />
          </button>
        </div>
      </div>
    </div>
  );
}

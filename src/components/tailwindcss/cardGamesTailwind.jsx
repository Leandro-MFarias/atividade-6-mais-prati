import { FaStar } from "react-icons/fa";
import { useCart } from "../../context/useCartContext";
import { localePrice } from "../../utils/localePrice";
import { useTheme } from "../../context/useThemeContext";

export function CardGamesTailwind({ product }) {
  const { theme } = useTheme();
  const { addToCart } = useCart();

  return (
    <div
      className={` bg-white flex flex-col justify-around w-[286px] h-[360px] py-4 rounded-xl ${
        theme ? "shadow-dark" : "shadow-light"
      }`}
    >
      <div className="ml-4 backgroundPromo self-start w-18 flex justify-center py-2 rounded-3xl font-bold shadow-light">
        {product.type}
      </div>

      <img
        src={product.imageUrl}
        alt="Imagem da capa do jogo"
        className="w-32 self-center rounded-md"
      />
      <div className="px-4">
        <p className={`font-bold max-w-[90%] truncate text-zinc-600`}>
          {product.name}
        </p>
        <div className="flex justify-between items-center">
          <p className="text-orange-500 font-bold text-xl">
            {localePrice(product.price)}
          </p>
          <div className="flex">
            {[...Array(5)].map((_, index) => (
              <FaStar
                key={index}
                className={
                  product.rating > index ? "text-yellow-300" : "text-zinc-300"
                }
              />
            ))}
          </div>
        </div>
      </div>

      <button
        className="border-2 border-orange-600 text-orange-500 rounded-md py-2 w-11/12 self-center font-bold hover:bg-orange-500 hover:text-white transition duration-300 ease cursor-pointer"
        onClick={() => addToCart(product)}
      >
        Adicionar ao Carrinho
      </button>
    </div>
  );
}

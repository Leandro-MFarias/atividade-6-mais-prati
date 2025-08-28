import { useCart } from "../../../context/useCartContext";
import { useTheme } from "../../../context/useThemeContext";
import { localePrice } from "../../../utils/localePrice";

import "./cardGames.css"
import { FaStar } from "react-icons/fa";

export function CardGamesCss({ product }) {
  const { theme } = useTheme();
  const { addToCart } = useCart();

  return (
    <div
      className={`card-game ${theme ? "shadow-dark" : "shadow-light"}`}
    >
      <div className="game-type backgroundPromo shadow-light">
        {product.type}
      </div>

      <img
        src={product.imageUrl}
        alt="Imagem da capa do jogo"
      />
      <div className="px-4">
        <p className={`game-name`}>
          {product.name}
        </p>
        <div className="container-stars">
          <p>
            {localePrice(product.price)}
          </p>
          <div>
            {[...Array(5)].map((_, index) => (
              <FaStar
                key={index}
                className={
                  product.rating > index ? "rating" : "noRating"
                }
              />
            ))}
          </div>
        </div>
      </div>

      <button
        className="btn-add"
        onClick={() => addToCart(product)}
      >
        Adicionar ao Carrinho
      </button>
    </div>
  );
}

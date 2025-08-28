import { useCart } from "../../../context/useCartContext";
import { useTheme } from "../../../context/useThemeContext";
import { localePrice } from "../../../utils/localePrice";

import { FaStar } from "react-icons/fa";
import styles from "./cardGames.module.css"

export function CardGamesCss({ product }) {
  const { theme } = useTheme();
  const { addToCart } = useCart();

  return (
    <div
      className={`${styles.cardGame} ${theme ? `shadow-dark` : "shadow-light"}`}
    >
      <div className={`${styles.gameType} shadow-light backgroundPromo`}>
        {product.type}
      </div>

      <img
        src={product.imageUrl}
        alt="Imagem da capa do jogo"
      />
      <div>
        <p className={styles.gameName}>
          {product.name}
        </p>
        <div className={styles.containerStars}>
          <p>
            {localePrice(product.price)}
          </p>
          <div>
            {[...Array(5)].map((_, index) => (
              <FaStar
                key={index}
                className={
                  product.rating > index ? `${styles.rating}` : `${styles.noRating}`
                }
              />
            ))}
          </div>
        </div>
      </div>

      <button
        className={styles.btnAdd}
        onClick={() => addToCart(product)}
      >
        Adicionar ao Carrinho
      </button>
    </div>
  );
}

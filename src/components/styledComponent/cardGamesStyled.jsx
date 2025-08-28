import styled, { css } from "styled-components";
import { FaStar } from "react-icons/fa";
import { useCart } from "../../context/useCartContext";
import { localePrice } from "../../utils/localePrice";
import { useTheme } from "../../context/useThemeContext";

const Card = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 286px;
  height: 360px;
  padding: 1rem 0;
  border-radius: 0.75rem;
  ${({ themeMode }) =>
    themeMode
      ? css`
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
        `
      : css`
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        `}
`;

const PromoBadge = styled.div`
  margin-left: 1rem;
  width: 4.5rem;
  display: flex;
  justify-content: center;
  padding: 0.5rem 0;
  border-radius: 9999px;
  font-weight: 700;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fbbf24;
`;

const ProductImage = styled.img`
  width: 8rem; /* w-32 */
  align-self: center;
  border-radius: 0.375rem;
`;

const ProductInfo = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
`;

const ProductName = styled.p`
  font-weight: 700;
  max-width: 90%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #52525b;
`;

const PriceAndRating = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.25rem;
`;

const Price = styled.p`
  color: #f97316;
  font-weight: 700;
  font-size: 1.25rem;
`;

const StarsWrapper = styled.div`
  display: flex;
  gap: 0.125rem;
`;

const CartButton = styled.button`
  border-radius: 0.375rem;
  padding: 0.5rem 0;
  width: 91%;
  align-self: center;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;

  ${({ variant }) =>
    variant === "secondary"
      ? css`
          border: 2px solid #2563eb;
          color: #2563eb;

          &:hover {
            background-color: #2563eb;
            color: #ffffff;
          }
        `
      : css`
          border: 2px solid #f97316;
          color: #f97316;

          &:hover {
            background-color: #f97316;
            color: #ffffff;
          }
        `}
`;

export function CardGamesStyled({ product }) {
  const { theme } = useTheme();
  const { addToCart } = useCart();

  return (
    <Card themeMode={theme}>
      <PromoBadge>{product.type}</PromoBadge>
      <ProductImage src={product.imageUrl} alt="Imagem da capa do jogo" />
      <ProductInfo>
        <ProductName>{product.name}</ProductName>
        <PriceAndRating>
          <Price>{localePrice(product.price)}</Price>
          <StarsWrapper>
            {[...Array(5)].map((_, index) => (
              <FaStar
                key={index}
                color={product.rating > index ? "#facc15" : "#d4d4d8"}
              />
            ))}
          </StarsWrapper>
        </PriceAndRating>
      </ProductInfo>
      <CartButton onClick={() => addToCart(product)} variant="primary">
        Adicionar ao Carrinho
      </CartButton>
    </Card>
  );
}

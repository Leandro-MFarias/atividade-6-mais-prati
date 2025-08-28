import styled, { css } from "styled-components";
import { X } from "lucide-react";
import { useCart } from "../../context/useCartContext";
import { localePrice } from "../../utils/localePrice";
import { useTheme } from "../../context/useThemeContext";
import { CartItemsStyled } from "./cartItemsStyled";

const CartContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem 0.5rem;
  ${({ themeMode }) =>
    themeMode
      ? css`
          background-color: #27272a;
          border-left: 1px solid #52525b;
        `
      : css`
          background-color: #ffffff;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          color: #000000;
        `}

  @media (min-width: 640px) {
    width: 380px; /* sm:w-[380px] */
  }
`;

const CartContent = styled.div`
  flex-grow: 1;
  overflow-x: hidden;
  overflow-y: ${({ hasItems }) => (hasItems ? "auto" : "hidden")};
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const CartHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CartTitle = styled.h2`
  font-size: 1.875rem;
  padding-left: 0.5rem;
  font-weight: 700;
`;

const CloseButton = styled.button`
  svg {
    font-size: 3rem;
    cursor: pointer;
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #a1a1aa;
`;

const CartTotal = styled.p`
  font-size: 1.875rem;
  font-weight: 700;
  padding: 1rem 0 0 1rem;
`;

export function CartStyled() {
  const { theme } = useTheme();
  const { cartItems, setIsCartOpen, totalToPay } = useCart();

  return (
    <CartContainer themeMode={theme} role="dialog" aria-label="Carrinho de compras" aria-modal="true">
      <CartContent hasItems={cartItems.length > 0}>
        <CartHeader>
          <CartTitle>Seu Carrinho</CartTitle>
          <CloseButton onClick={() => setIsCartOpen(false)}>
            <X />
          </CloseButton>
        </CartHeader>

        <ItemsWrapper>
          {cartItems.map((product, index) => (
            <ItemContainer key={index}>
              <CartItemsStyled product={product} />
              <Divider />
            </ItemContainer>
          ))}
        </ItemsWrapper>
      </CartContent>

      <CartTotal>
        Total: <span>{localePrice(totalToPay)}</span>
      </CartTotal>
    </CartContainer>
  );
}

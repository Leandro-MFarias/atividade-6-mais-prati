import styled from "styled-components";
import { FaMinus, FaPlus, FaTrashAlt } from "react-icons/fa";
import { useCart } from "../../context/useCartContext";
import { localePrice } from "../../utils/localePrice";
import { useTheme } from "../../context/useThemeContext";

const ItemContainer = styled.div`
  display: flex;
  flex-grow: 1;
  padding-left: 0.5rem;
  gap: 1rem;
  ${({ themeMode }) => themeMode && "color: #ffffff;"} 
`;

const ItemImage = styled.img`
  width: 6rem;
  border-radius: 0.375rem;
`;

const ItemInfo = styled.div`
  padding-top: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
`;

const ItemName = styled.p`
  font-weight: 700;
  max-width: 95%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #f97316;
`;

const ItemPrice = styled.p`
  font-size: 1.125rem;
  font-weight: 700;
`;

const ControlsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 6rem;
`;

const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding-left: 0.5rem;
`;

const IconButton = styled.button`
  cursor: pointer;
  svg {
    color: #f97316;
    transition: transform 0.15s linear;

    &:hover {
      transform: scale(1.25);
    }
  }
`;

const TrashButton = styled.button`
  cursor: pointer;
  svg {
    font-size: 1.25rem;
    color: #ef4444;
    transition: transform 0.15s ease;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export function CartItemsStyled({ product }) {
  const { removeToCart, increaseQuantity, decreaseQuantity } = useCart();
  const { theme } = useTheme();
  const { id, imageUrl, price, name, quantity } = product;

  return (
    <ItemContainer themeMode={theme}>
      <ItemImage src={imageUrl} alt={name} />
      <ItemInfo>
        <ItemName>{name}</ItemName>
        <ItemPrice>{localePrice(price)}</ItemPrice>

        <ControlsWrapper>
          <QuantityControls>
            <IconButton onClick={() => decreaseQuantity(id)}>
              <FaMinus />
            </IconButton>
            <span>{quantity}</span>
            <IconButton onClick={() => increaseQuantity(id)}>
              <FaPlus />
            </IconButton>
          </QuantityControls>

          <TrashButton onClick={() => removeToCart(id)}>
            <FaTrashAlt />
          </TrashButton>
        </ControlsWrapper>
      </ItemInfo>
    </ItemContainer>
  );
}

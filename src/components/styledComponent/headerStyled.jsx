import styled, { css } from "styled-components";
import { ShoppingBag } from "lucide-react";
import { useCart } from "../../context/useCartContext";
import { useTheme } from "../../context/useThemeContext";
import logo from "../../assets/logo.png";
import { useEffect } from "react";

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border-bottom: 2px solid #f97316;

  @media (min-width: 1280px) {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const LogoImg = styled.img`
  width: 2.75rem;
`;

const LogoText = styled.h2`
  align-self: flex-end;
  font-size: 1.25rem;
  font-weight: 600; 
  color: #f97316;

  @media (min-width: 640px) {
    font-size: 1.875rem;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: flex-end;
  gap: 0.5rem;
  margin-top: 1rem;

  @media (min-width: 640px) {
    gap: 2rem;
    margin-top: 0;
  }
`;

const ThemeButton = styled.button`
  position: relative;
  width: 3.5rem;
  height: 2rem;
  border-radius: 9999px;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  background-color: #e5e7eb; 
  transform: translateY(0.25rem);
  transition: all 0.3s ease-in-out;

  @media (min-width: 640px) {
    width: 5rem;  /* sm:w-20 */
    height: 2.5rem; /* sm:h-10 */
    transform: translateY(0.625rem);
  }
`;

const ThemeIndicator = styled.div`
  position: absolute;
  top: 5px;
  width: 1.5rem;
  height: 1.5rem;
  padding: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  background-color: #71717a; /* bg-zinc-400 */
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  transition: all 0.3s ease-in-out;

  ${({ themeMode }) =>
    themeMode
      ? css`
          transform: translateX(0.25rem); 
        `
      : css`
          transform: translateX(1.75rem);
          @media (min-width: 640px) {
            transform: translateX(2.75rem);
          }
        `}
`;

const IndicatorText = styled.p`
  font-size: 1rem;
  @media (min-width: 640px) {
    font-size: 1.25rem;
  }
`;

const CartButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.25rem;
  cursor: pointer;
  transition: transform 0.15s ease-in;
  &:hover {
    transform: scale(1.05);
  }
`;

const CartCount = styled.span`
  position: absolute;
  top: -0.5rem; 
  right: -0.5rem;
  background-color: #dc2626;
  color: #ffffff;
  padding: 0 0.25rem; 
  font-size: 0.75rem; 
  font-weight: 700;
  border-radius: 9999px;
`;

export function HeaderStyled() {
  const { theme, setTheme } = useTheme();
  const { cartItems, isCartOpen, setIsCartOpen } = useCart();

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isCartOpen]);

  return (
    <Header>
      <LogoWrapper>
        <LogoImg src={logo} alt="logo do site" />
        <LogoText>GameShop</LogoText>
      </LogoWrapper>

      <Nav>
        <ThemeButton onClick={() => setTheme(!theme)}>
          <ThemeIndicator themeMode={theme}>
            <IndicatorText>{theme ? "🌙" : "☀"}</IndicatorText>
          </ThemeIndicator>
        </ThemeButton>

        <CartButton
          aria-label="Abrir carrinho de compras"
          aria-haspopup="dialog"
          aria-expanded={isCartOpen}
          onClick={() => setIsCartOpen(true)}
        >
          <span>Carrinho</span>
          <div style={{ position: "relative" }}>
            <ShoppingBag />
            <CartCount>{cartItems.length}</CartCount>
          </div>
        </CartButton>
      </Nav>
    </Header>
  );
}

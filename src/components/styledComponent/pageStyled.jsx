import styled from "styled-components";
import { useCart } from "../../context/useCartContext";
import { useTheme } from "../../context/useThemeContext";
import { HeaderStyled } from "./headerStyled";
import { ProductsStyled } from "./productsStyled";
import { CartStyled } from "./cartStyled";

const PageContainer = styled.div`
  height: 100%;
  background-color: ${({ themeMode }) => (themeMode ? "#18181b" : "transparent")};
  color: ${({ themeMode }) => (themeMode ? "#ffffff" : "inherit")};
`;

const ContentWrapper = styled.div`
  max-width: 1536px;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 2.5rem;
`;

export function PageStyled() {
  const { theme } = useTheme();
  const { isCartOpen } = useCart();

  return (
    <PageContainer themeMode={theme}>
      <ContentWrapper>
        <HeaderStyled />
        <ProductsStyled />
        {isCartOpen && <CartStyled />}
      </ContentWrapper>
    </PageContainer>
  );
}

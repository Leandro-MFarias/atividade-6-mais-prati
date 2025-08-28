import styled from "styled-components";
import { products } from "../../data/products";
import { CardGamesStyled } from "./cardGamesStyled";

const ProductsSection = styled.section`
  max-width: 1366px;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  row-gap: 1.5rem;
  justify-items: center;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export function ProductsStyled() {
  return (
    <ProductsSection>
      {products.map((product) => (
        <CardGamesStyled product={product} key={product.id} />
      ))}
    </ProductsSection>
  );
}

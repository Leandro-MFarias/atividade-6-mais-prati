import { products } from "../../../data/products";
import { CardGamesCss } from "./cardGamesCss";

import "./products.css"

export function ProductsCss() {
  return (
    <section className="container-products">
      {products.map((product) => (
        <CardGamesCss product={product} key={product.id} />
      ))}
    </section>
  );
}

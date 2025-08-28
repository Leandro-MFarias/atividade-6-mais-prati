import { products } from "../../../data/products";
import { CardGamesCss } from "./cardGamesCss";

import styles from "./products.module.css"

export function ProductsModules() {
  return (
    <section className={styles.containerProducts}>
      {products.map((product) => (
        <CardGamesCss product={product} key={product.id} />
      ))}
    </section>
  );
}

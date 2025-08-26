import { products } from "../../data/products";
import { CardGamesTailwind } from "./cardGamesTailwind";

export function ProductsTailwind() {
  return (
    <section className="max-w-[1366px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 justify-items-center">
      {products.map((product) => (
        <CardGamesTailwind product={product} key={product.id} />
      ))}
    </section>
  );
}

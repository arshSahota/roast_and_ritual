import ProductCard from "./ProductCard";
import { products } from "../data/products";

function Menu() {
  return (
    <section className="px-8 py-20">
      <h2 className="mb-10 text-center text-4xl font-bold">
        Our Favorites
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
}

export default Menu;
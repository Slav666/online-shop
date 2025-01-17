import Product from "./product";
import { Product as ProductType } from "../data/product";

export interface ProductListProps {
  products: ProductType[]; // Ensure products prop is an array of Product objects
}

export default function ProductList({ products }: ProductListProps) {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center text-[#003366] mb-8">
        Our Products
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

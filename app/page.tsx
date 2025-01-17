"use client";
import ProductList from "./about/productList";
import products from "./data/product";
import Carousel from "./swiper";

export default function Home() {
  return (
    <div>
      <Carousel />
  

      {/* Featured Products Section */}
      <section className="py-12 bg-gray-100">
        <ProductList products={products} />
      </section>
    </div>
  );
}

"use client";
import ProductList from "./about/productList";
import products from "./data/product";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="bg-[#2E8B57] text-white h-96 bg-cover bg-center"
        style={{ backgroundImage: "url('0.jpg')" }}
      >
        <div className="flex justify-center items-center h-full bg-opacity-50">
          {/* <Image
            src="/0.jpg"
            alt=""
            layout="responsive"
            objectFit="cover"
            height={100}
            width={100}
          /> */}
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-12 bg-gray-100">
        <ProductList products={products} />
      </section>
    </div>
  );
}

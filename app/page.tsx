"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#003366] text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">MountainShop</h1>
          <button
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
          <nav className={`lg:flex ${isMenuOpen ? "block" : "hidden"}`}>
            <Link
              href="/"
              className="hover:underline block lg:inline-block px-4 py-2"
            >
              Home
            </Link>
            <a
              href="/shop"
              className="hover:underline block lg:inline-block px-4 py-2"
            >
              Shop
            </a>
            <a
              href="/about"
              className="hover:underline block lg:inline-block px-4 py-2"
            >
              About Us
            </a>
            <a
              href="/contact"
              className="hover:underline block lg:inline-block px-4 py-2"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

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
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center text-[#003366] mb-8">
            Featured Products
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src="0.jpg"
                alt="Product"
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h4 className="text-xl font-semibold text-[#2E8B57]">
                  Trekking Backpack
                </h4>
                <p className="text-gray-700 mt-2">
                  Perfect for mountain adventures.
                </p>
                <button className="mt-4 px-6 py-2 bg-[#FF7F00] text-white rounded hover:bg-[#FF4500]">
                  Buy Now
                </button>
              </div>
            </div>
            {/* Product 2 */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src="your-product-image.jpg"
                alt="Product"
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h4 className="text-xl font-semibold text-[#2E8B57]">
                  Hiking Boots
                </h4>
                <p className="text-gray-700 mt-2">
                  Durable and comfortable for long treks.
                </p>
                <button className="mt-4 px-6 py-2 bg-[#FF7F00] text-white rounded hover:bg-[#FF4500]">
                  Buy Now
                </button>
              </div>
            </div>
            {/* Product 3 */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src="your-product-image.jpg"
                alt="Product"
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h4 className="text-xl font-semibold text-[#2E8B57]">Tent</h4>
                <p className="text-gray-700 mt-2">
                  Lightweight and waterproof for camping.
                </p>
                <button className="mt-4 px-6 py-2 bg-[#FF7F00] text-white rounded hover:bg-[#FF4500]">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#003366] text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 MountainShop. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

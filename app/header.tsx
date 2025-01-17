"use client";
import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="bg-[#003366] text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">MountainShop</h1>
        <button
          className="lg:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
        <div className={`lg:flex ${isMenuOpen ? "block" : "hidden"}`}>
          <Link
            href="/"
            className="hover:underline block lg:inline-block px-4 py-2"
          >
            Home
          </Link>
          <Link
            href="/shop"
            className="hover:underline block lg:inline-block px-4 py-2"
          >
            Shop
          </Link>
          <Link
            href="/about"
            className="hover:underline block lg:inline-block px-4 py-2"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="hover:underline block lg:inline-block px-4 py-2"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
};
export default Header;

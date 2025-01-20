"use client";
import { useState } from "react";
import NavLink from "./components/navLink";
import Button from "./components/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Define the navigation links in an array
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ];

  const categories = [
    {
      name: "Exclusive Sales",
      subcategories: [
        "Sale 1",
        "Sale 2",
        "Sale 3",
        "Brand 1",
        "Brand 2",
        "Brand 3",
      ],
    },
    {
      name: "Popular Brand",
      subcategories: ["Brand 1", "Brand 2", "Brand 3"],
    },
    {
      name: "Trending",
      subcategories: ["Trend 1", "Trend 2", "Trend 3"],
    },
    {
      name: "By Sport",
      subcategories: ["Sport 1", "Sport 2", "Sport 3"],
    },
    {
      name: "Clothing",
      subcategories: ["Sport 1", "Sport 2", "Sport 3"],
    },
    {
      name: "Footwear",
      subcategories: ["Sport 1", "Sport 2", "Sport 3"],
    },
    {
      name: "Accessories",
      subcategories: ["Sport 1", "Sport 2", "Sport 3"],
    },
    {
      name: "Equipment",
      subcategories: ["Sport 1", "Sport 2", "Sport 3"],
    },
  ];

  return (
    <div>
      <header className="bg-[#003366] text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="tSext-2xl font-bold">MountainShop</h1>
          <Button
            label="☰"
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />

          <div className={`lg:flex ${isMenuOpen ? "block" : "hidden"}`}>
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href} label={link.label} />
            ))}
          </div>
        </div>
      </header>
      <nav className="bg-gray-800 text-white text-sm/3 relative z-50">
        <ul className="container mx-auto flex justify-between items-center hidden sm:flex">
          {/* <ul className="flex justify-center space-x-8 p-4"> */}
          {categories.map((category) => (
            <li key={category.name} className="relative group">
              <button className="focus:outline-none">{category.name}</button>
              {/* <ul className="absolute left-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 invisible group-hover:visible">
                {category.subcategories.map((subcategory) => (
                  <li key={subcategory}>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                      {subcategory}
                    </a>
                  </li>
                ))}
              </ul> */}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Header;

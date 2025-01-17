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

  return (
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
  );
};

export default Header;

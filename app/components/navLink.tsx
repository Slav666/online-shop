import React from "react";
import Link from "next/link";

interface NavLinkProps {
  href: string;
  label: string;
  className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label, className = "" }) => {
  return (
    <Link
      href={href}
      className={`hover:underline block lg:inline-block px-4 py-2 ${className}`}
    >
      {label}
    </Link>
  );
};

export default NavLink;

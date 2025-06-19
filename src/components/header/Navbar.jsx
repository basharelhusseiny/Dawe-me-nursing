"use client";
import Link from "next/link";
import { useState } from "react";

const Navbar = ({ navLinks }) => {
  const [activeLink, setActiveLink] = useState("#home");

  return (
    <nav>
      <ul className="hidden md:flex items-center justify-between gap-8 font-bold">
        {navLinks.map((link) => (
          <li key={link.id}>
            <Link
              href={link.href}
              onClick={() => setActiveLink(link.href)}
              className={`transition-colors ${
                activeLink === link.href ? "text-sky-600" : ""
              }`}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

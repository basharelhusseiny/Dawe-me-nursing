"use client";
import { useMobileMenu } from "@/context/MobileMenuContext";
import Link from "next/link";

const MobileMenu = ({ navLinks }) => {
  const { isMobMenuOpen, setIsMobMenuOpen } = useMobileMenu();
  return (
    <div
      onClick={() => setIsMobMenuOpen(false)}
      className={`fixed z-[49] right-0 top-[68px] bg-black/60 w-full h-[100dvh] duration-500 transition-all
            ${isMobMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}
         `}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`absolute right-0 h-full bg-white w-[280px] duration-500 transition-transform ${
          isMobMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="text-center my-32">
          {isMobMenuOpen && (
            <div className="flex flex-col items-center justify-center gap-8">
              {navLinks.map((link) => (
                <div key={link.id}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMobMenuOpen(false)}
                    className="hover:text-sky-600 capitalize font-bold text-xl duration-300"
                  >
                    {link.title}
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;

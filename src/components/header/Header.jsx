"use client";
import Image from "next/image";
import Navbar from "./Navbar";
import WhatsAppButton from "@/ui/WhatsAppButton";
import Link from "next/link";
import { VscClose } from "react-icons/vsc";
import { IoMenuOutline } from "react-icons/io5";
import { useMobileMenu } from "@/context/MobileMenuContext";
import MobileMenu from "./MobileMenu";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Header = () => {
  const { isMobMenuOpen, setIsMobMenuOpen } = useMobileMenu();
  const [activeLink, setActiveLink] = useState("#home");
  const pathname = usePathname();

  const navLinks = [
    {
      id: crypto.randomUUID(),
      title: "الرئيسية",
      href: pathname === "/" ? "#home" : "/#home",
    },
    {
      id: crypto.randomUUID(),
      title: "من نحن",
      href: pathname === "/" ? "#about" : "/#about",
    },
    {
      id: crypto.randomUUID(),
      title: "خدماتنا",
      href: pathname === "/" ? "#services" : "/#services",
    },
    {
      id: crypto.randomUUID(),
      title: "تواصل معنا",
      href: "/contact",
    },
  ];

  return (
    <header className="fixed z-50 left-0 top-0 w-full bg-white shadow-lg py-3 text-lg">
      <div className="container mx-auto px-5">
        <div className="flex items-center justify-between">
          {isMobMenuOpen ? (
            <VscClose
              size={35}
              onClick={() => setIsMobMenuOpen(!isMobMenuOpen)}
              className={`flex md:hidden hover:text-sky-600 duration-300`}
            />
          ) : (
            <IoMenuOutline
              size={35}
              onClick={() => setIsMobMenuOpen(!isMobMenuOpen)}
              className={`flex md:hidden hover:text-sky-600 duration-300`}
            />
          )}
          <Link
            href={pathname === "/" ? "#home" : "/#home"}
            onClick={() => setActiveLink("#home")}
          >
            <Image
              src="/images/logo.jpg"
              alt="Dawe Me logo"
              loading="eager"
              priority
              width={120}
              height={100}
            />
          </Link>
          <div className="hidden md:flex">
            <Navbar
              navLinks={navLinks}
              activeLink={activeLink}
              setActiveLink={setActiveLink}
            />
          </div>
          <WhatsAppButton />
          <MobileMenu
            navLinks={navLinks}
            activeLink={activeLink}
            setActiveLink={setActiveLink}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;

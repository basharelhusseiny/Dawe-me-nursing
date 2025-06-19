import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <section
      className="relative h-[calc(100vh-71px)] bg-sky-500 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/pexels-thirdman-7659570.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-sky-950/65"></div>
      <div className="relative z-10 container mx-auto h-full flex flex-col justify-center items-center text-white px-5 text-center">
        <h1 className="text-4xl font-bold mb-4">
          رعاية طبية تصلك حتى باب بيتك
        </h1>
        <p className="text-lg mb-2 font-bold">
          <span className="text-sky-500 text-2xl font-bold">داوي</span>{" "}
          <span className="text-green-500 text-2xl font-bold">Me</span> - في قلب كل بيت
        </p>
        <p className="mb-6 text-lg font-semibold">
          فريق طبي متكامل لتقديم خدمات طبية منزلية شاملة وموثوقة لك ولعائلتك.
        </p>
        <div className="flex items-center justify-between gap-5">
          <Link
            href="#services"
            className="font-semibold text-white bg-gradient-to-l from-sky-400 to-sky-800 hover:from-sky-800 hover:to-sky-400 py-2 px-5 rounded-full hover:bg-sky-500 duration-300 transition-colors"
          >
            اكتشف خدماتنا
          </Link>
          <Link
            href="#contact"
            className="font-semibold text-white bg-gradient-to-l from-sky-400 to-sky-800 hover:from-sky-800 hover:to-sky-400 py-2 px-5 rounded-full hover:bg-sky-500 duration-300 transition-colors"
          >
            تواصل معنا
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

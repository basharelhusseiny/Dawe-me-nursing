import Link from "next/link";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative h-[calc(100vh-71px)] bg-sky-500 bg-cover bg-center scroll-mt-18 md:scroll-mt-[71px]"
      style={{ backgroundImage: "url('/images/pexels-thirdman-7659570.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-sky-950/65"></div>
      <div className="relative z-10 container mx-auto h-full flex flex-col justify-center items-center text-white px-5 text-center">
        <h1
          className="text-4xl font-bold mb-6 opacity-0"
          style={{ animation: "fadeDown 0.7s ease-out forwards" }}
        >
          رعاية طبية تصلك حتى باب بيتك
        </h1>

        <p
          className="text-xl font-bold mb-2 opacity-0"
          style={{ animation: "fadeDown 0.7s ease-out 0.2s forwards" }}
        >
          <span className="text-sky-300">
            داوي <span className="text-green-500">Me</span>
          </span>{" "}
          — في قلب كل بيت
        </p>

        <p
          className="mb-2 text-lg font-semibold opacity-0"
          style={{ animation: "fadeDown 0.7s ease-out 0.4s forwards" }}
        >
          فريق طبي متكامل لتقديم خدمات طبية منزلية شاملة وموثوقة لك ولعائلتك.
        </p>

        <h2
          className="text-lg font-semibold mb-6 bg-white/10 px-4 py-2 rounded-full text-yellow-300 shadow opacity-0"
          style={{ animation: "fadeDown 0.7s ease-out 0.6s forwards" }}
        >
          نوصل للمريض خلال 25 دقيقة أو أقل
        </h2>

        <div
          className="flex items-center justify-between gap-5 opacity-0"
          style={{ animation: "fadeUp 0.7s ease-out 0.8s forwards" }}
        >
          <Link
            href="#services"
            className="font-semibold text-white bg-gradient-to-l from-sky-400 to-sky-800 hover:from-sky-800 hover:to-sky-400 py-2 px-5 rounded-full hover:bg-sky-500 duration-300 transition-colors"
          >
            اكتشف خدماتنا
          </Link>
          <Link
            href="#services"
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

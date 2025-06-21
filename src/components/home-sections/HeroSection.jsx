import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative h-[calc(100vh-71px)] bg-sky-500 scroll-mt-18 md:scroll-mt-[71px]"
      itemScope
      itemType="https://schema.org/MedicalOrganization"
    >
      {/* الصورة الخلفية المحسنة */}
      <div className="absolute inset-0">
        <Image
          src="/images/pexels-thirdman-7659570.jpg"
          alt="فريق طبي منزلي يقدم الرعاية الصحية"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-sky-950/65"></div>
      </div>

      {/* البيانات المنظمة المخفية */}
      <div
        itemProp="address"
        itemScope
        itemType="https://schema.org/PostalAddress"
        className="hidden"
      >
        <span itemProp="addressLocality">القاهرة</span>
        <span itemProp="addressRegion">مصر</span>
      </div>

      <div className="relative z-10 container mx-auto h-full flex flex-col justify-center items-center text-white px-5 text-center">
        <h1
          className="text-4xl md:text-5xl font-bold mb-6 opacity-0"
          style={{ animation: "fadeDown 0.7s ease-out forwards" }}
          itemProp="name"
        >
          رعاية طبية تصلك حتى باب بيتك
        </h1>

        <p
          className="text-xl md:text-2xl font-bold mb-2 opacity-0"
          style={{ animation: "fadeDown 0.7s ease-out 0.2s forwards" }}
        >
          <span className="text-sky-300" itemProp="brand">
            داوي <span className="text-green-500">مي</span>
          </span>{" "}
          — في قلب كل بيت
        </p>

        <h2
          className="mb-2 text-lg md:text-xl font-semibold opacity-0"
          style={{ animation: "fadeDown 0.7s ease-out 0.4s forwards" }}
          itemProp="description"
        >
          فريق طبي متكامل لتقديم خدمات طبية منزلية شاملة وموثوقة لك ولعائلتك.
        </h2>

        <p
          className="text-lg font-semibold mb-6 bg-white/10 px-4 py-2 rounded-full text-yellow-300 shadow opacity-0"
          style={{ animation: "fadeDown 0.7s ease-out 0.6s forwards" }}
        >
          نوصل للمريض خلال 25 دقيقة أو أقل
        </p>

        <div
          className="flex flex-wrap justify-center gap-4 opacity-0"
          style={{ animation: "fadeUp 0.7s ease-out 0.8s forwards" }}
        >
          <Link
            href="#services"
            className="font-semibold text-white bg-gradient-to-l from-sky-400 to-sky-800 hover:from-sky-800 hover:to-sky-400 py-3 px-6 rounded-full hover:bg-sky-500 duration-300 transition-colors"
            aria-label="اكتشف خدماتنا الطبية المنزلية"
          >
            اكتشف خدماتنا
          </Link>
          <Link
            href="/contact"
            className="font-semibold text-sky-800 bg-white hover:bg-gray-200 py-3 px-6 rounded-full duration-300 transition-colors"
            aria-label="تواصل مع فريق الرعاية الصحية"
          >
            تواصل معنا
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

import React from "react";
import Image from "next/image";
import { FaEye, FaHandHoldingHeart } from "react-icons/fa";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-gradient-to-b from-white to-sky-200">
      <div className="container mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-sky-800 mb-2">من نحن؟</h2>
          <div className="w-24 h-1 bg-sky-500 mx-auto mb-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <p className="text-lg mb-6 leading-relaxed">
              داوي هو فريق طبي متكامل يقدم خدمات طبية منزلية شاملة، بأيدي أطباء
              وممرضين ومختصين مؤهلين على أعلى مستوى. نسعى لتقديم رعاية صحية
              آمنة، إنسانية، ومهنية بداخل منزلك، لتكون دايمًا مطمئن على صحتك
              وصحة أحبابك.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-10">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-3">
                  <FaEye className="text-sky-600 text-2xl ml-2" />
                  <h3 className="text-xl font-bold text-sky-600">رؤيتنا</h3>
                </div>
                <p>
                  أن نكون الخيار الأول لكل أسرة تبحث عن رعاية طبية منزلية
                  موثوقة، وأن نرتقي بجودة الخدمة الصحية في كل بيت.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-3">
                  <FaHandHoldingHeart className="text-sky-600 text-2xl ml-2" />
                  <h3 className="text-xl font-bold text-sky-600">رسالتنا</h3>
                </div>
                <p>
                  نقدم رعاية صحية متكاملة في المنزل، بلمسة إنسانية، وسرعة
                  استجابة، وجودة مضمونة، لتوفير راحة وسلامة للمريض.
                </p>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-full max-w-md h-80 overflow-hidden rounded-lg shadow-xl">
              <div className="absolute inset-0 bg-sky-900/20 z-10"></div>
              <Image
                src="/images/pexels-pavel-danilyuk-7653084.jpg"
                alt="فريق داوي الطبي"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

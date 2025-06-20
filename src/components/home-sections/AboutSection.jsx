"use client";
import Image from "next/image";
import { FaEye, FaHandHoldingHeart } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const lineVariants = {
    hidden: { opacity: 0, scaleX: 0 },
    visible: {
      opacity: 1,
      scaleX: 1,
      transition: { duration: 0.7, delay: 0.3, ease: "easeOut" }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, delay: 0.4, ease: "easeOut" }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, delay: 0.5, ease: "easeOut" }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.7, 
        delay: custom * 0.2 + 0.6, 
        type: "spring",
        damping: 12
      }
    })
  };

  const iconVariants = {
    initial: { scale: 1 },
    pulse: {
      scale: [1, 1.1, 1],
      transition: { 
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const imageInnerVariants = {
    initial: { scale: 1 },
    animate: {
      scale: 1.1,
      transition: {
        duration: 20,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "linear"
      }
    }
  };

  return (
    <section
      id="about"
      className="py-16 bg-gradient-to-b from-white to-sky-200 scroll-mt-17 md:scroll-mt-[71px]"
      ref={ref}
    >
      <div className="container mx-auto px-5">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl font-bold text-sky-800 mb-2"
            variants={titleVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            من نحن؟
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-sky-500 mx-auto mb-6"
            variants={lineVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          ></motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <motion.p
              className="text-lg mb-6 leading-relaxed"
              variants={textVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              داوي هو فريق طبي متكامل يقدم خدمات طبية منزلية شاملة، بأيدي أطباء
              وممرضين ومختصين مؤهلين على أعلى مستوى. نسعى لتقديم رعاية صحية
              آمنة، إنسانية، ومهنية بداخل منزلك، لتكون دايمًا مطمئن على صحتك
              وصحة أحبابك.
            </motion.p>

            <div className="grid md:grid-cols-2 gap-6 mt-10">
              <motion.div
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                variants={cardVariants}
                custom={1}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                whileHover={{
                  y: -10,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
              >
                <div className="flex items-center mb-3">
                  <motion.div
                    variants={iconVariants}
                    initial="initial"
                    animate="pulse"
                  >
                    <FaEye className="text-sky-600 text-2xl ml-2" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-sky-600">رؤيتنا</h3>
                </div>
                <p>
                  أن نكون الخيار الأول لكل أسرة تبحث عن رعاية طبية منزلية
                  موثوقة، وأن نرتقي بجودة الخدمة الصحية في كل بيت.
                </p>
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                variants={cardVariants}
                custom={2}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                whileHover={{
                  y: -10,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
              >
                <div className="flex items-center mb-3">
                  <motion.div
                    variants={iconVariants}
                    initial="initial"
                    animate="pulse"
                  >
                    <FaHandHoldingHeart className="text-sky-600 text-2xl ml-2" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-sky-600">رسالتنا</h3>
                </div>
                <p>
                  نقدم رعاية صحية متكاملة في المنزل، بلمسة إنسانية، وسرعة
                  استجابة، وجودة مضمونة، لتوفير راحة وسلامة للمريض.
                </p>
              </motion.div>
            </div>
          </div>

          <motion.div
            className="order-1 md:order-2 flex justify-center"
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="relative w-full max-w-md h-80 overflow-hidden rounded-lg shadow-xl">
              <div className="absolute inset-0 bg-sky-900/20 z-10"></div>
              <motion.div
                className="w-full h-full"
                variants={imageInnerVariants}
                initial="initial"
                animate="animate"
              >
                <Image
                  src="/images/pexels-pavel-danilyuk-7653084.jpg"
                  alt="فريق داوي الطبي"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

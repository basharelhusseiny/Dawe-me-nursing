"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { FaQuoteRight, FaStar } from "react-icons/fa";

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const testimonials = [
    {
      id: 1,
      name: "أحمد محمود",
      role: "مريض سكري",
      image: "/images/user4.png",
      quote:
        "الفريق الطبي وصل في الوقت المحدد، وكان محترف جدًا. أشعر بالامتنان للرعاية المنزلية الممتازة.",
      rating: 5,
    },
    {
      id: 2,
      name: "سارة أحمد",
      role: "أم لطفلين",
      image: "/images/user1.png",
      quote:
        "خدمة داوي المنزلية كانت حلاً مثاليًا. الطبيب كان لطيفًا جدًا مع طفلي وشخص حالته بدقة.",
      rating: 5,
    },
    {
      id: 3,
      name: "محمد علي",
      role: "كبير في السن",
      image: "/images/user5.png",
      quote:
        "داوي وفرت لي رعاية منزلية ممتازة. الممرضة كانت محترفة وحنونة، وأشعر بالأمان مع خدماتهم.",
      rating: 4,
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const lineVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: { duration: 0.6, delay: 0.2 },
    },
  };

  const starVariants = {
    hidden: { opacity: 0 },
    visible: (custom) => ({
      opacity: 1,
      transition: { delay: custom * 0.1 },
    }),
  };

  return (
    <section id="testimonials" className="py-12 bg-white" ref={ref}>
      <div className="container mx-auto px-5">
        <div className="text-center mb-8">
          <motion.h2
            className="text-3xl font-bold text-sky-800 mb-2"
            variants={titleVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            آراء عملائنا
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-sky-500 mx-auto mb-4"
            variants={lineVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          ></motion.div>
          <motion.p
            className="max-w-2xl mx-auto text-gray-600"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            نفخر بثقة عملائنا ونسعد بمشاركة تجاربهم مع خدماتنا
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="bg-sky-50 rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow duration-300"
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="flex items-center mb-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden ml-3">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-sky-800">{testimonial.name}</h3>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
                <div className="mr-auto">
                  <FaQuoteRight className="text-sky-300 opacity-50" />
                </div>
              </div>

              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <motion.div key={i} variants={starVariants} custom={i}>
                    <FaStar
                      className={`${
                        i < testimonial.rating
                          ? "text-yellow-400"
                          : "text-gray-300"
                      } text-sm`}
                    />
                  </motion.div>
                ))}
              </div>

              <motion.p
                className="text-gray-600 text-sm"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                "{testimonial.quote}"
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

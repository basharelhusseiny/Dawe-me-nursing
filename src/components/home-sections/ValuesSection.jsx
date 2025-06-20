"use client";
import {
  FaHeartbeat,
  FaHandshake,
  FaAward,
  FaUserShield,
  FaClock,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const ValuesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const values = [
    {
      id: 1,
      icon: <FaHeartbeat className="text-4xl text-sky-600 mb-3" />,
      title: "الرحمة",
      description: "في داوي، نؤمن بأن كل لمسة طبية يجب أن تكون إنسانية.",
    },
    {
      id: 2,
      icon: <FaHandshake className="text-4xl text-sky-600 mb-3" />,
      title: "الثقة",
      description: "نبني علاقة ثقة دائمة مع مرضانا.",
    },
    {
      id: 3,
      icon: <FaAward className="text-4xl text-sky-600 mb-3" />,
      title: "الجودة",
      description: "نلتزم بمعايير طبية دقيقة في كل خدمة نقدمها.",
    },
    {
      id: 4,
      icon: <FaUserShield className="text-4xl text-sky-600 mb-3" />,
      title: "الخصوصية",
      description: "نضمن سرية بياناتك واحترام خصوصيتك دائمًا.",
    },
    {
      id: 5,
      icon: <FaClock className="text-4xl text-sky-600 mb-3" />,
      title: "الاستجابة السريعة",
      description: "نوصلك بخدمة طبية عند باب بيتك، وقت ما تحتاجها.",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
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
      transition: {
        duration: 0.6,
      },
    },
  };

  const lineVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: 0.2,
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 5,
        stiffness: 100,
      },
    },
    hover: {
      scale: 1.2,
      rotate: [0, 10, -10, 0],
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="values"
      className="py-16 bg-gradient-to-b from-sky-200 to-white"
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
            قيمنا
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-sky-500 mx-auto mb-6"
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
            نلتزم بمجموعة من القيم الأساسية التي توجه عملنا وتعاملنا مع المرضى
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {values.map((value, index) => (
            <motion.div
              key={value.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all hover:translate-y-[-5px] text-center border-t-4 border-sky-500"
              variants={itemVariants}
              whileHover={{
                y: -10,
                boxShadow:
                  "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
            >
              <motion.div
                className="flex justify-center"
                variants={iconVariants}
                whileHover="hover"
              >
                {value.icon}
              </motion.div>
              <motion.h3
                className="text-xl font-bold text-sky-700 mb-2"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: index * 0.1 + 0.5, duration: 0.3 }}
              >
                {value.title}
              </motion.h3>
              <motion.p
                className="text-gray-700"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: index * 0.1 + 0.6, duration: 0.3 }}
              >
                {value.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ValuesSection;

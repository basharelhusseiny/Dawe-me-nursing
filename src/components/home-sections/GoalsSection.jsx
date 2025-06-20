"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaCheckCircle,
  FaStarOfLife,
  FaHandHoldingMedical,
  FaHospital,
  FaHome,
} from "react-icons/fa";

const GoalsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const goals = [
    {
      id: 2,
      icon: <FaStarOfLife className="text-4xl text-sky-600 mb-3" />,
      title: "أعلى جودة",
      description: "توفير خدمات طبية بأعلى جودة واحترافية.",
    },
    {
      id: 3,
      icon: <FaHandHoldingMedical className="text-4xl text-sky-600 mb-3" />,
      title: "تسهيل الحياة",
      description: "تسهيل حياة المرضى وأسرهم.",
    },
    {
      id: 4,
      icon: <FaHospital className="text-4xl text-sky-600 mb-3" />,
      title: "تقليل العناء",
      description: "تقليل الحاجة للذهاب إلى المستشفيات.",
    },
    {
      id: 5,
      icon: <FaHome className="text-4xl text-sky-600 mb-3" />,
      title: "بيئة آمنة",
      description: "دعم تعافي المرضى في بيئة مريحة وآمنة.",
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

  return (
    <section id="goals" className="py-16 bg-white overflow-hidden" ref={ref}>
      <div className="container mx-auto px-5">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold text-sky-800 mb-2">أهدافنا</h2>
          <div className="w-24 h-1 bg-sky-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            نسعى لتحقيق مجموعة من الأهداف التي تضمن تقديم أفضل رعاية صحية منزلية
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {goals.map((goal, index) => (
            <motion.div
              key={goal.id}
              className="bg-sky-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all text-center"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={
                isInView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }
              }
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                type: "spring",
                damping: 12,
              }}
              whileHover={{
                y: -10,
                boxShadow:
                  "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
            >
              <motion.div
                className="flex justify-center"
                animate={
                  isInView
                    ? {
                        rotateY: [0, 360],
                        transition: {
                          delay: index * 0.15 + 0.3,
                          duration: 1,
                          ease: "easeInOut",
                        },
                      }
                    : {}
                }
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.3 },
                }}
              >
                {goal.icon}
              </motion.div>
              <motion.h3
                className="text-xl font-bold text-sky-700 mb-2"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: index * 0.15 + 0.5, duration: 0.3 }}
              >
                {goal.title}
              </motion.h3>
              <motion.p
                className="text-gray-700"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: index * 0.15 + 0.6, duration: 0.3 }}
              >
                {goal.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GoalsSection;

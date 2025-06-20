"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const socialVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: custom => ({
      scale: 1,
      opacity: 1,
      transition: { 
        delay: custom * 0.1,
        type: "spring",
        stiffness: 200,
        damping: 10
      }
    }),
    hover: {
      scale: 1.2,
      transition: { duration: 0.2 }
    }
  };

  const copyrightVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 0.8, duration: 0.5 }
    }
  };

  return (
    <footer className="bg-sky-900 text-white pt-12 pb-6" ref={ref}>
      <div className="container mx-auto px-5">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Logo and About */}
          <motion.div variants={itemVariants}>
            <div className="mb-4">
              <motion.div variants={logoVariants}>
                <Image
                  src="/images/logo.jpg"
                  alt="داوي لوجو"
                  width={120}
                  height={60}
                  className="mb-4"
                />
              </motion.div>
              <motion.p 
                className="text-sky-100 mb-4"
                variants={itemVariants}
              >
                رعايتكم مسؤوليتنا، وصحتكم أولويتنا. نقدم خدمات طبية منزلية
                موثوقة منذ 2019.
              </motion.p>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <motion.h3 
              className="text-xl font-bold mb-4 border-r-4 border-sky-400 pr-3"
              variants={itemVariants}
            >
              روابط سريعة
            </motion.h3>
            <motion.ul className="space-y-2" variants={containerVariants}>
              <motion.li variants={itemVariants}>
                <Link
                  href="#about"
                  className="text-sky-100 hover:text-sky-300 transition-colors"
                >
                  من نحن
                </Link>
              </motion.li>
              <motion.li variants={itemVariants}>
                <Link
                  href="#services"
                  className="text-sky-100 hover:text-sky-300 transition-colors"
                >
                  خدماتنا
                </Link>
              </motion.li>
              <motion.li variants={itemVariants}>
                <Link
                  href="#values"
                  className="text-sky-100 hover:text-sky-300 transition-colors"
                >
                  قيمنا
                </Link>
              </motion.li>
              <motion.li variants={itemVariants}>
                <Link
                  href="#contact"
                  className="text-sky-100 hover:text-sky-300 transition-colors"
                >
                  تواصل معنا
                </Link>
              </motion.li>
            </motion.ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <motion.h3 
              className="text-xl font-bold mb-4 border-r-4 border-sky-400 pr-3"
              variants={itemVariants}
            >
              تواصل
            </motion.h3>
            <motion.ul className="space-y-3" variants={containerVariants}>
              <motion.li className="flex items-center" variants={itemVariants}>
                <FaPhone className="text-sky-400 ml-2" />
                <div className="flex flex-col ">
                  <span className="text-sky-100">0106-640-4815</span>
                  <span className="text-sky-100">0112-420-2942</span>
                </div>
              </motion.li>
              <motion.li className="flex items-center" variants={itemVariants}>
                <FaEnvelope className="text-sky-400 ml-2" />
                <span className="text-sky-100">
                  hossam.mahmoud.395@gmail.com
                </span>
              </motion.li>
              <motion.li className="flex items-center" variants={itemVariants}>
                <FaMapMarkerAlt className="text-sky-400 ml-2" />
                <span className="text-sky-100">القاهرة الكبرى، مصر</span>
              </motion.li>
            </motion.ul>
          </motion.div>

          {/* Social Media */}
          <motion.div variants={itemVariants}>
            <motion.h3 
              className="text-xl font-bold mb-4 border-r-4 border-sky-400 pr-3"
              variants={itemVariants}
            >
              تابعنا
            </motion.h3>
            <motion.div 
              className="flex space-x-4"
              variants={containerVariants}
            >
              <motion.div
                variants={socialVariants}
                custom={0}
                whileHover="hover"
              >
                <Link
                  href="https://www.facebook.com/share/1FJwy3PauS/"
                  target="_blank"
                  className="bg-sky-800 hover:bg-sky-600 p-2 rounded-full transition-colors inline-block"
                >
                  <FaFacebook className="text-white text-xl" />
                </Link>
              </motion.div>
              <motion.div
                variants={socialVariants}
                custom={1}
                whileHover="hover"
              >
                <Link
                  href="#"
                  className="bg-sky-800 hover:bg-sky-600 p-2 rounded-full transition-colors inline-block"
                >
                  <FaTwitter className="text-white text-xl" />
                </Link>
              </motion.div>
              <motion.div
                variants={socialVariants}
                custom={2}
                whileHover="hover"
              >
                <Link
                  href="#"
                  className="bg-sky-800 hover:bg-sky-600 p-2 rounded-full transition-colors inline-block"
                >
                  <FaInstagram className="text-white text-xl" />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div 
          className="border-t border-sky-800 mt-8 pt-6 text-center"
          variants={copyrightVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <p className="text-sky-200">
            حقوق النشر © 2025 - جميع الحقوق محفوظة لـ داوي للخدمات الطبية
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

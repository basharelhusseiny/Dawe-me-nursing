"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
    }, 1500);
  };

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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  return (
    <div className="py-16 bg-gradient-to-b from-white to-sky-100">
      <div className="container mx-auto px-5">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-3xl font-bold text-sky-800 mb-2">تواصل معنا</h1>
          <div className="w-24 h-1 bg-sky-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            نحن هنا للإجابة على استفساراتك وتقديم المساعدة. يمكنك التواصل معنا من خلال أي من الوسائل التالية أو ملء النموذج أدناه.
          </p>
        </motion.div>

        {/* Form and Image in 2 columns on desktop */}
        <div className="grid md:grid-cols-2 gap-10 items-start mb-10">
          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-lg"
              variants={itemVariants}
            >
              <h2 className="text-2xl font-bold text-sky-700 mb-6">أرسل رسالة</h2>
              
              {submitSuccess && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                  تم إرسال رسالتك بنجاح! سنتواصل معك قريبًا.
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 mb-2">الاسم</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 mb-2">البريد الإلكتروني</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-gray-700 mb-2">رقم الهاتف</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 mb-2">الرسالة</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-sky-500 to-sky-700 hover:from-sky-600 hover:to-sky-800 text-white font-bold py-3 px-4 rounded-md transition-colors duration-300 flex justify-center items-center"
                >
                  {isSubmitting ? (
                    <span className="inline-block h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin ml-2"></span>
                  ) : null}
                  {isSubmitting ? 'جاري الإرسال...' : 'إرسال الرسالة'}
                </button>
              </form>
            </motion.div>
          </motion.div>
          
          {/* Image */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="relative h-[500px] w-full rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/pexels-thirdman-7659570.jpg"
                alt="فريق داوي الطبي"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sky-900/70 to-transparent"></div>
              <div className="absolute bottom-0 right-0 p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">نصلك أينما كنت</h3>
                <p className="mb-4">خدمات طبية منزلية على مدار الساعة</p>
                <a 
                  href="https://wa.me/201062892767" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full transition-colors"
                >
                  <FaWhatsapp className="ml-2" />
                  تواصل عبر واتساب
                </a>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Contact Info below both form and image */}
        <motion.div 
          className="bg-white p-8 rounded-lg shadow-lg"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-2xl font-bold text-sky-700 mb-6">معلومات التواصل</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div 
              className="flex items-start"
              variants={itemVariants}
            >
              <div className="bg-sky-100 p-3 rounded-full ml-4 mt-1">
                <FaPhone className="text-sky-600" />
              </div>
              <div>
                <p className="font-bold text-gray-700">اتصل بنا</p>
                <p className="text-gray-600">0106-640-4815</p>
                <p className="text-gray-600">0112-420-2942</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex items-start"
              variants={itemVariants}
            >
              <div className="bg-sky-100 p-3 rounded-full ml-4 mt-1">
                <FaWhatsapp className="text-sky-600" />
              </div>
              <div>
                <p className="font-bold text-gray-700">واتساب</p>
                <p className="text-gray-600">201062892767</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex items-start"
              variants={itemVariants}
            >
              <div className="bg-sky-100 p-3 rounded-full ml-4 mt-1">
                <FaEnvelope className="text-sky-600" />
              </div>
              <div>
                <p className="font-bold text-gray-700">البريد الإلكتروني</p>
                <p className="text-gray-600">hossam.mahmoud.395@gmail.com</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex items-start"
              variants={itemVariants}
            >
              <div className="bg-sky-100 p-3 rounded-full ml-4 mt-1">
                <FaMapMarkerAlt className="text-sky-600" />
              </div>
              <div>
                <p className="font-bold text-gray-700">العنوان</p>
                <p className="text-gray-600">القاهرة الكبرى، مصر</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact

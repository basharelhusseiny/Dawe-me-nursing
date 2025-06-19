import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-sky-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div>
            <div className="mb-4">
              <Image
                src="/images/logo.jpg"
                alt="داوي لوجو"
                width={120}
                height={60}
                className="mb-4"
              />
              <p className="text-sky-100 mb-4">
                رعايتكم مسؤوليتنا، وصحتكم أولويتنا. نقدم خدمات طبية منزلية
                موثوقة منذ 2024.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-r-4 border-sky-400 pr-3">
              روابط سريعة
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#about"
                  className="text-sky-100 hover:text-sky-300 transition-colors"
                >
                  من نحن
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-sky-100 hover:text-sky-300 transition-colors"
                >
                  خدماتنا
                </Link>
              </li>
              <li>
                <Link
                  href="#values"
                  className="text-sky-100 hover:text-sky-300 transition-colors"
                >
                  قيمنا
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-sky-100 hover:text-sky-300 transition-colors"
                >
                  تواصل معنا
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-r-4 border-sky-400 pr-3">
              تواصل
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <FaPhone className="text-sky-400 ml-2" />
                <span className="text-sky-100">0101-491-2074</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-sky-400 ml-2" />
                <span className="text-sky-100">hossam.mahmoud.395@gmail.com</span>
              </li>
              <li className="flex items-center">
                <FaMapMarkerAlt className="text-sky-400 ml-2" />
                <span className="text-sky-100">القاهرة الكبرى، مصر</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-r-4 border-sky-400 pr-3">
              تابعنا
            </h3>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="bg-sky-800 hover:bg-sky-600 p-2 rounded-full transition-colors"
              >
                <FaFacebook className="text-white text-xl" />
              </Link>
              <Link
                href="#"
                className="bg-sky-800 hover:bg-sky-600 p-2 rounded-full transition-colors"
              >
                <FaTwitter className="text-white text-xl" />
              </Link>
              <Link
                href="#"
                className="bg-sky-800 hover:bg-sky-600 p-2 rounded-full transition-colors"
              >
                <FaInstagram className="text-white text-xl" />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-sky-800 mt-8 pt-6 text-center">
          <p className="text-sky-200">
            حقوق النشر © 2025 - جميع الحقوق محفوظة لـ داوي للخدمات الطبية
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

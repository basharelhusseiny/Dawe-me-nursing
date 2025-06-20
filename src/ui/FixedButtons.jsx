import Link from "next/link";
import { FaWhatsapp, FaFacebookF, FaPhoneAlt } from "react-icons/fa";

const FixedButtons = () => {
  return (
    <div className="fixed bottom-5 left-5 flex flex-col gap-2 z-50">
      {/* زر واتساب */}
      <Link
        href="https://wa.me/201062892767"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition"
        aria-label="WhatsApp"
      >
        <FaWhatsapp size={20} />
      </Link>

      {/* زر فيسبوك */}
      <Link
        href="https://www.facebook.com/yourpage"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition"
        aria-label="Facebook"
      >
        <FaFacebookF size={20} />
      </Link>

      {/* زر الاتصال */}
      <Link
        href="tel:01066404815" // ← غيّر الرقم هنا
        className="bg-sky-600 text-white p-3 rounded-full shadow-lg hover:bg-sky-700 transition"
        aria-label="Call"
      >
        <FaPhoneAlt size={20} />
      </Link>
    </div>
  );
};

export default FixedButtons;

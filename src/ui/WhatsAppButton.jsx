"use client";

import Link from "next/link";

const WhatsAppButton = () => {
  const phone = "201062892767";
  const message = "مرحبًا، أود حجز موعد مع داوي Me";
  const encodedMessage = encodeURIComponent(message);
  const url = `https://api.whatsapp.com/send?phone=${phone}&text=${encodedMessage}`;

  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold  text-white bg-gradient-to-l from-sky-400 to-sky-800 hover:from-sky-800 hover:to-sky-400 text-[17px] sm:text-lg py-2 px-3 sm:py-2 sm:px-5 rounded-full hover:bg-sky-500 duration-300 transition-colors"
    >
      أطب زيارة الأن{" "}
    </Link>
  );
};

export default WhatsAppButton;

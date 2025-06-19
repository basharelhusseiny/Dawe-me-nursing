"use client";

import Link from "next/link";

const WhatsAppButton = () => {
  const phone = "201014912074";
  const message = "مرحبًا، أود حجز موعد مع داوي Me";
  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/${phone}?text=${encodedMessage}`;

  return (
    <Link href={url} target="_blank" rel="noopener noreferrer" className="font-semibold text-white bg-gradient-to-l from-sky-400 to-sky-800 hover:from-sky-800 hover:to-sky-400 py-2 px-5 rounded-full hover:bg-sky-500 duration-300 transition-colors">
      احجز موعدًا
    </Link>
  );
};

export default WhatsAppButton;

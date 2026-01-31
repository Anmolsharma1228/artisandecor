"use client";
import { FaWhatsapp } from "react-icons/fa";
import generateProductListMessage from "./utils/Whatsapp";

const phone = "919711119771";
const message = generateProductListMessage();

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center
      w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg
      hover:scale-110 transition"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}

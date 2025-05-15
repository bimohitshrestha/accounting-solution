import { useAppSelector } from "@/hooks/useAppSelector";
import React, { useState, useRef, useEffect } from "react";
import { FaGlobe, FaMobileAlt, FaWhatsapp } from "react-icons/fa";

const WhatsAppOptions = ({
  phoneNumber,
  message,
}: {
  phoneNumber: string;
  message: string;
}) => {
  const [showOptions, setShowOptions] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const { OrganizationList } = useAppSelector((state) => state.service);
  const organization = OrganizationList[0];

  const encodedMsg = encodeURIComponent(message);
  const appUrl = `https://wa.me/977${phoneNumber}?text=${encodedMsg}`;
  const webUrl = `https://web.whatsapp.com/send?phone=977${phoneNumber}&text=${encodedMsg}`;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowOptions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLinkClick = (url: string) => {
    setShowOptions(false);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className="relative w-full flex items-center justify-center max-w-xs sm:max-w-sm md:max-w-md  mb-2"
      ref={dropdownRef}
    >
      <button
        onClick={() => setShowOptions((prev) => !prev)}
        className="w-full flex items-center sm:justify-start gap-4 text-black cursor-pointer"
      >
        <FaWhatsapp className="text-green-500 w-5 h-5 sm:w-6 sm:h-6" />
        <span>{phoneNumber}</span>
      </button>

      {showOptions && (
        <div className="absolute mt-2 right-0 w-full sm:w-64 bg-white border border-gray-200 rounded-md shadow-xl z-50 animate-fade-in-down">
          <button
            onClick={() => handleLinkClick(appUrl)}
            className="w-full text-left flex items-center px-4 py-3 text-sm hover:bg-gray-100 transition-colors"
          >
            <FaMobileAlt className="mr-3 text-green-500" />
            <span>Open in WhatsApp App</span>
          </button>
          <button
            onClick={() => handleLinkClick(webUrl)}
            className="w-full text-left flex items-center px-4 py-3 text-sm hover:bg-gray-100 transition-colors"
          >
            <FaGlobe className="mr-3 text-green-500" />
            <span>Open in WhatsApp Web</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default WhatsAppOptions;

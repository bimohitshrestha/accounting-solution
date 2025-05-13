"use client";
import ButtonText from "@/component/common/button/ButtonText";
import ParagraphHeader from "@/component/header/ParagraphHeader";
import Link from "next/link";
import { useState } from "react";
import { BsInstagram, BsYoutube } from "react-icons/bs";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const IMAGES_PER_PAGE = 6;

const socialLinks = [
  {
    href: "https://www.instagram.com/",
    icon: (
      <BsInstagram className="text-level w-6 h-6 hover:scale-110 transition-transform" />
    ),
    label: "Instagram",
  },
  {
    href: "https://www.facebook.com/",
    icon: (
      <FaFacebook className="text-level w-6 h-6 hover:scale-110 transition-transform" />
    ),
    label: "Facebook",
  },
  {
    href: "https://www.linkedin.com/",
    icon: (
      <FaLinkedin className="text-level w-6 h-6 hover:scale-110 transition-transform" />
    ),
    label: "LinkedIn",
  },
  {
    href: "https://www.youtube.com/",
    icon: (
      <BsYoutube className="text-level w-6 h-6 hover:scale-110 transition-transform" />
    ),
    label: "YouTube",
  },
];

const images = [
  "/accountant.jpg",
  "/accouting.jpg",
  "/accountant.jpg",
  "/contact.png",
  "/accountant.jpg",
  "/accouting.jpg",

  "/accouting.jpg",
  "/accountant.jpg",
  "/accouting.jpg",
  "/accountant.jpg",
  "/accouting.jpg",
];

const KeepingUp = () => {
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    const newIndex = startIndex + IMAGES_PER_PAGE;
    if (newIndex < images.length) {
      setStartIndex(newIndex);
    }
  };

  const handlePrev = () => {
    const newIndex = startIndex - IMAGES_PER_PAGE;
    if (newIndex >= 0) {
      setStartIndex(newIndex);
    }
  };

  return (
    <div className="bg-gray-100 text-center px-4 py-8 mb-12">
      <ParagraphHeader title="Keeping Up With CM" containerClassName="" />

      <div className="flex justify-center gap-3 text-blue-700 text-3xl mb-6">
        {socialLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
          >
            <div className="hover:scale-110 transition-transform">
              {link.icon}
            </div>
          </Link>
        ))}
      </div>

      <div className="text-gray-800 mb-10">
        <div className="flex items-center justify-center gap-3">
          <img src="/blood.png" alt="TAS Logo" className="w-10 h-10" />
          <div className="text-left">
            <h2 className="font-semibold text-lg">CM Chartered Management</h2>
            <p className="text-sm text-gray-600">@Chartered@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="relative flex items-center justify-center min-w-full flex-wrap gap-0">
        {images
          .slice(startIndex, startIndex + IMAGES_PER_PAGE)
          .map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Gallery ${idx}`}
              className="w-56 h-64 object-cover border border-gray-300"
            />
          ))}

        {startIndex > 0 && (
          <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-70 text-white hover:bg-opacity-90 rounded-full shadow-md cursor-pointer"
          >
            <GrFormPrevious className="w-6 h-6" />
          </button>
        )}

        {startIndex + IMAGES_PER_PAGE < images.length && (
          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-70 text-white hover:bg-opacity-90 rounded-full shadow-md cursor-pointer"
          >
            <GrFormNext className="w-6 h-6" />
          </button>
        )}
      </div>

      <div className="flex items-center justify-center mt-6">
        <Link href="https://www.instagram.com/" target="_blank">
          <ButtonText
            title="Follow Us on Instagram"
            icon={<FaInstagram />}
            requiredIcon
          />
        </Link>
      </div>
    </div>
  );
};

export default KeepingUp;

"use client";

import ButtonText from "@/component/common/button/ButtonText";
import ParagraphHeader from "@/component/header/ParagraphHeader";
import Image from "next/image";
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
    <div className="bg-gray-100 px-4 py-8 mb-12">
      <ParagraphHeader title="Keeping Up With CM" containerClassName="" />

      <div className="flex flex-wrap justify-center gap-4 text-blue-700 text-2xl mb-6">
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

      {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-gray-800 mb-10 text-center sm:text-left">
        <img src="/blood.png" alt="TAS Logo" className="w-10 h-10" />
        <div>
          <h2 className="font-semibold text-lg">CM Chartered Management</h2>
          <p className="text-sm text-gray-600">@Chartered@gmail.com</p>
        </div>
      </div> */}

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-gray-800 mb-10 text-center sm:text-left">
        <Image src="/blood.png" alt="TAS Logo" width={40} height={40} />
        <div>
          <h2 className="font-semibold text-lg">CM Chartered Management</h2>
          <p className="text-sm text-gray-600">@Chartered@gmail.com</p>
        </div>
      </div>

      <div className="relative flex items-center justify-center">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {images
            .slice(startIndex, startIndex + IMAGES_PER_PAGE)
            .map((img, idx) => (
              // <img
              //   key={idx}
              //   src={img}
              //   alt={`Gallery ${idx}`}
              //   className="w-full h-48 object-cover border border-gray-300"
              // />
              <Image
                key={idx}
                src={img}
                alt={`Gallery ${idx}`}
                width={350}
                height={50}
                objectFit="cover"
              />
            ))}
        </div>

        {startIndex > 0 && (
          <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-70 text-white hover:bg-opacity-90 rounded-full shadow-md cursor-pointer p-2"
          >
            <GrFormPrevious className="w-6 h-6" />
          </button>
        )}

        {startIndex + IMAGES_PER_PAGE < images.length && (
          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-70 text-white hover:bg-opacity-90 rounded-full shadow-md cursor-pointer p-2"
          >
            <GrFormNext className="w-6 h-6" />
          </button>
        )}
      </div>

      <div className="flex items-center justify-center mt-6">
        {/* <Link href="https://www.instagram.com/" target="_blank"> */}
        <ButtonText
          link="https://www.instagram.com/"
          title="Follow Us on Instagram"
          icon={<FaInstagram />}
          requiredIcon
        />
        {/* </Link> */}
      </div>
    </div>
  );
};

export default KeepingUp;

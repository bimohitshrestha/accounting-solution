import ImageCarousel from "@/component/carousal/ImageCarousal";
import ParagraphHeader from "@/component/header/ParagraphHeader";
import Link from "next/link";
import React from "react";
import { BsInstagram, BsYoutube } from "react-icons/bs";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

const socialLinks = [
  {
    href: "https://www.instagram.com/",
    icon: (
      <BsInstagram className="text-rose-600 w-8 h-8 hover:scale-110 transition-transform" />
    ),
    label: "Instagram",
  },
  {
    href: "https://www.facebook.com/",
    icon: (
      <FaFacebook className="text-blue-600 w-8 h-8 hover:scale-110 transition-transform" />
    ),
    label: "Facebook",
  },
  {
    href: "https://www.linkedin.com/",
    icon: (
      <FaLinkedin className="text-blue-900 w-8 h-8 hover:scale-110 transition-transform" />
    ),
    label: "LinkedIn",
  },
  {
    href: "https://www.youtube.com/",
    icon: (
      <BsYoutube className="text-rose-500 w-8 h-8 hover:scale-110 transition-transform" />
    ),
    label: "YouTube",
  },
];

const KeepingUp = () => {
  return (
    <div className="bg-slate-200">
      <main className="container mx-auto px-4 py-10">
        <ParagraphHeader title="Keeping Up With CM" containerClassName="" />

        <div className="flex flex-wrap justify-center gap-6 mt-6">
          {socialLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
            >
              {link.icon}
            </Link>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
          <img
            src="/file.svg"
            alt="Company Logo or Document Icon"
            className="w-10 h-10"
          />
          <div className="text-center sm:text-left">
            <a
              href="https://audit-3c9.pages.dev/"
              target="_blank"
              className="text-black font-medium hover:underline"
            >
              Chartered Accountant - Accountants Bidhur
            </a>
            <p className="text-base text-gray-500">chartered2078@gmail.com</p>
          </div>
        </div>
        <ImageCarousel />
      </main>
    </div>
  );
};

export default KeepingUp;

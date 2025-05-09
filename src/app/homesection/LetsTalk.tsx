import React from "react";

import FormInput from "@/component/form/FormInput";
import LinkButton from "@/component/common/button/LinkButton";
import ParagraphHeader from "@/component/header/ParagraphHeader";
import { FaFacebook, FaLinkedin, FaPhone } from "react-icons/fa";
import { BiLocationPlus } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { BsInstagram, BsYoutube } from "react-icons/bs";
import ContactDetails from "@/component/details/ContactDetails";

const socialLinks = [
  {
    href: "https://www.whatsapp.com/",
    icon: (
      <FaPhone className="text-green-600 w-8 h-8 hover:scale-110 transition-transform" />
    ),
    value: "98989898",
  },
  {
    href: "https://www.whatsapp.com/",
    icon: (
      <BiLocationPlus className="text-blue-600 w-8 h-8 hover:scale-110 transition-transform" />
    ),
    value: "Kathmandu, Nepal",
  },
  {
    href: "https://www.whatsapp.com/",
    icon: (
      <MdEmail className="text-rose-500 w-8 h-8 hover:scale-110 transition-transform" />
    ),
    value: "chartered2078@gmail.com",
  },
];

const social = [
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

const LetsTalk: React.FC = () => {
  return (
    <div className="max-w-lvw mx-auto border-t-2 border-black mb-6">
      <main className="container mx-auto px-4 py-8">
        <ParagraphHeader title={`Let's Talk Business`} />
        <div className="w-full flex flex-col md:flex-row items-start justify-center gap-5">
          <ContactDetails socialLinks={socialLinks} social={social} />

          <div className="w-full md:w-1/2">
            <FormInput />
          </div>
        </div>
      </main>
    </div>
  );
};

export default LetsTalk;

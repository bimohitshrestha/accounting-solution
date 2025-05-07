import LinkButton from "@/component/common/button/LinkButton";
import InputField from "@/component/field/InputField";
import FormInput from "@/component/form/FormInput";
import ParagraphHeader from "@/component/header/ParagraphHeader";
import Link from "next/link";
import React from "react";
import { BiCalendar, BiLocationPlus, BiPhone } from "react-icons/bi";
import { BsInstagram, BsYoutube } from "react-icons/bs";
import { FaFacebook, FaLinkedin, FaPhone } from "react-icons/fa";
import { MdEmail, MdOutlinePhoneInTalk } from "react-icons/md";

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
const LetsTalk = () => {
  return (
    <div className="max-w-lvw mx-auto border-t-2 border-black mb-6">
      <main className="container mx-auto px-4 py-8">
        <ParagraphHeader title={`Let's Talk Business`} />
        <div className="w-full flex flex-col md:flex-row items-start justify-center gap-5">
          <div className="w-full md:w-1/2 flex flex-col items-start justify-start m-2 md:mx-10">
            <h5 className="text-primary capitalize text-2xl font-semibold mb-6">
              Chartered
            </h5>
            {socialLinks.map((data, index) => (
              <div
                className="flex items-start gap-4 text-lg justify-center mb-2"
                key={index}
              >
                {data.icon}
                <span>{data.value}</span>
              </div>
            ))}
            <div className="flex flex-wrap justify-center gap-3 mt-15">
              {social.map((link) => (
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

            <div className="flex flex-col items-center justify-center gap-7 mt-8">
              <LinkButton
                title="Full Contact List"
                link="https://www.facebook.com/"
                icon={<MdOutlinePhoneInTalk size={24} />}
              />

              <LinkButton
                link="#"
                title="Make an Appointment"
                icon={<BiCalendar size={24} />}
              />
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <FormInput />
          </div>
        </div>
      </main>
    </div>
  );
};

export default LetsTalk;

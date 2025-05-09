import ImageHeader from "@/component/backgroundImageHeader/ImageHeader";
import ContactDetails from "@/component/details/ContactDetails";
import FormInput from "@/component/form/FormInput";
import React from "react";
import { BiLocationPlus } from "react-icons/bi";
import { BsInstagram, BsYoutube } from "react-icons/bs";
import { FaFacebook, FaLinkedin, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import HereForYou from "../homesection/HereForYour";
import OurTeam from "@/component/card/OurTeam";

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

const Page = () => {
  return (
    <div className="bg-gray-100 min-h-screen pb-12 px-10">
      <ImageHeader title="Contact Us" image="/contact.png" />
      <div className="w-full flex gap-4 items-start mt-8">
        <div className="w-1/3 flex flex-col   gap-6 text-gray-900 text-lg font-normal max-w-max">
          <p>
            We are a boutique Accounting and Bookkeeping Firm located in the
            Eastern Suburbs in the Yarra Ranges, servicing all areas. With our
            clients based along the Mornington Peninsula to the Western Suburbs
            and even interstate we tailor our service to suit your business.
          </p>
          <p>
            With over 25 years experience within the Accounting and Bookkeeping
            field your accounts could not be in better hands.
          </p>
          <p>
            Learn more about how we can offer the best accounting services for
            your business. Our Team has over 25 years of experience in all areas
            of accounting.
          </p>
        </div>
        <div className="w-full flex items-start justify-center text-yellow-400">
          <ContactDetails socialLinks={socialLinks} social={social} />

          <FormInput />
        </div>
      </div>
      <div className="mt-5">
        <HereForYou />
        <OurTeam />
      </div>
    </div>
  );
};

export default Page;

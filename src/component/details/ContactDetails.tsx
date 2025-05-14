"use client";
import Link from "next/link";
import { ReactNode, useEffect } from "react";
import ButtonText from "../common/button/ButtonText";
import { useAppSelector } from "@/hooks/useAppSelector";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { getOrganizationInfo } from "@/lib/features/services/serviceAction";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaViber,
} from "react-icons/fa"; // You can import the necessary icons
import { BiPhone } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";

interface SocialLink {
  href: string;
  icon: ReactNode;
  value: string;
}

interface Social {
  href: string;
  icon: ReactNode;
  label: string;
}

const ContactDetails: React.FC = () => {
  const { OrganizationList } = useAppSelector((state) => state.service);
  const dispatch = useAppDispatch();
  const organization = OrganizationList[0];

  useEffect(() => {
    dispatch(getOrganizationInfo());
  }, []);

  const socialLinks: SocialLink[] = [
    {
      href: `tel:${organization?.phone_number1 || "no number"}`,
      icon: <BiPhone className="w-6 h-6 text-green-600" />,
      value: organization?.phone_number1,
    },
    {
      href: `mailto:${organization?.email}`,
      icon: <MdEmail className="w-6 h-6 text-rose-600" />,
      value: organization?.email,
    },
    {
      href: `https://web.whatsapp.com/send?phone=${organization?.phone_number1}`,
      icon: <BsWhatsapp className="w-6 h-6 text-green-600" />,

      value: organization?.whatsapp,
    },
    {
      href: `viber://chat?number=${organization?.viber}`,
      icon: <FaViber className="w-6 h-6 text-blue-600" />,

      value: organization?.viber,
    },
  ];

  const social: Social[] = organization?.social_media.map((media) => {
    let icon;
    switch (media.platform) {
      case "facebook":
        icon = (
          <FaFacebook className="w-8 h-8 text-blue-700 hover:text-blue-800" />
        );
        break;
      case "twitter":
        icon = <FaTwitter className="w-8 h-8 text-gray-800 hover:text-black" />;
        break;
      case "instagram":
        icon = (
          <FaInstagram className="w-8 h-8 text-rose-600 hover:text-rose-700" />
        );
        break;
      case "linkedin":
        icon = (
          <FaLinkedin className="w-8 h-8 text-blue-500 hover:text-blue-600" />
        );
        break;
      default:
        icon = <i className="fas fa-globe" />;
    }

    return {
      href: media.url,
      icon,
      label: media.display_name,
    };
  });

  return (
    <div className="w-full md:w-1/2 flex flex-col items-start justify-start ">
      <h5 className="text-level capitalize text-2xl font-semibold mb-6 underline">
        {organization?.name || "Organization Name"}
      </h5>

      {socialLinks?.map((data, index) => (
        <Link
          key={index}
          href={data.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={data.value}
          className="flex items-start gap-4 text-lg justify-center mb-2"
          // title={data.value}
        >
          {data.icon}
          <span>{data.value}</span>
        </Link>
      ))}

      <div className="flex flex-wrap justify-center gap-3 mt-15">
        {social?.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            title={link.label}
          >
            {link.icon}
          </Link>
        ))}
      </div>

      <div className="flex flex-col gap-6 mt-8">
        <Link href="/contact">
          <ButtonText title="Full Contact List" requiredIcon={false} />
        </Link>
        <ButtonText title="Make Appointment" requiredIcon={false} />
      </div>
    </div>
  );
};

export default ContactDetails;

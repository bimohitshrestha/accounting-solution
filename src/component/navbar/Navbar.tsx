"use client";
import Link from "next/link";
import Image from "next/image";
import React, { ReactNode, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { BsWhatsapp } from "react-icons/bs";
import {
  FaFacebook,
  FaLinkedin,
  FaPhone,
  FaBars,
  FaTimes,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  FaViber,
} from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { navItems } from "./NavItems";
import { useAppSelector } from "@/hooks/useAppSelector";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { getServiceList } from "@/lib/features/services/serviceAction";
import { BiPhone } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import WhatsAppOptions from "../WhatsAppAction/WhatsAppOption";

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

const Navbar = () => {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { ServiceList, OrganizationList } = useAppSelector(
    (state) => state.service
  );
  const organization = OrganizationList[0];

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getServiceList());
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

  const social: Social[] =
    organization?.social_media?.map((media) => {
      let icon;
      switch (media.platform) {
        case "facebook":
          icon = (
            <FaFacebook className="w-8 h-8 text-blue-700 hover:text-blue-800" />
          );
          break;
        case "twitter":
          icon = (
            <FaTwitter className="w-8 h-8 text-gray-800 hover:text-black" />
          );
          break;
        case "instagram":
          icon = (
            <FaInstagram className="w-8 h-8 text-rose-600 hover:text-rose-700" />
          );
          break;
        case "whatsapp":
          icon = (
            <FaWhatsapp className="w-8 h-8 text-green-600 hover:text-green-700" />
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
    }) || [];

  const toggleSubMenu = (itemName: string) => {
    setOpenMenu(openMenu === itemName ? null : itemName);
  };

  const isActive = (href?: string) => href && pathname === href;

  const getSubItems = (item: any) =>
    item.subItems ||
    (item.subChild !== false &&
      ServiceList.map((sub) => ({
        name: sub.name,
        href: `/service/${sub.slug}`,
      })));

  return (
    <div className="w-full bg-slate-100 border-b-2 border-black py-4">
      <div className="px-4 lg:px-16 flex items-center justify-between h-24">
        <Link href="/">
          <Image src="/next.svg" alt="Logo" width={120} height={60} />
        </Link>

        {/* Right section: social icons + WhatsApp option */}
        <div className="hidden lg:flex flex-col items-end gap-2">
          <div className="flex gap-3 mb-2">
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
          <WhatsAppOptions
            phoneNumber={organization?.whatsapp}
            message="Hi, I'm interested in your services!"
          />
        </div>

        <button
          className="lg:hidden text-black text-2xl"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div className="hidden lg:flex justify-center gap-6 mt-4">
        {navItems.map((item) => {
          const subItems = getSubItems(item);
          return (
            <div
              key={item.name}
              className="relative group"
              onMouseEnter={() => setOpenMenu(item.name)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button
                onClick={() => toggleSubMenu(item.name)}
                className={`flex items-center px-4 py-2 border border-black transition ${
                  isActive(item.href)
                    ? "bg-level text-white"
                    : "bg-white hover:bg-level hover:text-white text-black"
                }`}
              >
                {item.subChild === false ? (
                  <Link href={item.href || "#"}>{item.name}</Link>
                ) : (
                  <>
                    {item.name}
                    <span className="ml-2">
                      {openMenu === item.name ? (
                        <IoIosArrowUp />
                      ) : (
                        <IoIosArrowDown />
                      )}
                    </span>
                  </>
                )}
              </button>

              {openMenu === item.name && subItems && (
                <div className="absolute top-full left-0 bg-level text-white shadow-lg w-44 z-50">
                  {subItems.map((sub: any, index: number) => (
                    <Link
                      key={index}
                      href={sub.href}
                      className={`block px-6 py-3 text-sm border-b hover:bg-white hover:text-black transition-colors ${
                        isActive(sub.href)
                          ? "bg-white text-black font-bold"
                          : ""
                      }`}
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pb-4 space-y-4">
          {navItems.map((item) => {
            const subItems = getSubItems(item);
            return (
              <div key={item.name} className="mb-2">
                <button
                  onClick={() => toggleSubMenu(item.name)}
                  className="w-full flex justify-between items-center px-4 py-2 border border-black bg-level text-white hover:bg-white hover:text-black transition"
                >
                  <span>{item.name}</span>
                  {item.subChild !== false && (
                    <span>
                      {openMenu === item.name ? (
                        <IoIosArrowUp />
                      ) : (
                        <IoIosArrowDown />
                      )}
                    </span>
                  )}
                </button>

                {openMenu === item.name && subItems && (
                  <div className="bg-white text-black shadow-lg mt-1 w-full">
                    {subItems.map((sub: any, index: number) => (
                      <Link
                        key={index}
                        href={sub.href}
                        className={`block px-6 py-3 text-sm border-b hover:bg-gray-100 ${
                          isActive(sub.href) ? "bg-white font-semibold" : ""
                        }`}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          <p className="flex flex-col items-center text-black text-sm gap-2 mt-4">
            {socialLinks
              ?.filter((data) => data.href.includes("whatsapp"))
              .map((data, index) => (
                <Link
                  key={index}
                  href={data.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={data.value}
                  className="flex items-center gap-2 text-lg"
                >
                  {data.icon}
                  <span>{data.value}</span>
                </Link>
              ))}
          </p>

          <div className="mt-4 flex justify-center gap-4">
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
        </div>
      )}
    </div>
  );
};

export default Navbar;

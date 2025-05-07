"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { BsInstagram } from "react-icons/bs";
import {
  FaFacebook,
  FaLinkedin,
  FaPhone,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { navItems } from "./NavItems";

const Navbar = () => {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleSubMenu = (itemName: string) => {
    setOpenMenu(openMenu === itemName ? null : itemName);
  };

  const isActive = (href: string) => pathname === href;

  return (
    <div className="w-full bg-slate-100 border-b-2 border-black py-8">
      <div className="h-28 px-4 lg:px-16 flex items-center justify-between py-5">
        <div>
          <Image src="/next.svg" alt="Logo" width={150} height={200} />
        </div>

        <div>
          <div className="hidden md:flex flex-col items-end gap-3">
            <div className="flex gap-4">
              <Link
                href="https://www.instagram.com/"
                target="_blank"
                aria-label="Instagram"
              >
                <BsInstagram className="text-rose-600 w-6 h-6 hover:scale-110 transition-transform" />
              </Link>
              <Link
                href="https://www.facebook.com/"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook className="text-blue-600 w-6 h-6 hover:scale-110 transition-transform" />
              </Link>
              <Link
                href="https://www.linkedin.com/"
                target="_blank"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-blue-900 w-6 h-6 hover:scale-110 transition-transform" />
              </Link>
            </div>
            <p className="flex items-center text-black text-lg gap-2">
              <FaPhone className="text-green-600 w-5 h-5" />
              <span className="font-medium">9849909999</span>
            </p>
          </div>

          <div className="hidden md:flex items-center justify-center gap-6 py-4">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => setOpenMenu(item.name)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <button
                  onClick={() => toggleSubMenu(item.name)}
                  className={`flex items-center px-4 py-2 border-2 border-slate-300 transition
                  ${
                    isActive(item.href || "")
                      ? "bg-green-600 text-white"
                      : "bg-white hover:bg-green-400 hover:text-white text-black"
                  }`}
                >
                  {item.name}
                  {item.subItems && (
                    <span className="ml-2">
                      {openMenu === item.name ? (
                        <IoIosArrowUp />
                      ) : (
                        <IoIosArrowDown />
                      )}
                    </span>
                  )}
                </button>

                {item.subItems && openMenu === item.name && (
                  <div className="absolute top-full left-0 bg-green-500 text-white shadow-lg w-44 z-50">
                    {item.subItems.map((sub, index) => (
                      <Link
                        key={index}
                        href={sub.href}
                        className={`block px-6 py-3 text-sm transition-colors border-b 
                          ${
                            isActive(sub.href)
                              ? "bg-white text-green-600 font-bold"
                              : "hover:bg-white hover:text-green-600"
                          }`}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <button
            className="md:hidden text-black text-2xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-4">
          {navItems.map((item) => (
            <div key={item.name}>
              <button
                onClick={() => toggleSubMenu(item.name)}
                className={`w-full flex justify-between items-center px-4 py-2 rounded
                ${
                  isActive(item.href || "")
                    ? "bg-green-700 text-white"
                    : "bg-green-500 text-white"
                }`}
              >
                {item.name}
                {item.subItems && (
                  <span className="ml-2">
                    {openMenu === item.name ? (
                      <IoIosArrowUp />
                    ) : (
                      <IoIosArrowDown />
                    )}
                  </span>
                )}
              </button>
              {item.subItems && openMenu === item.name && (
                <div className="bg-white border mt-1 rounded">
                  {item.subItems.map((sub) => (
                    <Link
                      key={sub.name}
                      href={sub.href}
                      className={`block px-4 py-2 text-sm transition 
                      ${
                        isActive(sub.href)
                          ? "bg-green-100 text-green-700 font-semibold"
                          : "text-black hover:bg-gray-100"
                      }`}
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="mt-4 flex justify-center gap-4">
            <Link
              href="https://www.instagram.com/"
              target="_blank"
              aria-label="Instagram"
            >
              <BsInstagram className="text-rose-600 w-6 h-6" />
            </Link>
            <Link
              href="https://www.facebook.com/"
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebook className="text-blue-600 w-6 h-6" />
            </Link>
            <Link
              href="https://www.linkedin.com/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-blue-900 w-6 h-6" />
            </Link>
          </div>
          <p className="flex items-center justify-center text-black text-lg gap-2">
            <FaPhone className="text-green-600 w-5 h-5" />
            <span className="font-medium">9849909999</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Navbar;

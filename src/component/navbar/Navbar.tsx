"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
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
import { useAppSelector } from "@/hooks/useAppSelector";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { getServiceList } from "@/lib/features/services/serviceAction";

const Navbar = () => {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { ServiceList } = useAppSelector((state) => state.service);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getServiceList());
  }, []);

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

        <div className="hidden lg:flex flex-col items-end gap-2">
          <div className="flex gap-3">
            <Link
              href="https://www.instagram.com/"
              target="_blank"
              aria-label="Instagram"
            >
              <BsInstagram className="text-level w-5 h-5 hover:scale-110 transition" />
            </Link>
            <Link
              href="https://www.facebook.com/"
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebook className="text-level w-5 h-5 hover:scale-110 transition" />
            </Link>
            <Link
              href="https://www.linkedin.com/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-level w-5 h-5 hover:scale-110 transition" />
            </Link>
          </div>
          <p className="flex items-center text-black text-sm gap-1">
            <FaPhone className="text-green-600 w-4 h-4" />
            <span className="font-medium">9849909999</span>
          </p>
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

          <div className="mt-4 flex justify-center gap-4">
            <Link
              href="https://www.instagram.com/"
              target="_blank"
              aria-label="Instagram"
            >
              <BsInstagram className="text-level w-6 h-6 hover:scale-110 transition-transform" />
            </Link>
            <Link
              href="https://www.facebook.com/"
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebook className="text-level w-6 h-6 hover:scale-110 transition-transform" />
            </Link>
            <Link
              href="https://www.linkedin.com/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-level w-6 h-6 hover:scale-110 transition-transform" />
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

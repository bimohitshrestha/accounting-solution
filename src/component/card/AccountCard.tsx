"use client";
import React from "react";
import Link from "next/link";
import {
  BiBarChart,
  BiBriefcase,
  BiCheckSquare,
  BiReceipt,
  BiUser,
  BiWallet,
} from "react-icons/bi";
import { BsDatabase } from "react-icons/bs";
import { FiFileText } from "react-icons/fi";
import { useAppSelector } from "@/hooks/useAppSelector";

const services = [
  {
    icon: <BiWallet className="w-16 h-16" />,
    title: "Accounting",
    href: "/service/accounting-services",

    description:
      "Our accounting services are specialized and our CPA accountants assist with all tax and business requirements",
  },
  {
    icon: <BiReceipt className="w-12 h-12 " />,
    title: "Bookkeeping",
    href: "/service/bookkeeping",

    description:
      "We'll take care of your bookkeeping so you can focus on growing your business.",
  },
  {
    icon: <BiUser className="w-12 h-12 " />,
    title: "Business Coaching",
    href: "/service/business-coaching",

    description:
      "Are you looking to elevate your business to new heights? Meet our highly qualified Business Coach Dorothea Farmakis.",
  },
  {
    icon: <BiBarChart className="w-12 h-12 " />,
    title: "Business Structures",
    href: "/service/business-structures",

    description:
      "Assisting you in protecting your assets, minimizing your tax bill, and planning for the future",
  },
  {
    icon: <BsDatabase className="w-12 h-12 " />,
    title: "Capital Gains",
    href: "/service/capital-gains",

    description:
      "CGT (Capital Gains Tax) is a tax you pay when you sell an asset or investment and receive a gain",
  },
  {
    icon: <BiBriefcase className="w-12 h-12 " />,
    title: "Corporate Consulting",
    href: "/service/corporate-consulting",

    description:
      "We help you understand your business, forecast financial performance, manage your business and review key performance indicators",
  },
  {
    icon: <FiFileText className="w-12 h-12 " />,
    title: "Tax",
    href: "/service/tax",

    description:
      "Taking care of your personal and business tax needs so you can concentrate on growing your business",
  },
  {
    icon: <BiCheckSquare className="w-12 h-12 " />,
    title: "SMSF Auditing Services",
    href: "/service/auditing-services",

    description:
      "Tailored Accounting Solutions has accredited specialists with expertise in providing various audit services.",
  },
];

const AccountCard = () => {
  const { ServiceList } = useAppSelector((state) => state.service);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {ServiceList.map((service, index) => (
        <Link href={`/service/${service.slug}`} key={index}>
          <div
            key={index}
            className="border border-gray-200 p-6 rounded-lg flex flex-col items-center text-center "
          >
            <div className="mb-4  text-blue-600 hover:text-black">
              {service.cta_url}
            </div>
            <h3 className="text-lg font-normal text-blue-600 hover:text-black mb-3">
              {service.title}
            </h3>
            <p className="text-gray-600 text-[10px]">{service.name}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default AccountCard;

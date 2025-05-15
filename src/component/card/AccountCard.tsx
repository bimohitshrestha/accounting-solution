"use client";
import React from "react";
import Link from "next/link";
import { useAppSelector } from "@/hooks/useAppSelector";

const AccountCard = () => {
  const { ServiceList } = useAppSelector((state) => state.service);

  return (
    <div className="flex justify-center items-center py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-7xl w-full px-4">
        {ServiceList.map((service, index) => (
          <Link
            href={`/service/${service.slug}`}
            key={index}
            className="h-full group"
          >
            <div className="border border-gray-200 group-hover:border-blue-300 p-6 rounded-lg flex flex-col items-center text-center h-full bg-white hover:bg-blue-50 transition-colors duration-300 shadow-sm hover:shadow-md">
              <div className="mb-4 text-blue-900 group-hover:text-blue-800 transition-colors">
                {service.cta_url}
              </div>
              <h3 className="text-lg font-medium text-level group-hover:text-blue-800 transition-colors mb-3">
                {service.name}
              </h3>
              <p className="text-sm md:text-base text-gray-900 font-light line-clamp-3">
                {service.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AccountCard;

"use client";
import ImageHeader from "@/component/backgroundImageHeader/ImageHeader";
import NavbarMenuHeader from "@/component/header/NavbarMenuHeader";
import { useAppSelector } from "@/hooks/useAppSelector";
import React from "react";

const Page = () => {
  const { ServiceList } = useAppSelector((state) => state.service);

  return (
    // <div className="w-full min-h-screen">
    //   <ImageHeader title="Accounting Services" image="/accountant.jpg" />
    //   <div className="mt-4">
    //     <NavbarMenuHeader
    //       title="Accounting services for Melbourne Outer Eastern Suburbs and Yarra Ranges."
    //       description={`To succeed in today’s uncertain business environment, you need knowledge, perseverance, and a strong team.`}
    //     />
    //   </div>
    // </div>
    <div className=""></div>
  );
};

export default Page;

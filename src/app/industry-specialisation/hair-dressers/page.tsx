import React from "react";
import ImageHeader from "@/component/backgroundImageHeader/ImageHeader";
import DetailContent from "@/component/details/DetailContent";
import BulletList from "@/component/details/BulletList";
import ButtonText from "@/component/common/button/ButtonText";
import { IoIosCall } from "react-icons/io";
import Link from "next/link";
import HereForYou from "@/app/homesection/HereForYour";

const Page: React.FC = () => {
  const bullets: string[] = [
    "At TAS, we've helped hair salons get started. Besides experience, we've got tax knowledge and marketing know-how, and we've got a lot of industry knowledge.",
    "The accounting software you choose plays an essential role in the foundation of your business. Unfortunately, it is common for companies to fail in this country due to poor record-keeping, so you need to keep accurate, up-to-date financial records to make informed business decisions.",
    "We often find that business owners make costly mistakes when choosing software, which results in frustrating, time-consuming, and expensive records that generate additional fees. We aim to reduce the time and costs associated with GST compliance and bookkeeping through our services.",
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <ImageHeader
        title="Hairdressers and Barbers"
        image="/sailoon.jpg"
        alt="Farming/agriculture"
      />
      <div className="max-w-lvw mx-auto px-6 py-6">
        <DetailContent
          title="Accountants For Hairdressers and Barbers"
          subtitle="Your salon will benefit from our experience, technical expertise, and knowledge of the hairdressing industry. In addition, you can compare the performance of your hairdressing business against your competitors by comparing industry benchmarks."
          paragraphs={[
            "Having an accountant who understands hairdressing can help you thrive or survive. TAS has mentored dozens of hairdressers and barbers from start-up to sale through the various stages of their business life cycle.",
            "When starting a hairdressing salon or buying an existing one, there are numerous factors to consider. In addition to establishing your business structure, registering for tax and GST, selecting accounting software, and pursuing financing options, you need to consider insurance. Our accountants and business advisors can assist you in all of these areas and provide advice on preparing a business plan, marketing plan, and cash flow budget. In addition to payroll and WorkCover, we can assist with superannuation guarantee obligations if you plan to hire staff.",
          ]}
          imageSrc="/sailoon.jpg"
          imageAlt="Mechanic and motor"
        />

        <BulletList
          title="Business We Service:"
          bullets={bullets}
          paragraph={[
            "At TAS, your business success is our priority, and we offer a range of accounting, taxation and business coaching services for your hairdressing salon.",
            "Contact the  Chartered Accounting Solutions team to set up a time to discuss your business requirements; located in Bayswater, Victoria, our firm is here to support you.",
          ]}
        />

        <div className=" flex items-center justify-center py-6 mx-6">
          <Link href="/contact">
            <ButtonText
              title="Call us today on 9849909999"
              icon={<IoIosCall />}
              requiredIcon
              className="w-full"
            />
          </Link>
        </div>
        <HereForYou />
      </div>
    </div>
  );
};

export default Page;

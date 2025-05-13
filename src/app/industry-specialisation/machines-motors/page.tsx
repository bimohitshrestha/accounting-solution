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
    "Jetski/Boat Repairers",
    "Motor Trimming",
    "Mechanics (Motor Vehicle and Truck)",
    "Automotive Vehicle Repairers",
  ];
  const lists: string[] = [
    "Jetski/Boat Repairers",
    "Motor Trimming",
    "Mechanics (Motor Vehicle and Truck)",
    "Automotive Vehicle Repairers",
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <ImageHeader
        title="Mechanic and Motor Trimming"
        image="/mechanic.jpg"
        alt="Farming/agriculture"
      />
      <div className="max-w-lvw mx-auto px-6 py-6">
        <DetailContent
          title="Accountants For Mechanics and Automotive Repairs"
          subtitle="Providing Specialist Taxation, Accounting and Business Advisory Services to Automotive Mechanics across Melbourne."
          paragraphs={[
            "Accounting specialists can assist your business with taxation and compliance issues, such as PAYG, BAS, GST, and superannuation, so you can focus on helping customers and growing your business instead of dealing with taxation. TAS has been friendly and professional and has managed cash flow and taxes for a range of auto electricians, mechanics, and automotive specialists for years.",
            "Accountants who understand the auto trade can make all the difference between thriving and surviving. The TAS team provides mentoring services to motor mechanics, auto electricians, and smash repairers from start-ups to exits.",
            "Let us handle those parts of your business we know the most.",
            "Assisting auto electricians, smash repairers, and mechanics with their cash flow, invoices, payroll slips, and apprentice programs are what we do. We set up the proper tax structure and technology for your business, regardless of whether you're a sole proprietor, a partnership, a trust, or a corporation.",
            "Our solutions are tailored to ensure that they work for both you and your business, recognizing that your business is unique and your requirements are too. We will assist you through all aspects of owning and operating a business, from conception to sale.",
          ]}
          // boldDescription={[]}
          imageSrc="/mechanic.jpg"
          imageAlt="Mechanic and motor"
        />

        <BulletList
          title="Business We Service:"
          bullets={bullets}
          paragraph={[
            "Don't hesitate to contact us for more information about our accounting services for mechanics and tradespeople. We are based in Bayswater, but we work with mechanics all over Melbourne, including Ringwood, Kilsyth, Vermont, Upwey, and the Yarra Ranges. We'll get your business up and running, no matter where you are - or how bad your books are.",
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

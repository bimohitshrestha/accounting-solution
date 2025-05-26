import React from "react";
import ImageHeader from "@/component/backgroundImageHeader/ImageHeader";
import DetailContent from "@/component/details/DetailContent";
import BulletList from "@/component/details/BulletList";
import ButtonText from "@/component/common/button/ButtonText";
import { IoIosCall } from "react-icons/io";
import Link from "next/link";
import HereForYou from "@/app/homesection/HereForYour";

const Page: React.FC = () => {
  const content: string[] = [
    "Information on starting a business.",
    "Advice on selecting suitable point-of-sale and bookkeeping software.",
    "Social networking strategies.",
  ];
  const bullets: string[] = [
    "Nail Technicians",
    "Eyelash Technicians",
    "Make Up Artists & Product Creation",
    "Tattoo Removal",
    "Injectables & Laser",
    "Teeth Whitening",
    "Beauty Salons (which include above and IPL and other treatments)",
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <ImageHeader
        title="Beauty Industry"
        image="/mechanic.jpg"
        alt="beauty-industry"
      />
      <div className="max-w-lvw mx-auto px-6 py-6">
        <DetailContent
          title="Accountants For the Beauty Industry"
          subtitle="We offer specialized advice and services in an industry we are passionate about and understand!"
          paragraphs={[
            "Helping our clients unlock their salon's potential, minimizing their tax bill, and setting business budgeting and goals allows them to spend more time doing what they love.",
            "Those who operate businesses in the hairdressing and beauty industries face specific issues and demands. It is not uncommon for business owners and operators in this industry to work very long hours, with managers and business operators commonly working long hours.",
            "There are two types of staff: those employed by the company as contractors or those who rent a particular room, space, or station - like a nail technician in a beauty salon. In this industry, high staff turnover poses a challenge, as well as the fact that when a staff member or contractor moves to a different company, clients often follow them.",
            "There are two types of staff: those employed by the company as contractors or those who rent a particular room, space, or station - like a nail technician in a beauty salon. In this industry, high staff turnover poses a challenge, as well as the fact that when a staff member or contractor moves to a different company, clients often follow them.",
            "TAS understands the complex issues faced by beauty and personal services business owners and operators. We can provide the following:",
          ]}
          bullets={content}
          imageSrc="/mechanic.jpg"
          imageAlt="Mechanic and motor"
        />

        <BulletList
          title="Beauty businesses we act for:"
          bullets={bullets}
          paragraph={[
            "Contact us to learn more about our accounting services for hairdressers and barbers.",
            "We're located in Bayswater, but we work with stylists across the Eastern Suburbs and Yarra Valley, including Lilydale, Montrose, Kilsyth, Ringwood and other surrounding suburbs.",
          ]}
        />

        <div className=" flex items-center justify-center py-6 mx-6">
          {/* <Link href="/contact"> */}
          <ButtonText
            title="Call us today on 9849909999"
            link="/contact"
            icon={<IoIosCall />}
            requiredIcon
            className="w-full"
          />
          {/* </Link> */}
        </div>
        <HereForYou />
      </div>
    </div>
  );
};

export default Page;

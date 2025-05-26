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
    "Business accounting",
    "Taxation advice",
    "Tax return preparation",
    "Bookkeeping",
    "BAS preparation",
    "GST advice and lodgement",
    "Cash flow forecasting",
    "Business structure and set-up",
    "Business startup advice",
    "Tax compliance",
    "Payroll and superannuation",
    "Business coaching",
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <ImageHeader
        title="Personal Trainers and Gyms"
        image="/gym.jpg"
        alt="Personal Trainers and Gyms"
      />
      <div className="max-w-lvw mx-auto px-6 py-6">
        <DetailContent
          title="Accountants For Personal Trainers and Gyms"
          subtitle="Personal Trainers (PT) and studio/gym owners can rely on CAS for chartered tax and business advice!"
          paragraphs={[
            "Gym owners must face unique challenges in meeting the physical demands of their jobs while operating and running their businesses. As well as working long hours and on weekends, they must handle many other responsibilities.",
            "Fitness & Personal Training is a specialized business. We help our clients in this industry minimize their worries about Bookkeeping, Taxation, and Compliance so they can concentrate on what they do best: running their business. Fitness professionals across Bayswater, Melbourne, and beyond have trusted us with their accounting needs, including gym owners, personal trainers, yoga instructors, and health coaches.",
            "We can assist fitness professionals, gym franchisees and health club owners with meeting obligations, minimizing taxes, managing cash flow and maximizing profits.",
            "We have experienced gym accountants who can help you reach your financial goals no matter how simple or complex your fitness business is. Whether you need help with PAYG, BAS, GST or long-term financial planning and tax minimization strategies, we can help.",
          ]}
          //   boldDescription={[
          //     "Our hospitality accountants will help simplify your finances, minimize your tax obligations, and manage your cash flow.",
          //   ]}
          imageSrc="/gym.jpg"
          imageAlt="GYM"
        />

        <BulletList
          title="We offer the following accounting services to gyms, health clubs, and fitness providers:"
          bullets={bullets}
          paragraph={[
            "Have you already established a gym or health club but need to see accurate results? Then, a business health check may be in order. As part of this comprehensive assessment, our accountants will analyze your fitness business to identify strengths, uncover weaknesses, and provide practical business improvement strategies.",
          ]}
          boldDescription={[
            "Get in touch to learn more about our accounting services for gyms, health clubs and personal trainers. We're based in Bayswater, but we work with fitness professionals across all suburbs of the Yarra Valley and Outer Eastern Suburbs.",
          ]}
        />

        <div className=" flex items-center justify-center py-6 mx-6">
          {/* <Link href="/contact"> */}
          <ButtonText
            title="Call us today on 9849909999"
            icon={<IoIosCall />}
            link="/link"
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

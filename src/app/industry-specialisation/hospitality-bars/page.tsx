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
    "Accounting & Bookkeeping",
    "BAS and IAS Lodgement",
    "Payroll, Superannuation, Leave Management",
    "Financial Reporting",
    "Cashflow Planning, Management And Budgeting",
    "Tax Advice and Planning",
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <ImageHeader
        title="Hospitality, Bars, Cafes and Hotels"
        image="/cafe.jpg"
        alt="Hospitality Bars and Cafe"
      />
      <div className="max-w-lvw mx-auto px-6 py-6">
        <DetailContent
          title="Accountants for the Hospitality Industry"
          subtitle="Restaurants, cafes, bars, and hotels can be demanding businesses. Hospitality industry jobs are often filled with long hours, low margins, high competition, regulatory compliance, and many sales transactions."
          paragraphs={[
            "We aim to assist the owners in finding the right people to help with hospitality accounting since hospitality can be a challenging work environment due to the long working hours and constant need for staff.",
            "In our years of experience, we have observed numerous instances in which an establishment has over-capitalized its fit-out, which has detrimental effects on the establishment. As part of our services, we have assisted clients in acquiring quality products at the right price and appropriately managing staff levels through effective rostering. For each business, we assess where it wishes to be so that we can deliver the vision to your target market and patrons. Our hospitality accountants can achieve these goals.",
          ]}
          boldDescription={[
            "Our hospitality accountants will help simplify your finances, minimize your tax obligations, and manage your cash flow.",
          ]}
          imageSrc="/cafe.jpg"
          imageAlt="Mechanic and motor"
        />

        <BulletList
          title="Accounting Services for Hospitality Business Owners"
          description="We also understand the business challenges you face in the hospitality industry and complex tax compliance and employment regulations. As a service to our restaurant and hotel owners, we provide the following:"
          bullets={bullets}
          paragraph={[
            "The Importance of Cash Flow Management for Hotels, Cafes and Restaurants",
            "Running a successful restaurant or hotel requires an understanding of your cash flow. Several variables are to consider, such as revenue, bills, salaries, loans, and inventory.",
          ]}
          boldDescription={[
            "You risk your hospitality business's financial future by ignoring cash flow management. To improve your business' profitability and cash flow, you must work with an accountant who understands the hospitality industry's risks and rewards.",
          ]}
        />

        <div className=" flex items-center justify-center py-6 mx-6">
          {/* <Link href="/contact"> */}
          <ButtonText
            title="Call us today on 9849909999"
            icon={<IoIosCall />}
            link="/contact"
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

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
    "Audit, accounting and tax compliance",
    "GST & BAS Preparation",
    "Cloud Accounting",
    "Payroll, Superannuation and FBT",
    "Budgets and cash flow forecasting",
    "Management accounting & industry benchmarking",
    "Risk management",
    "Tax planning",
    "Mergers and acquisitions",
    "Business Coaching",
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <ImageHeader
        title="Tradie Tax Specialists"
        image="/tradies.jpg"
        alt="Tradies"
      />
      <div className="max-w-lvw mx-auto px-6 py-6">
        <DetailContent
          title="Accountants For Trades"
          subtitle="Our services to small and large trade businesses range from bookkeeping and tax preparation to accounting and tax preparation."
          paragraphs={[
            "The accountants at our firm are masters of taxation. Their extensive training ensures that tax returns are prepared correctly and comply with ATO guidelines.",
            "Because we specialize in the Trade industry, TAS has our finger on the pulse to offer our clients exceptional advice that is current and in their best interests.",
            "Whether it's providing accounting software assistance, tax advice, or cash flow projections, we know how to help you.",
            "In addition to offering industry-specific advice to our clients, we take pride in delivering expert-level services. A qualified adviser who knows the trade industry's needs is crucial for those in the industry. So whether you are in roofing, electrical, carpentry or excavation, we can assist your business.",
          ]}
          boldDescription={[
            "Keeping your business's books and accounting records becomes increasingly complicated as it grows. To meet the evolving needs of your business, we offer an extensive range of accounting services.",
            "With our streamlined payroll solutions and processes, we can simplify payroll for your business. From interpretation, application, processing, employee administration, processing and payment of super and PAYGW tax to a payroll tax, we cover everything from 2 to 100 employees.",
          ]}
          imageSrc="/cafe.jpg"
          imageAlt="Mechanic and motor"
        />

        <BulletList
          description="Our suite of accounting services covers everything you need. Whether you're a sole trader or a small business owner, established in the industry or just starting, we can help you get ahead. Here are some of our essential services:"
          //   description="We also understand the business challenges you face in the hospitality industry and complex tax compliance and employment regulations. As a service to our restaurant and hotel owners, we provide the following:"
          bullets={bullets}
          //   paragraph={[
          //     "The Importance of Cash Flow Management for Hotels, Cafes and Restaurants",
          //     "Running a successful restaurant or hotel requires an understanding of your cash flow. Several variables are to consider, such as revenue, bills, salaries, loans, and inventory.",
          //   ]}
          //   boldDescription={[
          //     "You risk your hospitality business's financial future by ignoring cash flow management. To improve your business' profitability and cash flow, you must work with an accountant who understands the hospitality industry's risks and rewards.",
          //   ]}
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

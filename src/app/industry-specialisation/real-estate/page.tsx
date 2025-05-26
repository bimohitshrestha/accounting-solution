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
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <ImageHeader title="Real Estate" image="/estate.jpg" alt="Real Estate" />
      <div className="max-w-lvw mx-auto px-6 py-6">
        <DetailContent
          title="Accountants For Real Estate Agents / Companies"
          subtitle="You need the proper support with specific industry expertise to succeed in today's real estate market. This is why more and more real estate companies are turning to the TAS team in Bayswater."
          paragraphs={[
            "Whatever type of agency you run, it's essential to have an accounting system that keeps track of your finances. Although real estate bookkeepers often have simple tasks, they must ensure that every item is recorded correctly.",
            "In the case of choosing a property tax accountant in Melbourne for your company, there is no one-size-fits-all approach. To meet the needs of every business and situation, a customized approach is necessary. Therefore, we ensure CAS Chartered Accounting Solutions never offers you standard, typical products that don't reflect the nature of your business.",
            "Taking care of the details is essential to us.",
            "A key characteristic of our bookkeepers for property managers is their attention to detail. It doesn't matter how big or small your team is. We always ask the right questions and show an interest in your business.",
            "Aside from continually educating our clients and maintaining compliance where it is most important, we have worked hard to create a trustworthy range of services, so they always benefit financially from our guidance.",
            "You can count on us to keep your books accurate and up-to-date at all times. Identify your revenue streams and make informed decisions when you want to change your business. In addition, we help your agency remain financially secure and in compliance with all relevant laws and regulations.",
          ]}
          //   boldDescription={[
          //     "Our hospitality accountants will help simplify your finances, minimize your tax obligations, and manage your cash flow.",
          //   ]}
          imageSrc="/estate.jpg"
          imageAlt="GYM"
        />

        <BulletList
          title="Accounting Services for Real Estate Agents"
          description="We also understand the business challenges you face in the real estate industry and complex tax compliance and employment regulations. As a service to our restaurant and hotel owners, we provide the following:"
          bullets={bullets}
          paragraph={[
            "With CAS Chartered Accounting Solutions in Bayswater and Yarra Ranges, we guide you through every step of your real estate business lifecycle. As a result, we add real value to your business as accountants all year round - not just at tax time.",
          ]}
          //   boldDescription={[
          //     "Get in touch to learn more about our accounting services for gyms, health clubs and personal trainers. We're based in Bayswater, but we work with fitness professionals across all suburbs of the Yarra Valley and Outer Eastern Suburbs.",
          //   ]}
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

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
    "Tax minimization",
    "Protect assets to the maximum extent possible",
    "Allow for the Admission of New Business Partners or Investors",
    "Risk Profiles for Your Industry",
    "Discount Capital Gains Tax Concessions in the Future",
    "Financial Accounting and Management",
    "GST Consulting",
    "Developing a strategic plan",
    "Consulting on taxation",
    "Tax Planning & Minimisation",
    "Business Valuations",
    "Business Sales and Acquisitions",
    "Selection of accounting software and training",
    "Superannuation Advice",
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <ImageHeader title="Ndis" image="/manufacture.jpg" alt="ndis" />
      <div className="max-w-lvw mx-auto px-6 py-6">
        <DetailContent
          title="NDIS accounting and taxation firm"
          subtitle="CAS Chartered Accounting Solutions is an accounting firm based in Bayswater. As a specialist NDIS accounting and taxation firm, we offer a range of services including company registration, GST registration, company setup, accounting, bookkeeping, tax accounting and other services."
          paragraphs={[
            "The operation and management of any business is not an easy task, but NDIS business owners have some unique challenges while meeting the needs of physically demanding jobs.",
            "The NDIS Disability Support industry is a complex one, and we strive to assist our clients in this industry to minimise their worries about Bookkeeping, Taxation and Compliance, so they can focus on what they do best, which is running their business.",
            "An extensive range of consulting services are available to help business owners in the areas that often make the difference between just surviving and potentially thriving.",
          ]}
          //   boldDescription={[
          //     "Our hospitality accountants will help simplify your finances, minimize your tax obligations, and manage your cash flow.",
          //   ]}
          imageSrc="/manufacture.jpg"
          imageAlt="Information Technology"
        />

        <BulletList
          title="When advising NDIS Business clients on business structures, we always consider:"
          bullets={bullets}
          paragraph={[
            "NDIS businesses can benefit from using a tax accountant. The first benefit of working with a tax accountant is that they can maximize your deductions and minimize your tax liability. You can also keep track of your expenses and income with the help of a tax accountant, which will help you manage your finances. The third benefit of hiring a tax accountant is so we can help you prepare your financial statements and tax returns, which can save you time and money.",
            "We also assist with company registration and GST registration in addition to accounting and taxation services.  Let our team help you with your NDIS taxation, accounting,g and business advisory needs.",
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

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
        title="Manufacturing and Construction"
        image="/manufacture.jpg"
        alt="Manufacturing and construction"
      />
      <div className="max-w-lvw mx-auto px-6 py-6">
        <DetailContent
          title="Accountants For Manufacturing and Construction"
          subtitle="There is a constant change in regulations and industry standards in the manufacturing and construction industries. We have extensive experience working with businesses of all sizes in the commercial and residential sectors."
          paragraphs={[
            "Our goal is to help you build your business. Manufacturers, suppliers, or transporters can rely on our team to deliver successful outcomes.",
          ]}
          //   boldDescription={[
          //     "Our hospitality accountants will help simplify your finances, minimize your tax obligations, and manage your cash flow.",
          //   ]}
          imageSrc="/manufacture.jpg"
          imageAlt="Information Technology"
        />

        <BulletList
          title="Accounting Services for Manufacturing:"
          bullets={bullets}
          paragraph={[
            "It is still an active industry in Australia to manufacture goods. We focus primarily on process improvement and efficiency in this sector. Increasing labour costs and skill shortages keep manufacturers from surviving, highlighting the importance of focusing on efficiencies. In addition to cabinet makers, caravan manufacturers, stonemasons, and toolmakers, we also have clients in the manufacturing field.",
            "Throughout the lifecycle of a manufacturing company, we have assisted many companies from startup through to sale. Our expert accounting for manufacturing businesses is available to companies of any size, whether they have been in business for years or are looking to buy a brand-new company.",
          ]}
          boldDescription={[
            "TAS is here to help by providing accounting for manufacturing business services",
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

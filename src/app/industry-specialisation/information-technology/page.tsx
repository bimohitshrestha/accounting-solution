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
    "Accounting and bookkeeping using Xero and MYOB",
    "Corporate structure review to protect your business’s intangible assets",
    "Research and Development Tax Incentive (R&D Tax Incentive)",
    "Advice on the employer’s obligations to the employees and the contractors with regard to the ATO’s regulations",
    "Taxation Advice in relation to modern technology-based assets and earnings (e.g. Bitcoins)",
    "Preparing financial statements",
    "Registrations and compliances for IT businesses",
    "Consulting for startups",
    "Guidance on business plans, setting cash flow budgets and profit projections",
    "Selection of the right accounting software, and training to use the same",
    "Filing tax returns, and tax planning strategies",
    "Other financial planning services",
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <ImageHeader
        title="IT Industry"
        image="/IT.jpg"
        alt="Hospitality Bars and Cafe"
      />
      <div className="max-w-lvw mx-auto px-6 py-6">
        <DetailContent
          title="Information Technology Accountants"
          subtitle="We understand that your tax requirements are complex, but we simplify it and amplify your returns."
          paragraphs={[
            "Our accountants aren't just your average accountants. The goal of CAS  Chartered Accounting Solutions is to become a true partner in your IT business - delivering the best results possible.",
            "Getting to know you requires listening, investigating, and investigating some more. Every cent you earn is maximized by our IT accountants.",
            "You need to manage your finances in a way that allows you to focus on growth, rather than compliance, whether you have a job or own your own IT startup business. And here is where we at CAS Chartered Accounting Solutions we can help.",
          ]}
          //   boldDescription={[
          //     "Our hospitality accountants will help simplify your finances, minimize your tax obligations, and manage your cash flow.",
          //   ]}
          imageSrc="/IT.jpg"
          imageAlt="Information Technology"
        />

        <BulletList
          title="Our accountants and advisers support your business by delivering the services in the areas of:"
          bullets={bullets}
          paragraph={[
            "The IT start-up accounting specialist",
            "There are so many things you need to do before you start up a business, it's like having a baby, and sometimes, it's even more challenging! Starting a business in the IT field involves numerous considerations, as with any start-up. Choosing the right business structure at the beginning of your business is important, as changing it later can be costly and complex. There are many ways in which you can start a business, including sole traders, partnerships, companies, and trusts. Tax implications will vary for each of these, so it is best to consider this before getting started.",
            "Regulatory requirements require you to insure your business, set up processes, and choose the right software to manage receipts and payments. You are the best person to understand how important it is to use the right software for your business, and we can help you choose one that matches your business needs and your accounting skills, so you can maintain accurate financial records, according to Australian taxation regulations.",
            "Many IT professionals have been mentored by our accountants during the start-up phases of their businesses, helping them choose a business structure that minimizes tax and maximizes asset protection. Every step of the way, we ensure that our clients are in full compliance with legal guidelines for IT start-ups.",
          ]}
          //   boldDescription={[
          //     "You risk your hospitality business's financial future by ignoring cash flow management. To improve your business' profitability and cash flow, you must work with an accountant who understands the hospitality industry's risks and rewards.",
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

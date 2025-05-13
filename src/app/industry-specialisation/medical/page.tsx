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
    "General Practitioners",
    "Dentists",
    "Physiotherapist",
    "Myotherapists",
    "Chiropractors",
    "Radiologists",
    "Specialists & Anaesthetists",
    "Osteopathy",
    "Speech Pathologists",
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <ImageHeader title="Medical" image="/medical.jpg" alt="Medical" />
      <div className="max-w-lvw mx-auto px-6 py-6">
        <DetailContent
          title="Accountants For Medical Practices"
          subtitle="It's hard to think about your numbers when you're busy with appointments. In order to ensure your clinic is efficient and profitable, you must maintain a good handle on your accounts and cash flow."
          paragraphs={[
            "Chartered Management focuses on medical professionals and their families, so we are always aware of the latest tax rulings that might affect your position. With over a decade of experience assisting individual medical professionals and medical practices in maximizing their incomes and paying the appropriate amount of tax, we can also provide you with the best accounting advice. Our team of experts can assist with anything from simple work-related expenses to large medical equipment purchases.",
            "Medical accounting services provided by our CPA accountants are ethical, innovative, and proactive. The experience we have enables us to provide expert tax advice, prepare and lodge your tax returns efficiently, and maximize tax refunds. To enable new and established medical practices to accumulate wealth in the most tax-effective and protected manner, we provide specialist tax and accounting advice on optimum medical practice structures.",
          ]}
          //   boldDescription={[
          //     "Our hospitality accountants will help simplify your finances, minimize your tax obligations, and manage your cash flow.",
          //   ]}
          imageSrc="/medical.jpg"
          imageAlt="Medical"
        />

        <BulletList
          title="Businesses we provide accounting/tax services to:"
          bullets={bullets}
          paragraph={[
            "Count on us to solve your biggest accounting problems",
            "Audits by the Australian Tax Office are often prompted by inadequate or ineffective documentation, unreliable financial planning, and unreliable reporting. If you don’t get these things right, you could end up paying more in penalties than you would have otherwise. Our medical accountants and bookkeepers at TAS Tailored Accounting Solutions ensure that all of these bases are covered, giving you a comprehensive team of accounting experts.",
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

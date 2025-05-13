import React from "react";
import ImageHeader from "@/component/backgroundImageHeader/ImageHeader";
import DetailContent from "@/component/details/DetailContent";
import BulletList from "@/component/details/BulletList";
import ButtonText from "@/component/common/button/ButtonText";
import { IoIosCall } from "react-icons/io";
import HereForYou from "@/app/homesection/HereForYour";

const Page: React.FC = () => {
  const bullets: string[] = [
    "Information on starting a business.",
    "Advice on selecting suitable point-of-sale and bookkeeping software.",
    "Social networking strategies.",
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <ImageHeader
        title="Agriculture / Farming - Yara Valley"
        image="/agriculture.jpg"
        alt="Farming/agriculture"
      />
      <div className="max-w-lvw mx-auto px-6 py-6">
        <DetailContent
          title="Agricultural / Farming Accountants – Yarra Valley Specialists"
          subtitle="There is a great deal of diversity within the agribusiness sector in Australia. Farming, horticulture, aquaculture, wineries, value-added businesses, and exports are all aspects of agribusiness."
          paragraphs={[
            "Effective and profitable management of businesses is, however, becoming increasingly difficult. Traditional business planning is challenged by shifting tax legislation, fluctuating economic conditions, variable commodity prices, and extreme weather.",
            "Our advisors understand industry-specific risks and opportunities.",
          ]}
          imageSrc="/agriculture.jpg"
          imageAlt="Beauty industry professionals working"
        />

        <BulletList
          title="Our operations are reviewed from a strategic perspective, and advice is given on several issues, such as:"
          bullets={bullets}
          paragraph={[
            "We can offer clear, concise and relevant advice to help your business succeed, regardless of whether it's a family-run farm, a winery or a value-added export company.",
            "We have extensive experience with the accounting and commercial issues facing agribusiness operations. As a result, you can achieve your goals more quickly with TAS budgeting and forecasting services and advisory board services. We can also help you with succession planning to map out a clear picture for your business and your family, ensuring you can confidently navigate the future.",
            "With our extensive knowledge and state-of-the-art cloud-based technology solutions, we can assist you in overcoming the challenges and providing you with real-time strategic insights that ensure your business prospers in an unpredictable agribusiness environment.",
          ]}
        />

        <div className=" flex items-center justify-center py-6 mx-6">
          <ButtonText
            title="Call us today on 9849909999"
            icon={<IoIosCall />}
            requiredIcon
            className="w-full"
          />
        </div>
        <HereForYou />
      </div>
    </div>
  );
};

export default Page;

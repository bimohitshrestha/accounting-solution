import ParagraphHeader from "@/component/header/ParagraphHeader";
import React from "react";
import { AiOutlineSolution } from "react-icons/ai";
import { FaHandshake, FaRegLightbulb, FaUserFriends } from "react-icons/fa";
import { VscWorkspaceTrusted } from "react-icons/vsc";

const paragraphData = [
  {
    icon: VscWorkspaceTrusted,
    heading: "Trusted by Leading Brands",
    text: "We provide top-tier solutions chartered to your business needs, combining innovation, experience, and industry insight. Our clients choose us for our reliability, transparency, and proven track record.",
  },
  {
    icon: FaHandshake,
    heading: "Commitment to Excellence",
    text: "Our dedicated team works around the clock to deliver value and ensure customer satisfaction, setting us apart in a competitive market.",
  },
  {
    icon: FaRegLightbulb,
    heading: "Innovative Solutions",
    text: "We harness cutting-edge technology to craft chartered solutions that drive business growth and efficiency.",
  },
  {
    icon: FaUserFriends,
    heading: "Client-Centric Approach",
    text: "Our partnerships are built on understanding your goals and delivering beyond expectations.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="w-full px-4 mb-12">
      <ParagraphHeader title="Why Businesses Choose Us" />

      <div
        className="flex flex-col md:flex-row items-stretch mt-10 min-h-[600px] bg-cover bg-center p-4 sm:p-6 md:p-8"
        style={{
          backgroundImage: `url(/accountant.jpg)`,
        }}
      >
        <div className="md:w-1/2 w-full text-center md:text-left h-full bg-white bg-opacity-90 backdrop-blur-md p-6 sm:p-8 md:p-10 flex flex-col justify-center">
          <div className="relative z-10">
            {paragraphData.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="mb-8 last:mb-0">
                  <div className="flex items-start gap-6 sm:gap-8">
                    <Icon className="text-black w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0" />
                    <div className="flex flex-col max-w-full sm:max-w-md">
                      <h2 className="text-lg sm:text-xl font-semibold text-level mb-2 sm:mb-4">
                        {item.heading}
                      </h2>
                      <p className="text-gray-700 text-sm sm:text-base">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

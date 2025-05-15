"use client";
import ButtonText from "@/component/common/button/ButtonText";
import ParagraphHeader from "@/component/header/ParagraphHeader";
import React from "react";

const Introduces = () => {
  const handleButtonClick = () => {
    alert("You clicked the 'Learn More' button");
  };

  return (
    <section className="w-full px-4 py-8 text-gray-800 md:px-8 lg:px-16 space-y-6 md:space-y-8 mb-12">
      <ParagraphHeader
        title="Let Us Introduce Ourselves"
        description="Looking for top-notch support for your accounting, taxation, and bookkeeping needs? Look no further than Chartered Accounting Solutions! Based in Bayswater, nestled in Melbourne's Eastern suburbs, we proudly serve clients across the entire Melbourne area."
        className="font-light text-gray-900"
        containerClassName="space-y-2 md:space-y-3"
      />

      <div className="px-4 py-1  md:px-8 lg:px-16 space-y-6 md:space-y-4 text-gray-900 font-light">
        <p>
          {`  With over 25 years of experience in the accounting and bookkeeping
          industry, our dedicated team offers professional expertise you can
          trust. Whether you're a business owner seeking comprehensive
          accounting services or an individual aiming for optimal results in
          your tax return, we've got you covered. We prioritize your financial
          success, providing strategic and practical advice to help you minimize
          tax obligations and maximize profits. Rest assured, your accounts are
          in safe hands with our reliable professionals.`}
        </p>
        <p>
          {`
          
          No matter the nature of your business, choosing TAS means choosing
          excellence in accounting support. Let us tailor our services to meet
          your specific needs and exceed your expectations. Get in touch today
          to experience the difference firsthand!
          `}
        </p>
      </div>

      <div className=" text-center px-4 py-1  md:px-8 lg:px-16 space-y-6 md:space-y-1">
        <ButtonText
          title="Learn More"
          onClick={handleButtonClick}
          requiredIcon={true}
        />
      </div>
    </section>
  );
};

export default Introduces;

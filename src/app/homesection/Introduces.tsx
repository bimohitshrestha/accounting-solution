"use client";
import ButtonText from "@/component/common/button/ButtonText";
import ParagraphHeader from "@/component/header/ParagraphHeader";
import React from "react";

const Introduces = () => {
  const handleButtonClick = () => {
    alert("you clicked learn more button");
  };
  return (
    <div className=" max-w-lvw mx-auto mb-6">
      <main className="container mx-auto px-4 py-8">
        <ParagraphHeader
          title="Let Us Introduce ourselves"
          description="Looking for top-notch support for your accounting, taxation, and bookkeeping needs? Look no further than Tailored Accounting Solutions! Based in Bayswater, nestled in Melbourne's Eastern suburbs, we proudly serve clients across the entire Melbourne area.

"
          className="text-lg  font-bold text-gray-700"
        />

        <div className="flex flex-col max-w-max mx-auto items-start justify-center gap-10 text-gray-500 text-xl font-normal">
          <p className="">
            With over 25 years of experience in the accounting and bookkeeping
            industry, our dedicated team offers professional expertise you can
            trust. Whether you're a business owner seeking comprehensive
            accounting services or an individual aiming for optimal results in
            your tax return, we've got you covered. We prioritize your financial
            success, providing strategic and practical advice to help you
            minimise tax obligations and maximise profits. Rest assured; your
            accounts are in safe hands with our reliable professionals.
          </p>
          <p className="">
            No matter the nature of your business, choosing TAS means choosing
            excellence in accounting support. Let us tailor our services to meet
            your specific needs and exceed your expectations. Get in touch today
            to experience the difference firsthand!
          </p>
          <ButtonText
            title="Learn More"
            onClick={handleButtonClick}
            requiredIcon={false}
          />
        </div>
      </main>
    </div>
  );
};

export default Introduces;

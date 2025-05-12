import React from "react";
import { CgCopyright } from "react-icons/cg";

const Footer = () => {
  return (
    <div className="w-full h-auto px-6 py-8 flex flex-col items-center justify-center bg-level text-white">
      <p className="flex items-center text-lg sm:text-xl justify-center mb-2">
        <span className="mr-2">
          <CgCopyright />
        </span>
        <span>
          2025 CM | Kathmandu, Nepal | Chartered Accountant. All Rights Reserved
        </span>
      </p>
      <p className="text-xs sm:text-sm font-sans text-center max-w-lg">
        Liability limited by a scheme approved under Professional Standards
        Legislation
      </p>
    </div>
  );
};

export default Footer;

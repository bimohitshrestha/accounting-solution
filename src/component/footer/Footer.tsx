import React from "react";
import { CgCopyright } from "react-icons/cg";

const Footer = () => {
  return (
    <div className="w-full h-20 flex flex-col items-center justify-center bg-level text-white">
      <p className="flex items-center text-xl justify-center">
        <span>
          <CgCopyright />
        </span>
        2025 CM | Kathmandu ,Nepal | Chartered Accountant. All Rights Reserved
      </p>
      <p className="text-sm font-sans">
        Liability limited by a scheme approved under Professional Standards
        Legislation
      </p>
    </div>
  );
};

export default Footer;

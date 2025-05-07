import React, { ReactNode } from "react";
import { BiPhone } from "react-icons/bi";

interface LinkButtonProps {
  link: string;
  title: string;
  icon: ReactNode;
}

const LinkButton = ({ link, title, icon }: LinkButtonProps) => {
  return (
    <a
      href={link}
      target="_blank"
      className="bg-level w-full  text-white py-2 px-4 rounded flex items-center justify-center space-x-3 transition-colors duration-200 "
    >
      {icon}
      <span className="text-sm">{title}</span>
    </a>
  );
};

export default LinkButton;

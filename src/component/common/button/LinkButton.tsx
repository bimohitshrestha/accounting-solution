import React, { ReactNode } from "react";
import { BiPhone } from "react-icons/bi";

interface LinkButtonProps {
  link: string;
  title: string;
  icon: ReactNode;
  onClick?: () => void;
}

const LinkButton = ({ link, title, icon, onClick }: LinkButtonProps) => {
  return (
    <a
      href={link}
      // target="_blank"
      className="bg-level w-full  text-white py-3 px-6 rounded flex items-center justify-center space-x-3 transition-colors duration-200 "
      onClick={onClick}
    >
      {icon}
      <span className="text-sm">{title}</span>
    </a>
  );
};

export default LinkButton;

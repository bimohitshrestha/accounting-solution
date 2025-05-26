import React from "react";

interface ButtonTextProps {
  title: string;
  icon?: React.ReactNode;
  link?: string;

  onClick?: () => void;
  requiredIcon: boolean;
  className?: string;
}

const ButtonText: React.FC<ButtonTextProps> = ({
  title,
  onClick,
  link,

  icon,
  requiredIcon,
  className,
}) => (
  <a
    href={link}
    className={`flex items-center justify-center gap-2 px-4 py-2 text-base rounded-lg bg-level text-white cursor-pointer ${className}`}
    onClick={onClick}
  >
    {requiredIcon && icon}
    {title}
  </a>
);

export default ButtonText;

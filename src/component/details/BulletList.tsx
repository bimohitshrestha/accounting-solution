import React from "react";
import { MdCheckBox } from "react-icons/md";

type BulletListProps = {
  title?: string;
  bullets: string[];
  boldDescription?: string[];
  description?: string;
  paragraph?: string[];
};

const BulletList: React.FC<BulletListProps> = ({
  title,
  boldDescription,
  description,
  bullets,
  paragraph,
}) => {
  return (
    <div className="w-full px-4 py-8 text-gray-800 md:px-8 lg:px-16 space-y-6 md:space-y-8">
      {title && (
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-level">
          {title}
        </h1>
      )}

      {description && (
        <p className="text-sm md:text-base text-gray-900 font-light">
          {description}
        </p>
      )}

      {paragraph && (
        <div className="space-y-4">
          {paragraph.map((text, index) => (
            <p
              key={index}
              className="text-sm md:text-base text-gray-900 font-light"
            >
              {text}
            </p>
          ))}
        </div>
      )}

      {boldDescription && (
        <div className="space-y-3">
          {boldDescription.map((text, index) => (
            <h3
              key={index}
              className="text-base md:text-lg font-bold text-gray-900"
            >
              {text}
            </h3>
          ))}
        </div>
      )}

      <ul className="space-y-3 pl-2">
        {bullets.map((bullet, index) => (
          <li
            key={index}
            className="flex items-start gap-3 text-sm md:text-base"
          >
            <MdCheckBox className="text-xl mt-1 text-[#310891]" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BulletList;

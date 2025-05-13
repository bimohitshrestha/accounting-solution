import React from "react";
import { MdCheckBox } from "react-icons/md";

type Props = {
  title: string;
  subtitle: string;
  paragraphs: string[];
  bullets?: string[];
  boldDescription?: string[];
  imageSrc: string;
  imageAlt?: string;
};

const DetailContent: React.FC<Props> = ({
  title,
  subtitle,
  paragraphs,
  boldDescription,
  bullets,
  imageSrc,
  imageAlt,
}) => {
  return (
    <div className="w-full px-4 py-8 text-gray-800 md:px-8 lg:px-16 space-y-6 md:space-y-8">
      <div className="space-y-2 md:space-y-3">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-level">
          {title}
        </h1>
        <h2 className="text-lg sm:text-xl md:text-xl font-normal text-[#310891]">
          {subtitle}
        </h2>
      </div>

      <div className="space-y-4">
        {paragraphs.map((text, index) => (
          <p
            key={index}
            className="text-sm md:text-base text-gray-900 font-light"
          >
            {text};
          </p>
        ))}
      </div>

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

      {bullets && (
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
      )}

      <div className="pt-4">
        <img
          src={imageSrc}
          alt={imageAlt || "Beauty industry illustration"}
          className="w-full h-64 sm:h-80 md:h-[500px] object-cover object-center rounded-md shadow-md"
        />
      </div>
    </div>
  );
};

export default DetailContent;

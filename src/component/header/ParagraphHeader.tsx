import React from "react";

interface ParagraphHeaderInterface {
  title: string;
  description?: string;
  className?: string;
  containerClassName?: string;
}

const ParagraphHeader = ({
  title,
  description,
  className,
  containerClassName = "",
}: ParagraphHeaderInterface) => {
  return (
    <div
      className={`w-full px-4 py-8 text-gray-800 md:px-8 lg:px-16 space-y-6 md:space-y-8 ${containerClassName}`}
    >
      <div className="space-y-2 md:space-y-3 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-level">
          {title}
        </h1>

        {description && (
          <p
            className={`text-sm md:text-base text-gray-900 font-light ${
              className || ""
            }`}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default ParagraphHeader;

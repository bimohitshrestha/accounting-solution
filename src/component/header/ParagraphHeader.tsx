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
  containerClassName = "mb-12",
}: ParagraphHeaderInterface) => {
  return (
    <div>
      <div className={`${containerClassName}`}>
        <h1 className="text-xl sm:text-2xl md:text-4xl text-center font-normal text-level mb-4 md:mb-8">
          {title}
        </h1>

        {description && (
          <p
            className={`text-sm sm:text-base md:text-lg text-center max-w-max mx-auto ${
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

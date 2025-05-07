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
      <div className={containerClassName}>
        <h1 className="text-xl text-center md:text-3xl font-medium text-primary mb-6">
          {title}
        </h1>

        <p className={`w-full ${className || ""}`}>{description}</p>
      </div>
    </div>
  );
};

export default ParagraphHeader;

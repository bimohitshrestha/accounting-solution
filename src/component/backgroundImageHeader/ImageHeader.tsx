import React from "react";

interface ImageHeaderInterface {
  image: string;
  alt?: string;
  title?: string;
  className?: string;
}

const ImageHeader = ({
  image,
  title,
  className,
  alt,
}: ImageHeaderInterface) => {
  return (
    <div className="">
      <div className="relative w-full h-[400px] bg-black">
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${image})`,
          }}
          role="img"
          aria-label={alt}
        />

        <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4">
          {title && (
            <p
              className={`text-2xl md:text-3xl lg:text-4xl text-center w-full bg-level py-4 px-8 font-light mb-8 ${className}`}
            >
              {title}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageHeader;

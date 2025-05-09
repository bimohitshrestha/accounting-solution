import React from "react";

interface ImageHeaderInterface {
  image: string;
  title: string;
  className?: string;
}
const ImageHeader = ({ image, title, className }: ImageHeaderInterface) => {
  return (
    <div className="">
      <div className="relative w-full h-[350px] ">
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${image})`,
          }}
        />

        <div className="absolute inset-0 flex flex-col justify-center items-center  text-white px-4">
          <p
            className={`text-2xl md:text-3xl lg:text-4xl text-center w-full bg-green-500 py-4 px-8 font-light mb-8 ${className}`}
          >
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageHeader;

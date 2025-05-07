"use client";
import React, { useState } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import ButtonText from "../common/button/ButtonText";
import { FaInstagram } from "react-icons/fa";

const images = [
  "https://images.pexels.com/photos/15224943/pexels-photo-15224943/free-photo-of-waves-crashing-on-the-shore.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/15224943/pexels-photo-15224943/free-photo-of-waves-crashing-on-the-shore.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/15224943/pexels-photo-15224943/free-photo-of-waves-crashing-on-the-shore.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/15224943/pexels-photo-15224943/free-photo-of-waves-crashing-on-the-shore.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/15224943/pexels-photo-15224943/free-photo-of-waves-crashing-on-the-shore.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/15224943/pexels-photo-15224943/free-photo-of-waves-crashing-on-the-shore.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/15224943/pexels-photo-15224943/free-photo-of-waves-crashing-on-the-shore.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/15224943/pexels-photo-15224943/free-photo-of-waves-crashing-on-the-shore.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/15224943/pexels-photo-15224943/free-photo-of-waves-crashing-on-the-shore.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/15224943/pexels-photo-15224943/free-photo-of-waves-crashing-on-the-shore.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/15224943/pexels-photo-15224943/free-photo-of-waves-crashing-on-the-shore.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
];

const IMAGES_PER_PAGE = 6;

const ImageCarousel = () => {
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    const newIndex = startIndex + IMAGES_PER_PAGE;
    if (newIndex < images.length) {
      setStartIndex(newIndex);
    }
  };

  const handlePrev = () => {
    const newIndex = startIndex - IMAGES_PER_PAGE;
    if (newIndex >= 0) {
      setStartIndex(newIndex);
    }
  };

  const visibleImages = images.slice(startIndex, startIndex + IMAGES_PER_PAGE);

  return (
    <div className="relative w-full py-6">
      <div className="relative px-4 max-w-max mx-auto overflow-hidden">
        <div className="flex gap-4 transition-all duration-300">
          {visibleImages.map((src, index) => (
            <div
              key={startIndex + index}
              className="flex-shrink-0 w-52 h-60 overflow-hidden rounded-md shadow-md"
            >
              <img
                src={src}
                alt={`Image ${startIndex + index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {startIndex > 0 && (
          <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 text-gray-800 hover:bg-opacity-90  rounded-full shadow-md"
          >
            <GrFormPrevious className="w-6 h-6" />
          </button>
        )}

        {startIndex + IMAGES_PER_PAGE < images.length && (
          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 text-gray-800 hover:bg-opacity-90 p-2 rounded-full shadow-md"
          >
            <GrFormNext className="w-6 h-6" />
          </button>
        )}
      </div>
      <div className="flex items-center justify-center mt-6">
        <ButtonText
          title="Follow Us on Instagram"
          icon={<FaInstagram />}
          requiredIcon
        />
      </div>
    </div>
  );
};

export default ImageCarousel;

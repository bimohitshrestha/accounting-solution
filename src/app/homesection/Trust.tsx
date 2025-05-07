"use client";
import ButtonText from "@/component/common/button/ButtonText";
import ParagraphHeader from "@/component/header/ParagraphHeader";
import React, { useState } from "react";
import { BsGoogle } from "react-icons/bs";
import { FaCheckCircle, FaStar } from "react-icons/fa";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { RxAvatar } from "react-icons/rx";

const testimonials = [
  {
    name: "Bimohit Shrestha",
    time: "1 Year Ago",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium atque eum dolor vero quis repudiandae, at distinctio porro! Repudiandae rem necessitatibus hic tenetur et, voluptas eligendi. Accusantium deleniti nesciunt iste.",
  },
  {
    name: "Kushal Chapagain",
    time: "1 Year Ago",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium atque eum dolor vero quis repudiandae, at distinctio porro! Repudiandae rem necessitatibus hic tenetur et, voluptas eligendi. Accusantium deleniti nesciunt iste.",
  },
  {
    name: "Aayush Karna",
    time: "1 Year Ago",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium atque eum dolor vero quis repudiandae, at distinctio porro! Repudiandae rem necessitatibus hic tenetur et, voluptas eligendi. Accusantium deleniti nesciunt iste.",
  },
  {
    name: "Amit Chaudhary",
    time: "1 Year Ago",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium atque eum dolor vero quis repudiandae, at distinctio porro! Repudiandae rem necessitatibus hic tenetur et, voluptas eligendi. Accusantium deleniti nesciunt iste.",
  },
  {
    name: "Avinna Maharjan",
    time: "1 Year Ago",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium atque eum dolor vero quis repudiandae, at distinctio porro! Repudiandae rem necessitatibus hic tenetur et, voluptas eligendi. Accusantium deleniti nesciunt iste.",
  },
  {
    name: "Sumit Thokar",
    time: "1 Year Ago",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium atque eum dolor vero quis repudiandae, at distinctio porro! Repudiandae rem necessitatibus hic tenetur et, voluptas eligendi. Accusantium deleniti nesciunt iste.",
  },
  {
    name: "Mahima Chaudhary",
    time: "1 Year Ago",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium atque eum dolor vero quis repudiandae, at distinctio porro! Repudiandae rem necessitatibus hic tenetur et, voluptas eligendi. Accusantium deleniti nesciunt iste.",
  },
  {
    name: "Jebin Dangol",
    time: "1 Year Ago",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium atque eum dolor vero quis repudiandae, at distinctio porro! Repudiandae rem necessitatibus hic tenetur et, voluptas eligendi. Accusantium deleniti nesciunt iste.",
  },
  {
    name: "Aakshya Kumar Kc",
    time: "1 Year Ago",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium atque eum dolor vero quis repudiandae, at distinctio porro! Repudiandae rem necessitatibus hic tenetur et, voluptas eligendi. Accusantium deleniti nesciunt iste.",
  },
];

const Testimonial_Per_Page = 5;

const Trust = () => {
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    const newIndex = startIndex + Testimonial_Per_Page;
    if (newIndex < testimonials.length) {
      setStartIndex(newIndex);
    }
  };

  const handlePrev = () => {
    const newIndex = startIndex - Testimonial_Per_Page;
    if (newIndex >= 0) {
      setStartIndex(newIndex);
    }
  };

  const visibleTestimonials = testimonials.slice(
    startIndex,
    startIndex + Testimonial_Per_Page
  );

  return (
    <div className="max-w-lvw mx-auto bg-gray-100">
      <main className="container mx-auto px-4 py-8">
        <ParagraphHeader
          title="A Trusted Partner For Businesses"
          description="What our customers say"
          className="text-lg text-black font-bold max-w-max mx-auto"
        />

        <div className="relative grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-5 mx-10 mt-8">
          {visibleTestimonials.map((testimonial, index) => (
            <div key={index} className="bg-slate-100 rounded-lg p-6 shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <RxAvatar className="w-10 h-10 text-black" />
                <div>
                  <h2 className="flex items-center gap-2 text-sm font-semibold text-black">
                    {testimonial.name}
                    <FaCheckCircle className="text-blue-600" />
                  </h2>
                  <p className="text-gray-700 text-sm">{testimonial.time}</p>
                </div>
              </div>
              <div className="flex items-start text-yellow-500 mb-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="text-gray-800 text-base line-clamp-3">
                "{testimonial.message}"
              </p>
            </div>
          ))}

          {startIndex > 0 && (
            <button
              onClick={handlePrev}
              className="absolute left-1 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 text-gray-800 hover:bg-opacity-90 rounded-full shadow-md p-2"
            >
              <GrFormPrevious className="w-4 h-4" />
            </button>
          )}

          {startIndex + Testimonial_Per_Page < testimonials.length && (
            <button
              onClick={handleNext}
              className="absolute right-1 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 text-gray-800 hover:bg-opacity-90 rounded-full shadow-md p-2"
            >
              <GrFormNext className="w-4 h-4" />
            </button>
          )}
        </div>
        <div className="flex mx-10 mt-5">
          <ButtonText title="see more" icon={<BsGoogle />} requiredIcon />
        </div>
      </main>
    </div>
  );
};

export default Trust;

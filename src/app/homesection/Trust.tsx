"use client";
import ButtonText from "@/component/common/button/ButtonText";
import ParagraphHeader from "@/component/header/ParagraphHeader";
import TestimonialModal from "@/component/modal/TestimonialModal";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import { getTestimonialList } from "@/lib/features/services/serviceAction";
import Image from "next/image";
import React, { useEffect, useState, useMemo } from "react";
import { BsGoogle } from "react-icons/bs";
import { FaCheckCircle, FaStar } from "react-icons/fa";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const Testimonial_Per_Page = 4;

const Trust = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState<any>(null);

  const { TestimonialList } = useAppSelector((state) => state.service);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTestimonialList());
  }, []);

  const visibleTestimonials = useMemo(
    () => TestimonialList.slice(startIndex, startIndex + Testimonial_Per_Page),
    [startIndex, TestimonialList]
  );

  const handleNext = () => {
    if (startIndex + Testimonial_Per_Page < TestimonialList.length) {
      setStartIndex((prev) => prev + Testimonial_Per_Page);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex((prev) => prev - Testimonial_Per_Page);
    }
  };

  const openModal = (testimonial: any) => {
    setSelectedTestimonial(testimonial);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTestimonial(null);
  };

  return (
    <div className="w-full mx-auto bg-gray-100 relative">
      <main className="container mx-auto px-6 py-12">
        <ParagraphHeader
          title="A Trusted Partner For Businesses"
          description="What our customers say"
          className="text-3xl text-gray-900 font-bold text-center mb-12"
        />

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto mt-8">
          {visibleTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
            >
              <div className="flex items-center gap-5 mb-5">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-gray-200">
                  <Image
                    src={testimonial.image || "/accountant.jpg"}
                    alt={`${testimonial.client_name}'s avatar`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h2 className="flex items-center gap-2 text-base font-semibold text-gray-800">
                    {testimonial.client_name}
                    <FaCheckCircle className="text-blue-600" />
                  </h2>
                  <p className="text-sm text-gray-500">
                    {testimonial.company} •{" "}
                    {new Date(testimonial.created_at).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div className="flex items-center text-yellow-500 mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p
                className="text-gray-700 text-base line-clamp-2"
                dangerouslySetInnerHTML={{
                  __html: testimonial.content,
                }}
              />
              <button
                onClick={() => openModal(testimonial)}
                className="text-blue-600 hover:text-blue-800 mt-4 font-medium text-sm hover:underline"
              >
                Read More
              </button>
            </div>
          ))}

          {startIndex > 0 && (
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/3 transform -translate-y-1/2 bg-white text-gray-800 hover:bg-gray-200 p-3 rounded-full shadow-md z-10"
            >
              <GrFormPrevious className="w-6 h-6" />
            </button>
          )}

          {startIndex + Testimonial_Per_Page < TestimonialList.length && (
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 hover:bg-gray-200 p-3 rounded-full shadow-md z-10"
            >
              <GrFormNext className="w-6 h-6" />
            </button>
          )}
        </div>

        <div className="flex justify-center mt-12">
          <ButtonText title="See More" icon={<BsGoogle />} requiredIcon />
        </div>
      </main>
      <TestimonialModal
        isOpen={isModalOpen}
        onClose={closeModal}
        content={selectedTestimonial?.content || ""}
        clientName={selectedTestimonial?.client_name || ""}
        company={selectedTestimonial?.company || ""}
        createdAt={selectedTestimonial?.created_at || ""}
        rating={5}
        image={selectedTestimonial?.image || "/accountant.jpg"}
      />
    </div>
  );
};

export default Trust;

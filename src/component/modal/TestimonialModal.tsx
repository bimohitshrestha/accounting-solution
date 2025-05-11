import React from "react";
import { FaStar } from "react-icons/fa";
import Image from "next/image";

type TestimonialModalProps = {
  isOpen: boolean;
  onClose: () => void;
  content: string;
  clientName: string;
  company: string;
  createdAt: string;
  rating: number;
  image: string;
};

const TestimonialModal = ({
  isOpen,
  onClose,
  content,
  clientName,
  company,
  createdAt,
  rating,
  image,
}: TestimonialModalProps) => {
  if (!isOpen) return null;

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <FaStar
          key={i}
          className={`text-yellow-500 ${
            i < rating ? "fill-current" : "text-gray-300"
          }`}
        />
      );
    }
    return stars;
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl p-8 w-full max-w-xl mx-auto shadow-xl transform scale-100 transition-all duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-gray-200 mr-4">
              <Image
                src={image}
                alt={`${clientName}'s avatar`}
                layout="fill"
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                {clientName}
              </h2>
              <p className="text-sm text-gray-600">
                {company} • {new Date(createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            &times;
          </button>
        </div>

        <div className="flex items-center text-yellow-500 mt-4">
          {renderStars()}
        </div>

        <div className="mt-6 text-gray-800">
          <p dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </div>
    </div>
  );
};

export default TestimonialModal;

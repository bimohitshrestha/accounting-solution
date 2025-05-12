"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import ImageHeader from "@/component/backgroundImageHeader/ImageHeader";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import { getFaqList } from "@/lib/features/faqs/faqAction";
import HereForYou from "@/app/homesection/HereForYour";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import PreLoader from "@/component/loading/PreLoader";

const Page = () => {
  const dispatch = useAppDispatch();
  const { FaqList, isLoadingFaq } = useAppSelector((state) => state.faqs);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [expandAll, setExpandAll] = useState(false);

  useEffect(() => {
    dispatch(getFaqList());
  }, []);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const categories = FaqList?.length
    ? [...new Set(FaqList.map((faq: any) => faq.category?.name))].filter(
        Boolean
      )
    : [];

  const filteredFaqs = selectedCategory
    ? FaqList?.filter((faq: any) => faq.category?.name === selectedCategory)
    : FaqList;

  const toggleExpandAll = () => {
    setExpandAll(!expandAll);
    if (!expandAll) {
      setOpenIndex(null);
    }
  };

  if (isLoadingFaq) {
    return <PreLoader name="Loading Faqs...." />;
  }

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <ImageHeader title="Frequently Asked Questions" image="/accountant.jpg" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to the most common questions about our services and
            accounting solutions.
          </p>
        </div>

        {categories.length > 0 && (
          <div className="mb-10">
            <div className="flex flex-wrap justify-center gap-3">
              <div className="flex gap-6 items-center justify-center">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`px-4 py-2 rounded-full transition-all ${
                    selectedCategory === null
                      ? "bg-level text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  All Categories
                </button>
                {categories.map((category: string) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full transition-all ${
                      selectedCategory === category
                        ? "bg-level text-white shadow-md"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {filteredFaqs?.length > 0 && (
              <div className="text-center mt-8">
                <button
                  onClick={toggleExpandAll}
                  className="px-6 py-3 bg-level text-white rounded-md  transition-all flex items-center justify-center space-x-2"
                >
                  <span>{expandAll ? "Collapse All" : "Expand All"}</span>
                  <div>
                    {expandAll ? (
                      <FiChevronUp size={18} />
                    ) : (
                      <FiChevronDown size={18} />
                    )}
                  </div>
                </button>
              </div>
            )}
          </div>
        )}

        {filteredFaqs?.length === 0 ? (
          <div className="text-center p-12 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="text-gray-400 text-6xl mb-4">?</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              No FAQs Available
            </h3>
            <p className="text-gray-600">
              {selectedCategory
                ? `There are no FAQs in the "${selectedCategory}" category.`
                : "Check back later for frequently asked questions."}
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredFaqs.map((faq: any, index: number) => {
              const isOpen = expandAll || openIndex === index;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex justify-between items-center p-6 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
                  >
                    <div className="pr-8">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {faq.question}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1 flex items-center">
                        {faq.category?.name && (
                          <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mr-2">
                            {faq.category.name}
                          </span>
                        )}
                        <span>
                          {new Date(faq.created_at).toLocaleDateString(
                            undefined,
                            {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            }
                          )}
                        </span>
                      </p>
                    </div>
                    <div
                      className={`text-blue-600 transition-transform duration-300 ${
                        isOpen ? "rotate-360" : ""
                      }`}
                    >
                      {isOpen ? (
                        <FiChevronUp size={24} />
                      ) : (
                        <FiChevronDown size={24} />
                      )}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="overflow-hidden">
                      <div className="px-6 pb-6 pt-2 ">
                        <div
                          className="prose prose-blue max-w-none custom-section-container text-gray-700"
                          dangerouslySetInnerHTML={{ __html: faq.answer }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

      <HereForYou />
    </div>
  );
};

export default Page;

"use client";

import React, { useEffect } from "react";
import ImageHeader from "@/component/backgroundImageHeader/ImageHeader";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import { getNewsList } from "@/lib/features/newsletter/newsAction";
import Link from "next/link";
import PreLoader from "@/component/loading/PreLoader";
import Subscriber from "@/component/subscriber/Subscriber";

const Page = () => {
  const dispatch = useAppDispatch();
  const { NewsList, isloadingNewsList, isError } = useAppSelector(
    (state) => state.news
  );
  useEffect(() => {
    dispatch(getNewsList());
  }, []);

  if (isloadingNewsList) {
    return <PreLoader name="Loading newsletter...." />;
  }

  if (isError) {
    return (
      <div className="p-8 text-center text-red-600">
        <span className="text-xl font-semibold">
          Failed to load news letter. Please try again later.
        </span>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen pb-12 ">
      <ImageHeader title="Newsletter" image="/accountant.jpg" />

      <Subscriber />

      <div className="max-w-7xl mx-auto  py-10 p-6 md:p-0 mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {NewsList.map((news, index) => (
            <Link href={`/newsletter/${news.slug}`} key={index}>
              <div
                key={news.id}
                className="bg-white h-full flex flex-col justify-between rounded-lg shadow-md hover:shadow-lg transition p-6 hover:border-1 hover:text-blue-100"
              >
                <div className="flex-grow">
                  <h2 className="text-lg font-semibold text-gray-800 mb-1 hover:text-level">
                    {news.title}
                  </h2>
                  <p className="text-xs text-gray-500 mb-2">
                    Created: {new Date(news.created_at).toLocaleDateString()}
                  </p>

                  <div
                    className="prose prose-sm text-gray-500 text-base line-clamp-3 max-w-none mb-4"
                    dangerouslySetInnerHTML={{
                      __html: news.content || "<p>No content available</p>",
                    }}
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;

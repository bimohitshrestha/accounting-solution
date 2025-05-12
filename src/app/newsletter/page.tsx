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
  const { NewsList, isloadingNewsList } = useAppSelector((state) => state.news);
  useEffect(() => {
    dispatch(getNewsList());
  }, []);

  if (isloadingNewsList) {
    return <PreLoader name="Loading newsletter...." />;
  }

  return (
    <div className="bg-gray-100 min-h-screen pb-12">
      <ImageHeader title="Newsletter" image="/accountant.jpg" />

      <Subscriber />

      <div className="max-w-7xl mx-auto  py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {NewsList.map((news) => (
            <div
              key={news.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-6 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-lg font-semibold text-gray-800 mb-1">
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

              <div className="mt-6 flex items-center justify-end gap-4 text-sm text-gray-600">
                <div className="space-x-4">
                  <Link
                    href={`/newsletter/${news.slug}`}
                    className="text-blue-600 hover:underline"
                  >
                    View
                  </Link>
                  {!news.sent_at && (
                    <button className="bg-level text-white px-4 py-2 rounded">
                      Send
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;

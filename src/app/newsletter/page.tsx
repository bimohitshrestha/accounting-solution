"use client";

import React, { useEffect } from "react";
import ImageHeader from "@/component/backgroundImageHeader/ImageHeader";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import { getNewsList } from "@/lib/features/newsletter/newsAction";
import Link from "next/link";

const Page = () => {
  const dispatch = useAppDispatch();
  const { NewsList, isloadingNewsList } = useAppSelector((state) => state.news);
  useEffect(() => {
    dispatch(getNewsList());
  }, []);

  // if (isloadingNewsList) {
  //   return (
  //     <div className="p-8 text-center text-gray-500">
  //       Loading newsletters...
  //     </div>
  //   );
  // }
  {
    isloadingNewsList && (
      <div className="p-8 text-center text-gray-500">
        Loading newsletters...
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen pb-12">
      <ImageHeader title="Newsletter" image="/accountant.jpg" />

      <div className="max-w-7xl mx-auto px-4 py-10">
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

                <div className="mt-4">
                  <h3 className="font-semibold text-gray-700 mb-2 text-sm">
                    Subscribers
                  </h3>
                  {news.subscribers?.length > 0 ? (
                    <div className="overflow-auto border rounded">
                      <table className="min-w-full text-xs text-left text-gray-600">
                        <thead className="bg-gray-100 text-gray-700">
                          <tr>
                            <th className="px-3 py-2">Name</th>
                            <th className="px-3 py-2">Email</th>
                            <th className="px-3 py-2">Subscribed</th>
                          </tr>
                        </thead>
                        <tbody>
                          {news.subscribers.map((subscriber) => (
                            <tr key={subscriber.id} className="border-t">
                              <td className="px-3 py-2">
                                {subscriber.first_name} {subscriber.last_name}
                              </td>
                              <td className="px-3 py-2">{subscriber.email}</td>
                              <td className="px-3 py-2">
                                {subscriber.is_subscribed ? "Yes" : "No"}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <p className="text-sm text-gray-500">No subscribers yet.</p>
                  )}
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between text-sm text-gray-600">
                <span>Subscribers: {news.subscriber_count}</span>
                <div className="space-x-2">
                  <Link
                    href={`/newsletter/${news.slug}`}
                    className="text-blue-600 hover:underline"
                  >
                    View
                  </Link>
                  {!news.sent_at && (
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded">
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

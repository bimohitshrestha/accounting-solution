"use client";

import React, { useEffect } from "react";
import ImageHeader from "@/component/backgroundImageHeader/ImageHeader";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import { getBlogList } from "@/lib/features/blog/blogAction";
import BlogCard from "@/component/card/BlogCard";

const Page = () => {
  const dispatch = useAppDispatch();
  const { BlogList, isLoadingBlogList, isError } = useAppSelector(
    (state) => state.blog
  );

  useEffect(() => {
    dispatch(getBlogList());
  }, [dispatch]);

  {
    isLoadingBlogList && (
      <div className="p-8 text-center text-gray-500">Loading Blog List...</div>
    );
  }

  {
    isError && (
      <div className="p-8 text-center text-red-600">
        <span className="text-xl font-semibold">
          Failed to load blog posts. Please try again later.
        </span>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen pb-12">
      <ImageHeader title="Blog" image="/accountant.jpg" />

      <div className="max-w-7xl mx-auto px-4 mt-8 space-y-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {BlogList?.length ? (
            BlogList.map((blog) => (
              <BlogCard
                key={blog.id}
                href={blog.slug}
                title={blog.title}
                author={blog.author?.name || "Unknown Author"}
                content={blog.content}
                date={blog.created_at}
                image={blog.hero_image}
              />
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500">
              No blog posts available.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;

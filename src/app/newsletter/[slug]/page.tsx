import React from "react";
import ImageHeader from "@/component/backgroundImageHeader/ImageHeader";

import Image from "next/image";
import Link from "next/link";

import { IoArrowBack } from "react-icons/io5";
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Metadata } from "next";
import { BlogItem } from "@/lib/features/blog/blogInterface";
import { NewsItem } from "@/lib/features/newsletter/newsInterface";
type tParams = Promise<{ slug: string }>;

export async function generateMetadata({
  params,
}: {
  params: tParams;
}): Promise<Metadata> {
  const param = await params;

  const response = await fetch("http://192.168.100.91:8088/api/newsletters/");
  const news: NewsItem[] = await response.json();
  const post = news.find((item) => item.slug === param.slug);

  if (!post) {
    return {
      title: "News not found",
      description: "The blog post you are looking for is not available.",
    };
  }

  return {
    title: post.title ? post.title : "News Post",
    // description: post. ?? "Read this interesting blog post.",
    openGraph: {
      title: post.title ?? "Blog Post",
      // description: blog.meta_description ?? "Read this interesting blog post.",
      // images: [post. || ""],
    },
    twitter: {
      title: post.title ?? "News Post",
      // description: blog.meta_description ?? "Read this interesting blog post.",
      // images: [blog.hero_image || ""],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const param = await params;
  const response = await fetch("http://192.168.100.91:8088/api/newsletters/");
  const news: NewsItem[] = await response.json();
  const post = news.find((item) => item.slug === param.slug);

  if (!post) {
    return "blog not found";
  }

  return (
    <div className="bg-gray-50 min-h-screen pb-12">
      <ImageHeader
        title={post?.title ?? "unable to load title"}
        image="/accountant.jpg"
      />
      <div className="max-w-7xl mx-auto px-4 mt-12">
        <div className="bg-white p-8 rounded-lg shadow-xl">
          {/* {blog?.hero_image && (
            <div className="relative w-full h-96 mb-6">
              <Image
                src={blog.hero_image}
                alt={blog.hero_image_alt_text || "Blog Hero Image"}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                className="rounded-lg"
              />
            </div>
          )} */}

          <h1 className="text-4xl font-semibold text-gray-800 mb-4">
            {post?.title}
          </h1>

          {/* <p className="text-sm text-gray-500 mb-6">
            <span>Category: {post?.sent_at}</span>
          </p> */}

          <div className="flex items-center space-x-6 mb-8 border-b pb-6">
            <div>
              <p className="font-medium text-gray-800">
                {" "}
                {new Date(post.created_at).toLocaleDateString()}
              </p>
            </div>
          </div>

          <div
            className="prose max-w-none mb-8 text-gray-700 custom-section-container"
            dangerouslySetInnerHTML={{
              __html: post?.content ?? "unable to find content",
            }}
          />

          <div className="mt-8 pt-6 border-t">
            <Link
              href="/newsletter"
              className="inline-flex items-center gap-3 text-blue-600 hover:text-blue-800"
            >
              <IoArrowBack />
              Back to all posts
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

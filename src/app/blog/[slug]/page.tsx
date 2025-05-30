import React from "react";
import ImageHeader from "@/component/backgroundImageHeader/ImageHeader";
import Image from "next/image";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Metadata } from "next";
import { BlogItem } from "@/lib/features/blog/blogInterface";
import { BsTwitterX } from "react-icons/bs";

type tParams = Promise<{ slug: string }>;

export async function generateMetadata({
  params,
}: {
  params: tParams;
}): Promise<Metadata> {
  const param = await params;
  const response = await fetch("http://192.168.100.91:8088/api/blogs/");
  const blogs: BlogItem[] = await response.json();
  const blog = blogs.find((item) => item.slug === param.slug);

  if (!blog) {
    return {
      title: "Blog not found",
      description: "The blog post you are looking for is not available.",
    };
  }

  return {
    title: blog.meta_title || "Blog Post",
    description: blog.meta_description || "Read this interesting blog post.",
    openGraph: {
      title: blog.title || "Blog Post",
      description: blog.meta_description || "Read this interesting blog post.",
      images: [blog.hero_image || ""],
    },
    twitter: {
      title: blog.title ?? "Blog Post",
      description: blog.meta_description || "Read this interesting blog post.",
      images: [blog.hero_image || ""],
    },
  };
}

function parseContent(html: string): string {
  return html.replace(/<oembed url="(.*?)"><\/oembed>/g, (match, url) => {
    if (url.includes("youtube.com")) {
      const videoId = new URL(url).searchParams.get("v");
      return `<div class="video-embed-container"><iframe width="100%" height="600" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe></div>`;
    }
    return match;
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const param = await params;
  const data = await fetch("http://192.168.100.91:8088/api/blogs/");
  const posts: BlogItem[] = await data.json();
  const blog = posts.find((item) => item.slug === param.slug);

  if (!blog) return "Blog not found";

  const getSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case "twitter":
        return <BsTwitterX className="w-5 h-5 text-black" />;
      case "facebook":
        return <FaFacebook className="w-5 h-5 text-blue-500" />;
      case "linkedin":
        return <FaLinkedin className="w-5 h-5 text-blue-700" />;
      case "instagram":
        return <FaInstagram className="w-5 h-5 text-rose-600" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-12">
      <ImageHeader
        title={blog?.title ?? "unable to load title"}
        image="/accountant.jpg"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-xl">
          {blog?.hero_image && (
            <div className="relative w-full h-64 sm:h-96 lg:h-[600px] mb-6">
              <Image
                src={blog.hero_image}
                alt={blog.hero_image_alt_text || "Blog Hero Image"}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                className="rounded-lg"
              />
            </div>
          )}

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 mb-4">
            {blog?.title}
          </h1>

          <p className="text-sm text-gray-500 mb-6">
            <span>Category: {blog?.category?.name}</span>
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8 border-b pb-6">
            <div>
              <p className="font-medium text-gray-800">{blog?.author.name}</p>
              <p className="text-xs text-gray-400">
                {blog?.author.designation}
              </p>
            </div>
          </div>

          <div
            className="prose max-w-none mb-8 text-gray-700 custom-section-container"
            dangerouslySetInnerHTML={{
              __html: parseContent(blog?.content ?? "unable to find content"),
            }}
          />

          {blog.highlights && (
            <div
              className=" custom-section-container"
              dangerouslySetInnerHTML={{ __html: blog.highlights }}
            />
          )}

          {blog.tags?.length > 0 && (
            <div className="mt-8">
              <p className="font-semibold text-gray-800 mb-2">Tags:</p>
              <div className="flex flex-wrap gap-3">
                {blog.tags.map((tag: any) => (
                  <span
                    key={tag.id}
                    className="bg-blue-100 text-blue-800 px-4 py-1 text-sm rounded-full"
                  >
                    #{tag.name}
                  </span>
                ))}
              </div>
            </div>
          )}

          {blog.author?.social_media?.length > 0 && (
            <div className="mt-8 pt-6 border-t-2 border-gray-200 bg-gray-50 rounded-lg p-4 sm:p-6 shadow-lg">
              <p className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
                Connect with {blog.author.name}:
              </p>
              <div className="flex flex-wrap gap-4 sm:gap-6">
                {blog.author.social_media.map((social: any) => (
                  <Link
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 bg-white rounded-full border border-gray-300 shadow-md transition-all duration-300 hover:bg-blue-100 hover:border-blue-500 hover:scale-105"
                  >
                    <div className="flex items-center justify-center w-8 h-8 rounded-full">
                      {getSocialIcon(social.platform)}
                    </div>
                    <span className="text-sm sm:text-md text-gray-700 font-medium">
                      {social.platform}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="mt-8 pt-6 border-t">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm sm:text-base"
            >
              <IoArrowBack className="w-4 h-4" />
              Back to all posts
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

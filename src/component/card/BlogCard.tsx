import Link from "next/link";
import React from "react";

interface BlogCardProps {
  title: string;
  author: string;
  content: string;
  href: string;
  date: string;
  image?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  author,
  href,
  date,
  content,
  image,
}) => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden group hover:shadow-2xl transition-shadow duration-300 ease-in-out">
      {image && (
        <img
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
          src={image}
          alt={title}
        />
      )}
      <Link href={`/blog/${href}`} className="p-6">
        <div className="space-y-4 mx-5">
          <h2 className="text-3xl font-semibold text-gray-900 hover:text-indigo-600 transition-colors duration-300">
            {title}
          </h2>

          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span>By {author}</span>
            <span>&#8226;</span>
            <span>{new Date(date).toLocaleDateString()}</span>
          </div>

          <p
            className="text-gray-700 text-base line-clamp-4 mt-3"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;

import React from "react";
import HereForYou from "@/app/homesection/HereForYour";
import ImageHeader from "@/component/backgroundImageHeader/ImageHeader";
import NavbarMenuHeader from "@/component/header/NavbarMenuHeader";
import { ServiceItem } from "@/lib/features/services/serviceInterface";
import { Metadata, ResolvingMetadata } from "next";
import demoImage from "../../../../public/accountant.jpg";
import Image from "next/image";

type tParams = Promise<{ slug: string }>;

export async function generateMetadata(
  { params }: { params: tParams },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const param = await params;

  const response = await fetch("http://192.168.100.91:8088/api/services/");
  const posts: ServiceItem[] = await response.json();
  const post = posts.find((item) => item.slug === param.slug);

  if (!response) {
    return {
      title: "Oops, Not found",
      description:
        "You requested early or am I lazy to build this page. Sorry!!",
    };
  }

  return {
    title: post?.meta_title || "Service Page",
    description: post?.meta_description,
    openGraph: {
      title: post?.meta_title,
      description: post?.meta_description,
      images: [post?.hero_image || ""],
    },
    twitter: {
      title: post?.meta_title,
      description: post?.meta_description,
      images: [post?.hero_image || ""],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const param = await params;

  const data = await fetch("http://192.168.100.91:8088/api/services/");
  const posts: ServiceItem[] = await data.json();

  const post = posts.find((item) => item.slug === param.slug);

  return (
    <div className="w-full">
      <ImageHeader
        title={post?.name ?? "Unable to load title"}
        image={post?.hero_image ?? "unable to load image"}
      />

      <div className="mt-4">
        <NavbarMenuHeader
          title={post?.title ?? "Unable to load title"}
          description={post?.content}
        />
      </div>

      <div className="mx-4 sm:mx-8 md:mx-10">
        <Image
          src={post?.content_image ?? demoImage}
          alt={post?.content_image_alt_text ?? ""}
          width={1000}
          height={400}
          className="w-full h-[400px] sm:h-[500px] md:h-[600px] object-cover object-center"
        />
      </div>

      <div className="mx-4 sm:mx-8 md:mx-10 mt-5">
        <p className="ext-sm md:text-base text-gray-900 font-light">
          {post?.description ?? "Description not available."}
        </p>
      </div>

      <div
        className="text-lg sm:text-xl mx-4 sm:mx-8 md:mx-10 mt-6 custom-section-container"
        dangerouslySetInnerHTML={{ __html: post?.features ?? "" }}
      ></div>

      <HereForYou />
    </div>
  );
}

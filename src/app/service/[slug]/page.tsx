import React from "react";
import HereForYou from "@/app/homesection/HereForYour";
import ImageHeader from "@/component/backgroundImageHeader/ImageHeader";
import NavbarMenuHeader from "@/component/header/NavbarMenuHeader";
import { ServiceItem } from "@/lib/features/services/serviceInterface";
import { Metadata, ResolvingMetadata } from "next";
import demoImage from "../../../../public/accountant.jpg";
import Image from "next/image";
import { features } from "process";
type tParams = Promise<{ slug: string }>;

export async function generateMetadata(
  { params }: { params: tParams },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const param = await params;

  const response = await fetch("http://192.168.100.66:8080/api/services/");
  const posts: ServiceItem[] = await response.json();
  const post = posts.find((item) => item.slug === param.slug);

  if (!response) {
    return {
      title: "Opps Not found",
      description:
        "You requested early or am I lazy to build this page. sorry!!.",
    };
  }

  return {
    title: post?.title ?? "home page",
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

  const data = await fetch("http://192.168.100.66:8080/api/services/");
  const posts: ServiceItem[] = await data.json();
  console.log("posts::", posts);

  const post = posts.find((item) => item.slug === param.slug);
  console.log("post>>>>>>", post);

  return (
    <div className="w-full ">
      <ImageHeader
        title={post?.name ?? "unable to load title"}
        image={post?.hero_image ?? "unable to load image"}
      />
      <div className="mt-4">
        <NavbarMenuHeader
          title={post?.title ?? "unable to load title"}
          description={post?.content}
        />
      </div>
      <div className="mx-10">
        <Image
          src={post?.content_image ?? demoImage}
          alt={post?.content_image_alt_text ?? ""}
          width={1500}
          height={800}
        />
      </div>
      <div
        className="text-xl  mx-10  custom-section-container"
        dangerouslySetInnerHTML={{ __html: post?.features ?? "" }}
      ></div>
      <HereForYou />
    </div>
  );
}

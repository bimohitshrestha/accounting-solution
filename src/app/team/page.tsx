"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import ImageHeader from "@/component/backgroundImageHeader/ImageHeader";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import { getTeamList } from "@/lib/features/team/teamAction";
import { ImSpoonKnife } from "react-icons/im";
import {
  MdOutlineProductionQuantityLimits,
  MdRealEstateAgent,
} from "react-icons/md";
import { GiFarmTractor } from "react-icons/gi";
import { RiMailLine } from "react-icons/ri";
import {
  FaFacebook,
  FaGraduationCap,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaTwitter,
  FaUserTie,
} from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { LiaLinkedin } from "react-icons/lia";
import PreLoader from "@/component/loading/PreLoader";

const industryIcons = {
  Hospitality: <ImSpoonKnife className="w-6 h-6" />,
  Manufacturing: <MdOutlineProductionQuantityLimits className="w-6 h-6" />,
  "Real Estate": <MdRealEstateAgent className="w-6 h-6" />,
  "Agriculture / Farming": <GiFarmTractor className="w-6 h-6" />,
  Commodity: <GiFarmTractor className="w-6 h-6" />,
};

const Page = () => {
  const dispatch = useAppDispatch();
  const { TeamList, isloadingServiceList } = useAppSelector(
    (state) => state.team
  );

  const getSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case "twitter":
        return <FaTwitter className="w-5 h-5 text-black" />;
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

  useEffect(() => {
    dispatch(getTeamList());
  }, []);

  if (isloadingServiceList) {
    return <PreLoader name="Loading team members...." />;
  }
  // {
  //   isloadingServiceList && (
  //     <div className="p-8 text-center text-gray-500">
  //       Loading team members...
  //     </div>
  //   );
  // }

  return (
    <div className="bg-gray-50 min-h-screen pb-12">
      <ImageHeader
        title={TeamList[0]?.name ?? "No Name"}
        image={TeamList[0]?.image ?? ""}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        {TeamList.map((member, index) => (
          <section
            key={index}
            className="w-full bg-white p-6 md:p-8 flex flex-col md:flex-row gap-8 rounded-xl shadow-lg mb-8 transition-all duration-300 hover:shadow-xl border border-gray-100"
          >
            <div className="flex flex-col items-center md:items-start space-y-4 md:w-1/3">
              <div className="text-center md:text-left">
                <h2 className="text-2xl font-bold text-level mb-1">
                  {member?.name}
                </h2>
                <p className="text-md text-gray-600 font-medium">
                  {member?.designation ?? "Team Member"}
                </p>
              </div>

              <div className="relative overflow-hidden rounded-lg shadow-md w-full">
                <Image
                  src={member?.image || "/accountant.jpg"}
                  alt={member?.name}
                  width={300}
                  height={700}
                  className="object-cover hover:scale-105 transition-transform duration-300 w-full h-auto"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 md:w-2/3">
              <div className="flex flex-col gap-1 text-gray-700">
                {member?.contact_number && (
                  <p className="flex items-center gap-3 p-3">
                    <FaPhoneAlt className="w-5 h-5 text-green-600" />
                    <span className="font-medium">{member.contact_number}</span>
                  </p>
                )}
                {member?.phone_number && (
                  <p className="flex items-center gap-3 p-3 ">
                    <FaPhoneAlt className="w-5 h-5 text-green-600" />
                    <span className="font-medium">{member.phone_number}</span>
                  </p>
                )}
                {member?.email && (
                  <p className="flex items-center gap-3 p-3 ">
                    <RiMailLine className="w-5 h-5 text-rose-600" />
                    <span className="font-medium">{member.email}</span>
                  </p>
                )}
                {member?.education && (
                  <p className="flex items-center gap-3 p-3 ">
                    <FaGraduationCap className="w-5 h-5 text-blue-600" />
                    <span className="font-medium">{member.education}</span>
                  </p>
                )}
                {member?.experience && (
                  <p className="flex items-center gap-3 p-3 ">
                    <FaUserTie className="w-5 h-5 text-blue-600" />
                    <span className="font-medium">{member.experience}</span>
                  </p>
                )}

                {member?.social_media?.map((media) => (
                  <div key={media.id} className="flex items-center gap-6 p-3 ">
                    <a
                      href={media.url}
                      target="_blank"
                      rel="noreferrer"
                      className=" flex items-center gap-3 space-x-3 font-medium text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      {getSocialIcon(media.platform)}
                      {media.display_name}{" "}
                      {/* <span className="text-2xl font-bold">
                        ({media.display_name})
                      </span> */}
                    </a>
                  </div>
                ))}
              </div>

              <div
                className="text-gray-800 text-base mt-2 leading-relaxed bg-gray-50 p-4 rounded-lg border-l-4 border-purple-500"
                dangerouslySetInnerHTML={{ __html: member?.bio }}
              />

              {member?.specialization?.length > 0 && (
                <div className="mt-4 bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-purple-800 text-lg mb-3 flex items-center">
                    <span className="mr-2">Industry Specialisations</span>
                    <div className="h-0.5 flex-grow bg-purple-200 rounded-full"></div>
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    {member.specialization.map((spec) => (
                      <div
                        key={spec.id}
                        className="flex flex-col items-center p-3 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                      >
                        <span className="text-gray-700 text-center font-medium">
                          {spec.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Page;

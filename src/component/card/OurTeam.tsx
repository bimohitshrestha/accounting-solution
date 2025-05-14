"use client";
import React, { useEffect } from "react";
import ParagraphHeader from "../header/ParagraphHeader";
import { BiMobile } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import Link from "next/link";
import ButtonText from "../common/button/ButtonText";
import { useAppSelector } from "@/hooks/useAppSelector";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { getTeamList } from "@/lib/features/team/teamAction";

const teamMembers = [
  {
    name: "Bidhur",
    position: "Principal Accountant",
    phone: "9849909999",
    email: "bidhur@example.com",
  },
  {
    name: "Chartered",
    position: "Practice Manager",
    phone: "9849908888",
    email: "chartered@gmail.com",
  },
  {
    name: "Management",
    position: "Accountant",
    phone: "9849907777",
    email: "management@gmail.com",
  },
];

const OurTeam = () => {
  const { TeamList, isloadingServiceList } = useAppSelector(
    (state) => state.team
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getTeamList());
  }, []);
  console.log("team list>>>>>>", TeamList);
  return (
    <section className=" ">
      <ParagraphHeader title="Our Team" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {TeamList.map((member, index) => (
          <div key={index} className="">
            <h3 className="text-2xl font-semibold text-gray-800 hover:text-blue-600 mb-2">
              {member.name}
            </h3>
            <p className="text-lg font-medium text-gray-600 mb-4">
              {member.designation}
            </p>

            <div className="flex items-center text-gray-600 mb-3 text-xl">
              <BiMobile className="w-5 h-5 mr-2 text-blue-500" />
              <span className="text-sm">{member.contact_number}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <AiOutlineMail className="w-5 h-5 mr-2 text-blue-500" />
              <span className="text-sm">{member.email}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link href="/team">
          <ButtonText title="Learn More" requiredIcon={false} />
        </Link>
      </div>
    </section>
  );
};

export default OurTeam;

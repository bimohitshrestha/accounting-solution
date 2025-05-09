import React from "react";
import ParagraphHeader from "../header/ParagraphHeader";
import { BiMobile } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import Link from "next/link";
import ButtonText from "../common/button/ButtonText";

const teamMembers = [
  {
    name: "Dorothea Farmakis (CPA)",
    position: "Principal Accountant",
    phone: "9849909999",
    email: "bimohit@example.com",
  },
  {
    name: "Paul Pogba",
    position: "Practice Manager",
    phone: "9849908888",
    email: "pogba@gmail.com",
  },
  {
    name: "Wayne Rooney",
    position: "Accountant",
    phone: "9849907777",
    email: "rooney@gmail.com",
  },
];

const OurTeam = () => {
  return (
    <section className=" ">
      <ParagraphHeader title="Our Team" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {teamMembers.map((member, index) => (
          <div key={index} className="">
            <h3 className="text-2xl font-semibold text-gray-800 hover:text-blue-600 mb-2">
              {member.name}
            </h3>
            <p className="text-lg font-medium text-gray-600 mb-4">
              {member.position}
            </p>

            <div className="flex items-center text-gray-600 mb-3 text-xl">
              <BiMobile className="w-5 h-5 mr-2 text-blue-500" />
              <span className="text-sm">{member.phone}</span>
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

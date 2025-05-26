"use client";

import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import ButtonText from "../common/button/ButtonText";
import { useAppSelector } from "@/hooks/useAppSelector";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { getOrganizationInfo } from "@/lib/features/services/serviceAction";

import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { BiPhone } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { BsTwitterX } from "react-icons/bs";

import WhatsAppOptions from "../WhatsAppAction/WhatsAppOption";
import ViberOptions from "../WhatsAppAction/ViberOption";
import AppointmentModal from "../modal/AppointmentModal";

interface SocialLink {
  href: string;
  icon: ReactNode;
  value: string;
}

interface Social {
  href: string;
  icon: ReactNode;
  label: string;
}

const ContactDetails: React.FC = () => {
  const { OrganizationList } = useAppSelector((state) => state.service);
  const dispatch = useAppDispatch();
  const organization = OrganizationList[0];

  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  useEffect(() => {
    dispatch(getOrganizationInfo());
  }, []);

  const handleDateSelect = (date: any) => {
    setSelectedDate(date);
    console.log("Selected date:", date);
  };

  const handleCloseModal = () => {
    setShowCalendar(false);
  };

  const handleConfirmAppointment = () => {
    if (selectedDate) {
      console.log("Appointment confirmed for:", selectedDate);
      // Add your appointment confirmation logic here
      setShowCalendar(false);
    }
  };

  const socialLinks: SocialLink[] = [
    {
      href: `tel:${organization?.phone_number1 || "no number"}`,
      icon: <BiPhone className="w-6 h-6 text-green-600" />,
      value: organization?.phone_number1 || "No number",
    },
    {
      href: `mailto:${organization?.email}`,
      icon: <MdEmail className="w-6 h-6 text-rose-600" />,
      value: organization?.email || "No email",
    },
  ];

  const social: Social[] =
    organization?.social_media?.map((media) => {
      let icon;
      switch (media.platform) {
        case "facebook":
          icon = (
            <FaFacebook className="w-8 h-8 text-blue-500 hover:text-blue-600" />
          );
          break;
        case "twitter":
          icon = (
            <BsTwitterX className="w-8 h-8 text-gray-700 hover:text-black" />
          );
          break;
        case "instagram":
          icon = (
            <FaInstagram className="w-8 h-8 text-rose-500 hover:text-rose-600" />
          );
          break;
        case "linkedin":
          icon = (
            <FaLinkedin className="w-8 h-8 text-blue-700 hover:text-blue-800" />
          );
          break;
        default:
          icon = <i className="fas fa-globe" />;
      }

      return {
        href: media.url,
        icon,
        label: media.display_name,
      };
    }) || [];

  return (
    <div className="w-full md:w-1/2 flex flex-col items-start justify-start">
      <h5 className="text-level capitalize text-2xl font-semibold mb-6 underline">
        {organization?.name || "Organization Name"}
      </h5>

      {socialLinks.map((data, index) => (
        <Link
          key={index}
          href={data.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={data.value}
          className="flex items-start gap-4 text-lg justify-center mb-2"
        >
          {data.icon}
          <span>{data.value}</span>
        </Link>
      ))}

      <WhatsAppOptions
        phoneNumber={organization?.whatsapp}
        message="Hi, I'm interested in your services!"
      />
      <ViberOptions phoneNumber={organization?.viber} />

      <div className="flex flex-wrap justify-center gap-3 mt-8">
        {social.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            title={link.label}
          >
            {link.icon}
          </Link>
        ))}
      </div>

      <div className="flex flex-col gap-6 mt-10">
        {/* <Link href="/contact"> */}
        <ButtonText
          title="Full Contact List"
          requiredIcon={false}
          link="/contact"
        />
        {/* </Link> */}

        <div>
          <ButtonText
            title="Make Appointment"
            requiredIcon={false}
            onClick={() => setShowCalendar((prev) => !prev)}
          />

          {showCalendar && (
            <AppointmentModal
              isOpen={showCalendar}
              selectedDate={selectedDate}
              onDateChange={handleDateSelect}
              onClose={handleCloseModal}
              onConfirm={handleConfirmAppointment}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;

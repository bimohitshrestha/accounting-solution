"use client";
import ButtonText from "@/component/common/button/ButtonText";
import LinkButton from "@/component/common/button/LinkButton";
import ParagraphHeader from "@/component/header/ParagraphHeader";
import AppointmentModal from "@/component/modal/AppointmentModal";
import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { BiCalendar, BiPhone } from "react-icons/bi";
import { FaCalendar, FaRegCalendarAlt } from "react-icons/fa";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const images = [
  "https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?cs=srgb&dl=pexels-thatguycraig000-1563356.jpg&fm=jpg",
  "https://images.pexels.com/photos/6863260/pexels-photo-6863260.jpeg?auto=compress&cs=tinysrgb&w=1000&h=500",
  "https://images.pexels.com/photos/30483384/pexels-photo-30483384/free-photo-of-fisherman-at-sunset-by-urban-cable-stayed-bridge.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/16836350/pexels-photo-16836350/free-photo-of-purple-toned-landscape-with-volcanoes.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
];

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

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

      setShowCalendar(false);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col">
      <ParagraphHeader title="Chartered Accounting Solutions" />

      <div className="relative w-full h-screen max-h-[500px]">
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${images[currentImageIndex]})`,
          }}
        />

        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-black/40 z-0"></div>

          <div className="relative z-10 w-full flex flex-col justify-end items-center h-full px-6 py-12 text-center">
            <p className="text-white text-xl md:text-xl lg:text-3xl font-light">
              Your Trusted Accounting Partner — No Matter the Size of Your
              Business
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white py-4">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ButtonText
              link="/contact"
              title="Talk to us"
              icon={<MdOutlinePhoneInTalk size={20} />}
              requiredIcon={true}
            />
            <ButtonText
              // link="/contact"
              title="Make Appointment"
              icon={<FaRegCalendarAlt size={20} />}
              requiredIcon={true}
              onClick={() => setShowCalendar(true)}
            />
          </div>
        </div>
      </div>

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
  );
};

export default HeroSection;

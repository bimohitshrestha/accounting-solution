import React from "react";
import { RxCross2 } from "react-icons/rx";
import ButtonText from "../common/button/ButtonText";
// @ts-expect-error: no type definitions available for '@sbmdkl/nepali-datepicker-reactjs'
import Calendar from "@sbmdkl/nepali-datepicker-reactjs";

import "@sbmdkl/nepali-datepicker-reactjs/dist/index.css";

type AppointmentModalProps = {
  selectedDate: Date | null;
  onDateChange: (date: any) => void;
  onClose: () => void;
  onConfirm: () => void;
  isOpen: boolean;
};

const AppointmentModal: React.FC<AppointmentModalProps> = ({
  selectedDate,
  onDateChange,
  onClose,
  onConfirm,
  isOpen,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/30 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl font-bold"
        >
          <RxCross2 className="w-6 h-6" />
        </button>

        <h3 className="text-xl font-semibold mb-4 text-center">
          Select Appointment Date
        </h3>

        <div className="flex justify-center mb-4">
          <div className="w-full h-500px">
            <Calendar
              onChange={onDateChange}
              dateFormat="DDDD, MMMM DD, YYYY"
              theme="blue"
              language="ne"
            />
          </div>
        </div>

        <div className="flex gap-3 justify-center">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <ButtonText
            title="Confirm Appointment"
            onClick={onConfirm}
            requiredIcon={false}
          />
        </div>
      </div>
    </div>
  );
};

export default AppointmentModal;

"use client";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

interface InputFieldInterface {
  label?: string;
  name: string;
  value?: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  placeholder?: string;
  required?: boolean;
  type?: string;
  rows?: number;
  showPasswordToggle?: boolean;
  confirmPassWordToggle?: boolean;
  error?: string | false;
}

const InputField: React.FC<InputFieldInterface> = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  required = false,
  type = "text",
  rows,
  showPasswordToggle = false,
  confirmPassWordToggle = false,
  error,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);

  const handleTogglePassword = () => {
    if (showPasswordToggle) {
      setShowPassword((prev) => !prev);
    } else if (confirmPassWordToggle) {
      setConfirmPassword((prev) => !prev);
    }
  };

  return (
    <div className="flex-1">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <div className="relative">
        {type === "textarea" ? (
          <textarea
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="w-full px-4 py-2 border border-gray-300 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={rows}
            required={required}
          />
        ) : (
          <input
            type={showPassword || confirmPassword ? "text" : type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="w-full px-4 py-2 border border-gray-300 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFF8E1]"
            required={required}
          />
        )}
        {(showPasswordToggle || confirmPassWordToggle) && (
          <button
            type="button"
            onClick={handleTogglePassword}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
          >
            {showPassword || confirmPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        )}
      </div>
      {error && <p className="text-red-500 text-base mt-1">{error}</p>}
    </div>
  );
};

export default InputField;

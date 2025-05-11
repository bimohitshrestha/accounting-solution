"use client";
import React, { useState, useEffect } from "react";
import InputField from "../field/InputField";
import ButtonText from "../common/button/ButtonText";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import { submitQuery } from "@/lib/features/services/serviceAction";
import ToastMessage from "../toast/ToastMessage";

const FormInput = () => {
  const dispatch = useAppDispatch();
  const { loading, isSuccess, isError } = useAppSelector(
    (state) => state.service
  );

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    business: "",
    phone: "",
    location: "",
    postcode: "",
    message: "",
    email: "",
  });

  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      name: `${formData.firstName} ${formData.lastName}`,
      business_name: formData.business,
      phone: formData.phone,
      email: formData.email,
      message: formData.message,
    };

    try {
      await dispatch(submitQuery(payload)).unwrap();
      setToast({ message: "Message sent successfully!", type: "success" });

      setFormData({
        firstName: "",
        lastName: "",
        business: "",
        phone: "",
        location: "",
        postcode: "",
        message: "",
        email: "",
      });
    } catch (error) {
      setToast({ message: "Failed to send message.", type: "error" });
    }
  };

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  return (
    <div>
      {toast && <ToastMessage message={toast.message} type={toast.type} />}

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row gap-4">
          <InputField
            type="text"
            placeholder="Your First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          <InputField
            type="text"
            placeholder="Your Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <InputField
            type="text"
            placeholder="Your Business Name (if applicable)"
            name="business"
            value={formData.business}
            onChange={handleChange}
          />
          <InputField
            type="text"
            placeholder="Your Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <InputField
            type="text"
            placeholder="Your Location"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
          <InputField
            type="text"
            placeholder="Your Post Code"
            name="postcode"
            value={formData.postcode}
            onChange={handleChange}
          />
        </div>
        <InputField
          type="text"
          placeholder="Your Email Address"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <InputField
          type="textarea"
          rows={8}
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
        />

        <div className="flex items-start">
          <ButtonText
            title={loading ? "Sending..." : "Send Message"}
            requiredIcon={false}
          />
        </div>
      </form>
    </div>
  );
};

export default FormInput;

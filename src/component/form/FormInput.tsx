"use client";
import React, { useState } from "react";
import InputField from "../field/InputField";
import ButtonText from "../common/button/ButtonText";

const FormInput = () => {
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

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    console.log("Form submitted:", formData);

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
  };
  return (
    <div>
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
        <div className="flex flex-col  md:flex-row gap-4">
          <InputField
            type="text"
            placeholder="Your Business Name(if applicable)"
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
        <div className="flex flex-col  md:flex-row gap-4">
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
        {/* <button
          type="submit"
          className="bg-primary text-white px-4 py-2 rounded hover:bg-opacity-80 transition"
        >
          Send Message
        </button> */}
        <div className="flex items-start">
          <ButtonText title="Send Message" requiredIcon={false} />
        </div>
      </form>
    </div>
  );
};

export default FormInput;

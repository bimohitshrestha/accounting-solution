"use client";

import React, { useEffect, useState } from "react";
import InputField from "../field/InputField";
import ButtonText from "../common/button/ButtonText";
import { useAppSelector } from "@/hooks/useAppSelector";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { postSubscriber } from "@/lib/features/newsletter/newsAction";
import ToastMessage from "../toast/ToastMessage";
import Script from "next/script";

const Subscriber = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    isSubscriber: false,
  });
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const { isError, loading, isSuccess } = useAppSelector((state) => state.news);

  const dispatch = useAppDispatch();

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

    const nameParts = formData.fullName.trim().split(/\s+/);
    const firstName = nameParts[0] || "";
    const lastName = nameParts.slice(1).join(" ") || "";

    const payload = {
      first_name: firstName,
      last_name: lastName,
      name: `${firstName} ${lastName}`.trim(),
      email: formData.email,
      isSubscriber: formData.isSubscriber,
    };

    try {
      await dispatch(postSubscriber(payload)).unwrap();
      setToast({ message: "Subscribed successfully!", type: "success" });

      setFormData({
        fullName: "",
        email: "",
        isSubscriber: false,
      });
    } catch (error) {
      setToast({ message: "Failed to subscribe.", type: "error" });
    }
  };

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <div className="w-full bg-slate-100 py-6 p-6 md:p-0">
        <div className="max-w-7xl mx-auto">
          <p className="text-blue-500 text-lg font-medium mt-2 text-center sm:text-left">
            Subscribe to our Newsletter and Weekly Blog
          </p>

          {toast && <ToastMessage message={toast.message} type={toast.type} />}

          <form onSubmit={handleSubmit}>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <InputField
                name="fullName"
                value={formData.fullName}
                placeholder="Full Name (First and Last)"
                onChange={handleChange}
                required
              />
              <InputField
                name="email"
                value={formData.email}
                placeholder="Email"
                onChange={handleChange}
                type="email"
                required
              />
              <ButtonText
                title={loading ? "Submitting..." : "Submit"}
                requiredIcon={false}
              />
            </div>

            {/* Turnstile widget
            <div className="mt-4">
              <div
                className="cf-turnstile"
                data-sitekey="0x4AAAAAABcjdtkq9V_MDWts"
                data-theme="light"
              ></div>
            </div> */}
          </form>
        </div>
      </div>
    </>
  );
};

export default Subscriber;

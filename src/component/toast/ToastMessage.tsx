import React from "react";

type ToastProps = {
  message: string;
  type: "success" | "error";
};

const ToastMessage: React.FC<ToastProps> = ({ message, type }) => {
  const bgColor = type === "success" ? "bg-green-500" : "bg-red-500";

  return (
    <div
      className={`fixed top-4 right-4 px-4 py-2 text-white rounded shadow-md transition-all z-[99999] duration-300 ${bgColor}`}
    >
      {message}
    </div>
  );
};

export default ToastMessage;

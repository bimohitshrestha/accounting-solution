import React from "react";

interface PreLoaderProps {
  name: string;
}

const PreLoader = ({ name }: PreLoaderProps) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-t-blue-600 border-blue-200 rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-gray-600 font-medium"> {name}</p>
      </div>
    </div>
  );
};

export default PreLoader;

import React, { useState } from "react";
import { FaViber } from "react-icons/fa";

const ViberOptions = ({ phoneNumber }: { phoneNumber: string }) => {
  const [showOptions, setShowOptions] = useState(false);

  const sanitizedNumber = phoneNumber?.startsWith("+")
    ? phoneNumber.replace("+", "")
    : phoneNumber;

  const viberUrl = `viber://chat?number=${sanitizedNumber}`;

  return (
    <div>
      <a
        href={viberUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => setShowOptions(!showOptions)}
        className="flex items-center justify-center gap-4 mt-2"
      >
        <FaViber className="text-blue-500 w-6 h-6" />
        {phoneNumber}
      </a>
    </div>
  );
};

export default ViberOptions;

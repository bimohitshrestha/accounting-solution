import React, { useState } from "react";
import { FaViber } from "react-icons/fa";

const ViberOptions = ({ phoneNumber }: { phoneNumber: string }) => {
  const [showOptions, setShowOptions] = useState(false);

  const sanitizedNumber = phoneNumber?.startsWith("+")
    ? phoneNumber
    : `+${phoneNumber}`;
  const encodedNumber = encodeURIComponent(sanitizedNumber);
  const viberUrl = `viber://chat?number=${encodedNumber}`;

  return (
    <div>
      <a
        href={viberUrl}
        target="_blank"
        onClick={() => setShowOptions(!showOptions)}
        className="flex items-center justify-center gap-4 mt-2"
      >
        <FaViber className="text-blue-500 w-6 h-6" />
        {phoneNumber}
      </a>

      {/* {showOptions && (
        <div style={{ marginTop: 10 }}>
          <a href={viberUrl} target="_blank" rel="noopener noreferrer">
            Open in Viber
          </a>
          <br />
          <p>(Requires Viber installed on device)</p>
        </div>
      )} */}
    </div>
  );
};

export default ViberOptions;

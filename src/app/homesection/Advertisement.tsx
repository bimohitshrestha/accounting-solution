import Image from "next/image";
import React from "react";

const logos = [
  "/blood.png",
  "/blood.png",
  "/blood.png",
  "/blood.png",
  "/blood.png",
  "/blood.png",
];

const Advertisement = () => {
  return (
    <section className="w-full py-6 px-4 bg-slate-200 text-black mb-12">
      <div className="flex flex-wrap items-center  justify-center gap-8">
        {logos.map((logo, index) => (
          <Image
            key={index}
            src={logo}
            alt={`Advertisement logo `}
            width={500}
            height={500}
            className="h-16 md:h-20 w-50 object-contain "
          />
        ))}
      </div>
    </section>
  );
};

export default Advertisement;

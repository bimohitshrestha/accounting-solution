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
    <section className="w-full py-6 px-4 bg-slate-200 text-black mb-6">
      <div className="flex flex-wrap items-start justify-start gap-8">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Advertisement logo `}
            className="h-16 md:h-20 w-50 object-contain "
          />
        ))}
      </div>
    </section>
  );
};

export default Advertisement;

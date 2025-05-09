import React from "react";

const Map = () => {
  return (
    <div className="">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.0970937784205!2d85.30179897526175!3d27.683393826547885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19d37bd20ab7%3A0x2f24d04abf9cf90!2sCodeQuant%20Tech%20Pvt.%20Ltd!5e0!3m2!1sen!2snp!4v1746679858586!5m2!1sen!2snp"
        width="100%"
        height="500"
        // style="border:0;"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Map;

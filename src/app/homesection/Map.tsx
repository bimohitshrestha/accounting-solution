import React from "react";

const Map = () => {
  return (
    <div className="">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.430789597981!2d85.32505621386134!3d27.703982472645897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19a713158f11%3A0xa144f27136cf5788!2sSilver%20City%20Apartment!5e0!3m2!1sen!2snp!4v1746948114432!5m2!1sen!2snp"
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

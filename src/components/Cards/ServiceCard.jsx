import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({ service }) => {
  const { _id, img, title, price } = service || {};
  return (
    <div className="max-[350px] mx-auto space-y-4 rounded border p-6 md:w-[350px] bg-white text-left">
      {/* Card Image */}
      <Image
        src={img ? img : "Img Not Found"}
        alt="services img"
        width={350}
        height={190}
        placeholder="blur"
        loading="lazy"
        blurDataURL="data:image/jpeg..."
        className=" rounded-lg"
      />
      {/* Card Heading */}
      <div className="space-y-2">
        <h4 className="text-2xl text-dark-two-color font-bold">
          {title ? title : "Data Not Found"}
        </h4>
      </div>
      {/* Price and action button */}
      <div className="mt-5 flex items-center justify-between">
        <p className="text-xl text-primary-color font-semibold">
          Price: ${price ? price : "Data Not Found"}
        </p>
        <FaArrowRight className="text-xl text-primary-color font-semibold" />
      </div>
    </div>
  );
};

export default ServiceCard;

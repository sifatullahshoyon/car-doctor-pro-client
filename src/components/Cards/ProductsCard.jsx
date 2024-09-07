import Image from "next/image";
import React from "react";
import Rating from "../Rating";

const ProductsCard = ({ product }) => {
  const { _id, img, title, price } = product || {};
  return (
    <div className="max-[350px] mx-auto space-y-4 rounded border p-6 md:w-[350px] bg-white text-left">
      {/* Card Image */}
      <div className="w-full lg:w-80 lg:h-[215px] mx-auto bg-neutral-color rounded flex justify-center items-center">
        <Image
          src={img ? img : "Img Not Found"}
          alt="products img"
          width={134}
          height={134}
          placeholder="blur"
          loading="lazy"
          blurDataURL="data:image/jpeg..."
          className=" rounded-lg"
        />
      </div>
      <Rating className="mt-5" />
      {/* Card Heading */}
      <h4 className="text-2xl text-dark-two-color font-bold text-center py-3">
        {title ? title : "Data Not Found"}
      </h4>
      <p className="text-xl text-primary-color font-semibold text-center">
        Price: ${price ? price : "Data Not Found"}
      </p>
    </div>
  );
};

export default ProductsCard;

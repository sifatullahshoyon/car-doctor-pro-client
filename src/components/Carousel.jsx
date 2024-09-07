"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import imgOne from "@/public/assets/images/team/1.jpg";
import imgTwo from "@/public/assets/images/team/2.jpg";
import imgThree from "@/public/assets/images/team/3.jpg";
import { BsFacebook } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

import { Navigation } from "swiper/modules";
import Image from "next/image";

const Carousel = () => {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
            {/* Card 1 */}
            <div className="max-[364px] mx-auto  rounded border p-6 md:w-[350px] bg-white text-left group ">
              {/* Card Image */}
              <Image
                src={imgOne}
                alt="products img"
                width={314}
                height={293}
                placeholder="blur"
                loading="lazy"
                blurDataURL="data:image/jpeg..."
                className=" rounded-lg"
              />
              {/* Card Heading */}
              <h4 className="text-2xl text-dark-two-color font-bold text-center pt-5 pb-2">
                Car Engine Plug
              </h4>
              <p className="text-xl text-accent-color font-semibold text-center pb-3">
                Engine Expert
              </p>
              <div className="md:flex md:flex-row justify-center flex-wrap gap-x-3 gap-y-2 ">
                <div className="mb-2 flex justify-center items-center  P-5 rounded-full group cursor-pointer ">
                  <BsFacebook className="w-9 h-8 text-sm group-hover:text-[#1877F2] group-hover:inline-block hidden transition delay-150 duration-75" />
                </div>
                <div className=" mb-2 flex justify-center items-center P-5 rounded-full group cursor-pointer ">
                  <FaSquareXTwitter className="w-9 h-8 text-sm group-hover:text-[	#1DA1F2] group-hover:inline-block hidden transition delay-150 duration-75" />
                </div>
                <div className=" mb-2 flex justify-center items-center P-5 rounded-full group cursor-pointer ">
                  <FaLinkedin className="w-9 h-8  text-sm group-hover:text-[#0077B5] group-hover:inline-block hidden transition delay-150 duration-75" />
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="max-[364px] mx-auto  rounded border p-6 md:w-[350px] bg-white text-left group">
              {/* Card Image */}
              <Image
                src={imgThree}
                alt="products img"
                width={314}
                height={293}
                placeholder="blur"
                loading="lazy"
                blurDataURL="data:image/jpeg..."
                className=" rounded-lg"
              />
              {/* Card Heading */}
              <h4 className="text-2xl text-dark-two-color font-bold text-center pt-5 pb-2">
                Car Engine Plug
              </h4>
              <p className="text-xl text-accent-color font-semibold text-center pb-3">
                Engine Expert
              </p>
              <div className="md:flex md:flex-row justify-center flex-wrap gap-x-3 gap-y-2 ">
                <div className="mb-2 flex justify-center items-center  P-5 rounded-full group cursor-pointer ">
                  <BsFacebook className="w-9 h-8 text-sm group-hover:text-[#1877F2] group-hover:inline-block hidden transition delay-150 duration-75" />
                </div>
                <div className=" mb-2 flex justify-center items-center P-5 rounded-full group cursor-pointer ">
                  <FaSquareXTwitter className="w-9 h-8 text-sm group-hover:text-[	#1DA1F2] group-hover:inline-block hidden transition delay-150 duration-75" />
                </div>
                <div className=" mb-2 flex justify-center items-center P-5 rounded-full group cursor-pointer ">
                  <FaLinkedin className="w-9 h-8  text-sm group-hover:text-[#0077B5] group-hover:inline-block hidden transition delay-150 duration-75" />
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="max-[364px] mx-auto  rounded border p-6 md:w-[350px] bg-white text-left group">
              {/* Card Image */}
              <Image
                src={imgTwo}
                alt="products img"
                width={314}
                height={293}
                placeholder="blur"
                loading="lazy"
                blurDataURL="data:image/jpeg..."
                className=" rounded-lg"
              />
              {/* Card Heading */}
              <h4 className="text-2xl text-dark-two-color font-bold text-center pt-5 pb-2">
                Car Engine Plug
              </h4>
              <p className="text-xl text-accent-color font-semibold text-center pb-3">
                Engine Expert
              </p>
              <div className="md:flex md:flex-row justify-center flex-wrap gap-x-3 gap-y-2 ">
                <div className="mb-2 flex justify-center items-center  P-5 rounded-full group cursor-pointer ">
                  <BsFacebook className="w-9 h-8 text-sm group-hover:text-[#1877F2] group-hover:inline-block hidden transition delay-150 duration-75" />
                </div>
                <div className=" mb-2 flex justify-center items-center P-5 rounded-full group cursor-pointer ">
                  <FaSquareXTwitter className="w-9 h-8 text-sm group-hover:text-[	#1DA1F2] group-hover:inline-block hidden transition delay-150 duration-75" />
                </div>
                <div className=" mb-2 flex justify-center items-center P-5 rounded-full group cursor-pointer ">
                  <FaLinkedin className="w-9 h-8  text-sm group-hover:text-[#0077B5] group-hover:inline-block hidden transition delay-150 duration-75" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
            {/* Card 1 */}
            <div className="max-[364px] mx-auto  rounded border p-6 md:w-[350px] bg-white text-left group ">
              {/* Card Image */}
              <Image
                src={imgOne}
                alt="products img"
                width={314}
                height={293}
                placeholder="blur"
                loading="lazy"
                blurDataURL="data:image/jpeg..."
                className=" rounded-lg"
              />
              {/* Card Heading */}
              <h4 className="text-2xl text-dark-two-color font-bold text-center pt-5 pb-2">
                Car Engine Plug
              </h4>
              <p className="text-xl text-accent-color font-semibold text-center pb-3">
                Engine Expert
              </p>
              <div className="md:flex md:flex-row justify-center flex-wrap gap-x-3 gap-y-2 ">
                <div className="mb-2 flex justify-center items-center  P-5 rounded-full group cursor-pointer ">
                  <BsFacebook className="w-9 h-8 text-sm group-hover:text-[#1877F2] group-hover:inline-block hidden transition delay-150 duration-75" />
                </div>
                <div className=" mb-2 flex justify-center items-center P-5 rounded-full group cursor-pointer ">
                  <FaSquareXTwitter className="w-9 h-8 text-sm group-hover:text-[	#1DA1F2] group-hover:inline-block hidden transition delay-150 duration-75" />
                </div>
                <div className=" mb-2 flex justify-center items-center P-5 rounded-full group cursor-pointer ">
                  <FaLinkedin className="w-9 h-8  text-sm group-hover:text-[#0077B5] group-hover:inline-block hidden transition delay-150 duration-75" />
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="max-[364px] mx-auto  rounded border p-6 md:w-[350px] bg-white text-left group">
              {/* Card Image */}
              <Image
                src={imgThree}
                alt="products img"
                width={314}
                height={293}
                placeholder="blur"
                loading="lazy"
                blurDataURL="data:image/jpeg..."
                className=" rounded-lg"
              />
              {/* Card Heading */}
              <h4 className="text-2xl text-dark-two-color font-bold text-center pt-5 pb-2">
                Car Engine Plug
              </h4>
              <p className="text-xl text-accent-color font-semibold text-center pb-3">
                Engine Expert
              </p>
              <div className="md:flex md:flex-row justify-center flex-wrap gap-x-3 gap-y-2 ">
                <div className="mb-2 flex justify-center items-center  P-5 rounded-full group cursor-pointer ">
                  <BsFacebook className="w-9 h-8 text-sm group-hover:text-[#1877F2] group-hover:inline-block hidden transition delay-150 duration-75" />
                </div>
                <div className=" mb-2 flex justify-center items-center P-5 rounded-full group cursor-pointer ">
                  <FaSquareXTwitter className="w-9 h-8 text-sm group-hover:text-[	#1DA1F2] group-hover:inline-block hidden transition delay-150 duration-75" />
                </div>
                <div className=" mb-2 flex justify-center items-center P-5 rounded-full group cursor-pointer ">
                  <FaLinkedin className="w-9 h-8  text-sm group-hover:text-[#0077B5] group-hover:inline-block hidden transition delay-150 duration-75" />
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="max-[364px] mx-auto  rounded border p-6 md:w-[350px] bg-white text-left group">
              {/* Card Image */}
              <Image
                src={imgTwo}
                alt="products img"
                width={314}
                height={293}
                placeholder="blur"
                loading="lazy"
                blurDataURL="data:image/jpeg..."
                className=" rounded-lg"
              />
              {/* Card Heading */}
              <h4 className="text-2xl text-dark-two-color font-bold text-center pt-5 pb-2">
                Car Engine Plug
              </h4>
              <p className="text-xl text-accent-color font-semibold text-center pb-3">
                Engine Expert
              </p>
              <div className="md:flex md:flex-row justify-center flex-wrap gap-x-3 gap-y-2 ">
                <div className="mb-2 flex justify-center items-center  P-5 rounded-full group cursor-pointer ">
                  <BsFacebook className="w-9 h-8 text-sm group-hover:text-[#1877F2] group-hover:inline-block hidden transition delay-150 duration-75" />
                </div>
                <div className=" mb-2 flex justify-center items-center P-5 rounded-full group cursor-pointer ">
                  <FaSquareXTwitter className="w-9 h-8 text-sm group-hover:text-[	#1DA1F2] group-hover:inline-block hidden transition delay-150 duration-75" />
                </div>
                <div className=" mb-2 flex justify-center items-center P-5 rounded-full group cursor-pointer ">
                  <FaLinkedin className="w-9 h-8  text-sm group-hover:text-[#0077B5] group-hover:inline-block hidden transition delay-150 duration-75" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carousel;

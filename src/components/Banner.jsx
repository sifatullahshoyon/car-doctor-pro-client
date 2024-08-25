"use client";
import { useCallback, useEffect, useState } from "react";
import PrimaryBtn from "./shared/Buttons/PrimaryBtn";

const Banner = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const carouselImages = [
    {
      title: "Affordable Price For Car Servicing",
      description:
        "There are many variations of passages of  available, but the majority have suffered alteration in some form",
      next: "#slide2",
      prev: "#slide4",
    },
    {
      title: "Affordable Price For Car Servicing",
      description:
        "There are many variations of passages of  available, but the majority have suffered alteration in some form",
      next: "#slide3",
      prev: "#slide1",
    },
    {
      title: "Affordable Price For Car Servicing",
      description:
        "There are many variations of passages of  available, but the majority have suffered alteration in some form",
      next: "#slide4",
      prev: "#slide2",
    },
    {
      title: "Affordable Price For Car Servicing",
      description:
        "There are many variations of passages of  available, but the majority have suffered alteration in some form",
      next: "#slide1",
      prev: "#slide3",
    },
  ];

  const prevSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === 0 ? carouselImages.length - 1 : currentSlider - 1
    );
  const nextSlider = useCallback(
    () =>
      setCurrentSlider((currentSlider) =>
        currentSlider === carouselImages.length - 1 ? 0 : currentSlider + 1
      ),
    [carouselImages.length]
  );

  // if you don't want to change the slider automatically then you can just remove the useEffect
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlider();
    }, 3000);
    return () => clearInterval(intervalId);
  }, [nextSlider]);
  return (
    <div className="h-screen w-full md:h-[470px] lg:h-[600px] relative overflow-hidden">
      {/* arrow left */}
      <button
        onClick={prevSlider}
        className="absolute bottom-16 right-[12%] z-40 flex justify-center items-center bg-white rounded-full w-6 h-6 md:w-8 md:h-8"
      >
        <svg
          className="icon h-4 w-4 fill-black/50 md:h-6 md:w-6"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path>
        </svg>
      </button>
      {/* arrow right */}
      <button
        onClick={nextSlider}
        className="absolute bottom-16 z-40 left-[90%]  flex justify-center items-center bg-white rounded-full w-6 h-6 md:w-8 md:h-8"
      >
        <svg
          className="icon h-4 w-4 fill-black/50 md:h-6 md:w-6"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
          transform="rotate(180)"
        >
          <path d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path>
        </svg>
      </button>
      {/* dots */}
      <div className="flex justify-center items-center rounded-full z-40 absolute bottom-4 w-full gap-1">
        {carouselImages.map((img, idx) => (
          <div key={idx}>
            <button
              key={`${img}_${idx}`}
              onClick={() => setCurrentSlider(idx)}
              className={`rounded-full duration-500 bg-white ${
                currentSlider === idx ? "w-8" : "wz-2"
              } h-2`}
            ></button>
          </div>
        ))}
      </div>
      {/* Carousel container */}
      <div
        className="ease-linear duration-500 flex transform-gpu h-screen"
        style={{ transform: `translateX(-${currentSlider * 100}%)` }}
      >
        {/* sliders */}
        {carouselImages.map((slide, idx) => (
          <div
            key={idx}
            style={{
              backgroundImage: `linear-gradient(90deg, #151515 0%,  rgba(21, 21, 21, 0.00) 100%), url(/assets/images/banner/${
                idx + 1
              }.jpg)`,
            }}
            className="min-w-full lg:min-h-[90vh] bg-black/20 sm:h-full md:h-[90vh] object-cover bg-cover z-20"
          >
            <div className="lg:pl-16 pl-5 sm:pt-40 pt-20 pb-20 sm:pb-5 pr-2">
              <h1 className="lg:text-6xl md:text-4xl sm:text-3xl text-white font-bold landing-[75px] lg:max-w-[463px] sm:w-full text-balance">
                {slide?.title}
              </h1>
              <p className="my-[30px] leading-[30px] text-white font-normal sm:text-sm lg:text-lg lg:max-w-[522px] sm:w-full">
                {slide?.description}
              </p>
              <div className="flex flex-wrap gap-5">
                <PrimaryBtn>Discover More</PrimaryBtn>
                <button className="w-[170px] h-14 rounded bg-transparent border border-white text-white text-lg font-semibold flex items-center justify-center cursor-pointer transition">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;

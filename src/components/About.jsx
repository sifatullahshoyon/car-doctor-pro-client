import Image from "next/image";
import React from "react";
import personImg from "@/public/assets/images/about_us/person.jpg";
import partsImg from "@/public/assets/images/about_us/parts.jpg";
import PrimaryBtn from "./shared/Buttons/PrimaryBtn";

const About = () => {
  return (
    <section className="my-32">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5">
        {/* Image */}
        <div data-aos="fade-right" className="relative">
          <Image
            src={personImg}
            alt="car services worker images"
            className="rounded-lg"
            width={460}
            height={473}
            loading="lazy"
          />
          <Image
            src={partsImg}
            alt="car Parts images"
            width={327}
            height={332}
            className="absolute lg:top-1/4 lg:right-9 sm:top-1/2 border-[10px] border-white rounded-lg"
            loading="lazy"
          />
        </div>
        {/* Content */}
        <div data-aos="fade-left" className="z-30">
          <h6 className="mb-5 text-xl font-bold text-primary-color">
            About Us
          </h6>
          <p className="text-[45px] font-bold text-secondary-color text-balance leading-tight mb-8">
            We are qualified <br /> & of experience <br /> in this field
          </p>
          <p className="text-balance p-0 text-base text-accent-color font-normal leading-[30px] mb-5">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don&#39;t <br /> look even
            slightly believable.{" "}
          </p>
          <p className="text-balance p-0 text-base text-accent-color font-normal leading-[30px] mb-8">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don&#39;t look even slightly{" "}
            <br /> believable.{" "}
          </p>
          <PrimaryBtn>Get More Info</PrimaryBtn>
        </div>
      </div>
    </section>
  );
};

export default About;

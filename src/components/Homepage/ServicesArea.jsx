import React from "react";
import SectionTitle from "../shared/SectionTitle";
import { services } from "@/src/lib/services";
import ServiceCard from "../Cards/ServiceCard";
import BtnOutline from "../shared/Buttons/BtnOutline";

const ServicesArea = () => {
  return (
    <section className="my-32">
      <SectionTitle
        heading="Service"
        title="Our Service Area"
        description="the majority have suffered alteration in some form, by injected humour, or randomised <br> words which don't look even slightly believable."
      />
      <div
        data-aos="fade-up"
        className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center"
      >
        {services?.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
      <div className="flex justify-center mt-12 ">
        <BtnOutline className="mx-auto text-center">More Services</BtnOutline>
      </div>
    </section>
  );
};

export default ServicesArea;

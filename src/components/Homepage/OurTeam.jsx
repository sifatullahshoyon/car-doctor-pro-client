import React from "react";
import SectionTitle from "../shared/SectionTitle";
import Carousel from "../Carousel";

const OurTeam = () => {
  return (
    <section className="my-32">
      <SectionTitle
        heading="Team"
        title="Meet Our Team"
        description="the majority have suffered alteration in some form, by injected humour, or randomised <br> words which don't look even slightly believable."
      />
      <div
        data-aos="fade-up"
        className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 text-center"
      >
        <Carousel></Carousel>
      </div>
    </section>
  );
};

export default OurTeam;

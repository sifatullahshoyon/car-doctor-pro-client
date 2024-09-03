import React from "react";
import { SlCalender } from "react-icons/sl";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";

const Info = () => {
  return (
    <section className="my-32">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 bg-secondary-color justify-center items-center h-full lg:h-64 px-5 lg:px-0 py-10 lg:py-0 rounded w-full">
        <div className="flex justify-center items-center gap-5">
          <SlCalender className="text-primary-color w-10  h-10" />
          <div>
            <p className="text-balance text-base text-white font-semibold mb-2">
              We are open monday-friday
            </p>
            <p className="text-balance text-white text-2xl font-bold">
              7:00 am - 9:00 pm
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-5">
          <FaPhoneVolume className="text-primary-color w-10 h-10" />
          <div>
            <p className="text-balance text-base text-white font-semibold mb-2">
              Have a question?
            </p>
            <p className="text-balance text-white text-2xl font-bold">
              +2546 251 2658
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-5">
          <IoLocation className="text-primary-color w-10 h-10" />
          <div>
            <p className="text-balance text-base text-white font-semibold mb-2">
              Need a repair? our address
            </p>
            <p className="text-balance text-white text-2xl font-bold">
              Liza Street, New York
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;

"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Aos = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
    AOS.refresh(); // Optional: Refresh AOS to ensure all elements are picked up
  }, []);

  return null; // No need to return a wrapper div if you're not rendering anything here
};

export default Aos;

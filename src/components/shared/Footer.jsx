import React from "react";
import Container from "./Container";
import Image from "next/image";
import logo from "../../../public/assets/logo.svg";
import { FaGoogle, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="lg:h-[477px] bg-secondary-color">
      <Container>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2 justify-between pt-32">
          <div class="lg:col-span-2">
            <Link href="/">
              <Image src={logo} alt="logo" />
            </Link>
            <p className="text-balance text-base text-neutral-color leading-6	font-normal my-5">
              Edwin Diaz is a software and web <br /> technologies engineer, a
              life coach <br /> trainer who is also a serial .
            </p>
            <div className="md:flex md:flex-row flex-wrap gap-x-3 gap-y-2">
              <div className="w-9 h-8 mb-2 flex justify-center items-center bg-[#4C4C4C] P-5 rounded-full group cursor-pointer transition">
                <FaGoogle className="text-white text-sm group-hover:text-primary-color" />
              </div>
              <div className="w-9 h-8 mb-2 flex justify-center items-center bg-[#4C4C4C] P-5 rounded-full group cursor-pointer transition">
                <FaTwitter className="text-white text-sm group-hover:text-primary-color" />
              </div>
              <div className="w-9 h-8 mb-2 flex justify-center items-center bg-[#4C4C4C] P-5 rounded-full group cursor-pointer transition">
                <FaLinkedin className="text-white text-sm group-hover:text-primary-color" />
              </div>
              <div className="w-9 h-8 mb-2 flex justify-center items-center bg-[#4C4C4C] P-5 rounded-full group cursor-pointer transition">
                <FaYoutube className="text-white text-sm group-hover:text-primary-color" />
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-xl text-white font-semibold mb-10">About</h4>
            <ul>
              <li className="text-neutral-color text-base font-normal mb-4">
                <Link href="/">Home</Link>
              </li>
              <li className="text-neutral-color text-base font-normal mb-4">
                <Link href="/">Service</Link>
              </li>
              <li className="text-neutral-color text-base font-normal mb-4">
                <Link href="/">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl text-white font-semibold mb-10">About</h4>
            <ul>
              <li className="text-neutral-color text-base font-normal mb-4">
                <Link href="/">Why Car Doctor</Link>
              </li>
              <li className="text-neutral-color text-base font-normal mb-4">
                <Link href="/">About</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl text-white font-semibold mb-10">Support</h4>
            <ul>
              <li className="text-neutral-color text-base font-normal mb-4">
                <Link href="/">Support Center</Link>
              </li>
              <li className="text-neutral-color text-base font-normal mb-4">
                <Link href="/">Feedback</Link>
              </li>
              <li className="text-neutral-color text-base font-normal mb-4">
                <Link href="/">Accesbility</Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

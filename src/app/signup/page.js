"use client";
import Container from "@/src/components/shared/Container";
import React, { useState } from "react";
import loginImg from "@/public/assets/images/login/login.svg";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { BiSolidShow, BiSolidHide } from "react-icons/bi";

const signup = () => {
  const [showPassword, setShowPassword] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  console.log(watch("example"));

  const handlerShowPassword = () => {
    return setShowPassword(!showPassword);
  };

  return (
    <section className="my-32">
      <Container>
        <div className="flex md:flex-row flex-col flex-wrap gap-5 justify-center items-center ">
          {/* Image */}
          <div>
            <Image
              src={loginImg}
              alt="login Img"
              placeholder="blur"
              blurDataURL="data:image/jpeg..."
              loading="lazy"
            />
          </div>
          {/* Form */}
          <div className="mx-auto w-full max-w-md space-y-4 rounded-lg border bg-white p-10 shadow-lg">
            <h1 className="mb-12 text-center text-dark-two-color text-[40px] font-bold">
              Sign Up
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="block text-dark-two-color text-lg font-semibold"
                >
                  Name
                </label>
                <input
                  className="flex h-10 w-full rounded-md border px-3 py-2 text-base placeholder:text-[#A2A2A2] font-normal focus:ring-1 focus-visible:outline-primary-color "
                  id="name"
                  placeholder="Your Name"
                  name="name"
                  type="name"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-600">This field is required</span>
                )}
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-dark-two-color text-lg font-semibold"
                >
                  Email
                </label>
                <input
                  className="flex h-10 w-full rounded-md border px-3 py-2 text-base placeholder:text-[#A2A2A2] font-normal focus:ring-1 focus-visible:outline-primary-color "
                  id="email"
                  placeholder="Your Email"
                  name="email"
                  type="email"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-600">This field is required</span>
                )}
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="password"
                  className="block text-dark-two-color text-lg font-semibold"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    className="flex h-10 w-full rounded-md border px-3 py-2 text-base placeholder:text-[#A2A2A2] font-normal focus:ring-1 focus-visible:outline-primary-color "
                    id="password"
                    placeholder="Your Password"
                    name="password"
                    type={!showPassword ? "password" : "text"}
                    {...register("password", { required: true })}
                  />
                  <div className="absolute top-4 right-2 ">
                    <div onClick={handlerShowPassword}>
                      {showPassword ? <BiSolidShow /> : <BiSolidHide />}
                    </div>
                  </div>
                </div>
                {errors.password && (
                  <span className="text-red-600">This field is required</span>
                )}
              </div>
              <div className="">
                <button
                  type="submit"
                  className="w-full py-3 rounded bg-primary-color text-white text-lg font-semibold flex items-center justify-center cursor-pointer transition"
                >
                  Sign In
                </button>
              </div>
            </form>
            <div className="my-8 flex items-center">
              <hr className="flex-1 border-gray-400" />
              <div className="mx-4 text-accent-color font-normal">OR</div>
              <hr className="flex-1 border-gray-400" />
            </div>
            {/* Social icons */}
            <div className="flex justify-center space-x-4  hover:*:bg-zinc-400/20 *:dark:border-zinc-700">
              <button
                aria-label="Log in with Google"
                className="rounded-full p-3 bg-[#F5F5F8]"
              >
                <FcGoogle className="w-5 h-5" />
              </button>
              <button
                aria-label="Log in with Twitter"
                className="rounded-full p-3 bg-[#F5F5F8]"
              >
                <FaFacebook className="w-5 h-5 text-[#1877F2]" />
              </button>
              <button
                aria-label="Log in with GitHub"
                className="rounded-full p-3 bg-[#F5F5F8]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="size-5 fill-current"
                >
                  <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                </svg>
              </button>
            </div>
            <p className="text-center text-xl font-normal text-accent-color mt-9">
              Already have an account?
              <Link href="/login" className="font-semibold text-primary-color">
                Login
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default signup;

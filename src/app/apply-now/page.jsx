import { Button } from "@/components";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const ApplyNow = () => {
  return (
    <div>
      <div className="bg-gray-100 flex justify-center items-center h-screen">
        <div className="w-1/2 h-screen hidden lg:block">
          <img
            src="/assets/apply-now-login.jpeg"
            alt="Placeholder Image"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
          {/* <h1 className="text-2xl font-semibold mb-4">Login</h1> */}
          <h2 className="text-2xl md:text-3xl font-bold text-[#E59623]">
            Student Application Portal
            <p className="mb-6 w-fit text-[#2C2B4B]">Login.</p>
          </h2>
          <form action="#" method="POST">
            <div className="mb-4">
              <label for="username" className="block text-gray-600">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                autocomplete="off"
              />
            </div>
            <div className="mb-4">
              <label for="password" className="block text-gray-600">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                autocomplete="off"
              />
            </div>
            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                id="remember"
                name="remember"
                className="text-blue-500"
              />
              <label for="remember" className="text-gray-600 ml-2">
                Remember Me
              </label>
            </div>
            <div className="mb-6 text-blue-500">
              <a href="#" className="hover:underline">
                Forgot Password?
              </a>
            </div>
            <div className="w-full">
              <Link href={``}>
                <Button
                  btnName={"LOGIN"}
                  icon={<FaArrowRight />}
                  styleA={"flex items-center justify-center gap-1"}
                  style={
                    "border w-full font-semibold text-[14px] hover:text-[#2C2B4B] border-2 border-[#606060] rounded-full px-4 py-3 bg-[#E59623] hover:bg-[#ff9700] transition duration-200  ease-in-out hover:scale-105"
                  }
                />
              </Link>
            </div>
          </form>
          <div className="mt-6 text-blue-500 text-center">
            <a href="#" className="hover:underline">
              Sign up Here
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyNow;

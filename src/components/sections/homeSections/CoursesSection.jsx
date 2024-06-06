import React from "react";
// import Search from "@/components/Search";
import Button from "@/components/button";
import { FaArrowRight, FaSearch } from "react-icons/fa";
import Link from "next/link";
import CoursesSlider from "@/components/sliders/CoursesSlider";

const CoursesSection = () => {
  return (
    <div className="container mx-auto px-5">
      <div className="flex flex-col gap-[32px] lg:gap-[44px]">
        <div className="flex justify-between gap-4 flex-col lg:flex-row items-center">
          <h2 className="font-bold text-[36px] text-[#2C2B4B]">Our Courses</h2>
          <div>
            {/* <div className="relative">
              <span className="absolute right-3 top-3 text-[20px] flex items-center justify-center text-black/65">
                <FaSearch />
              </span>
              <input
                type="text"
                placeholder="Search for links"
                // id="search"
                // value={search}
                // onChange={(e) => {
                //   setSearch(e.target.value);
                // }}
                className="w-full h-auto font-inter text-[12px] text-[#021327] bg-transparent border border-[#ABABAB] outline-0 pr-8 pl-3 py-3 rounded-full"
              />
            </div> */}
          </div>
          {/* <div> */}
          {/* <Search /> */}
          {/* </div> */}
        </div>
        <div>
          <CoursesSlider />
        </div>
      </div>
    </div>
  );
};

export default CoursesSection;

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
          <h2 className="font-bold leading-9 text-center mx-auto text-[36px] text-[#2C2B4B]">
            Our Courses
          </h2>
        </div>
        <div>
          <CoursesSlider />
        </div>
      </div>
    </div>
  );
};

export default CoursesSection;

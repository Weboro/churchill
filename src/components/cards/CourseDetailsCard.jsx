import React from "react";
import Button from "@/components/button";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import CourseOverviewSection from "./CourseOverviewCard";

const CourseDetailsCard = ({
  menuTitle,
  subTitle,
  slug,
  faculty,
  courseDetails,
}) => {
  return (
    <div className="bg-[#FAF4F4] flex flex-col gap-8 md:gap-2 md:flex-row md:items-center p-4 rounded-md">
      <div className="flex-1 flex flex-col gap-1 md:gap-3">
        <span className="bg-[#F2CF9C] px-3 py-1 text-sm rounded-md capitalize w-fit">
          {faculty}
        </span>
        <h2 className="font-extrabold text-2xl lg:text-3xl text-matte-purple">
          {menuTitle}
        </h2>
        <p>{subTitle}</p>

        <div className="flex gap-4">
          {courseDetails?.slice(0, 3)?.map((item, index) => (
            <div className="flex flex-col items-center" key={index}>
              <div className="w-14 h-14 grid place-items-center bg-white rounded-full text-4xl">
                <p className="text-[#E59623]">{item?.icon}</p>
              </div>
              <h3 className="text-[#2C2B4B] font-bold text-xl lg:text-2xl">
                {item?.description}
              </h3>
            </div>
          ))}
        </div>
        {/*  */}
      </div>
      <div className="max-w-fit flex md:flex-col gap-3">
        <Link href={"/apply-now"} className="w-full flex-1">
          <Button
            btnName="Apply Now"
            icon={<FaArrowRight />}
            styleA={"flex items-center gap-1"}
            style="w-full"
          />
        </Link>
        <Link href={`/courses/${slug}`} className="w-full flex-1">
          <Button
            btnName="Learn More"
            icon={<FaArrowRight />}
            styleA={"flex items-center gap-1"}
            style="w-full"
            styleType="secondary"
          />
        </Link>
      </div>
    </div>
  );
};

export default CourseDetailsCard;

import React from "react";
import Button from "@/components/button";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const CourseDetailsCard = ({ menuTitle, subTitle, slug }) => {
  return (
    <div className="bg-[#FAF4F4] flex flex-col gap-8 md:gap-2 md:flex-row md:items-center p-4 rounded-[24px]">
      <div className="flex-1 flex flex-col gap-2 md:gap-4">
        <h2 className="font-extrabold text-2xl lg:text-3xl">{menuTitle}</h2>
        <p>{subTitle}</p>
        <span className="bg-[#F2CF9C] px-3 py-1 text-sm rounded-full capitalize w-fit">
          {/* {slug?.split("-")?.join(" ")} */}
          Bachelors of Business
        </span>
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

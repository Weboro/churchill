import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../button";
import { FaArrowRight } from "react-icons/fa";

const CoursesCard = ({ icon, title, subTitle, link }) => {
  return (
    <div className="bg-[#FAF4F4] outline outline-0 hover:outline-2 hover:outline-[#606060] p-5 rounded-[24px]">
      <div className="flex flex-col gap-4">
        <span className="relative">
          <Image
            src={`${icon}`}
            alt={"use-links-icon-image"}
            width={400}
            height={400}
            className="object-cover w-full h-[250px] rounded-[24px]"
          />
          <p className="absolute font-semibold top-3 right-3 bg-[#F2CF9C] text-[#2C2B4B] rounded-[24px] text-[12px] px-3 py-1">
            {subTitle}
          </p>
        </span>
        <h3 className="font-bold text-[20px] clamp-1 text-[#2C2B4B] leading-[28px]">
          {title}
        </h3>

        <div className="flex justify-between gap-3">
          <Link href={"/apply-now"}>
            <Button
              btnName={"Apply Now"}
              icon={<FaArrowRight />}
              styleA={"flex items-center gap-1"}
              style={
                "border font-semibold text-[14px] hover:text-[#2C2B4B] border-2 border-[#606060] rounded-full px-4 py-3 bg-[#E59623] hover:bg-[#ff9700] transition duration-200  ease-in-out hover:scale-105"
              }
            />
          </Link>
          <Link href={`${link}`}>
            <Button
              btnName={"Learn More"}
              styleA={"flex items-center gap-1"}
              styleType="secondary"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CoursesCard;

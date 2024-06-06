import React from "react";
import Button from "../button";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const ApplyCard = ({ title, description, image }) => {
  return (
    <div
      className="rounded-[32px] px-8 pt-[32px] lg:pb-0 pb-[32px] h-full flex flex-col gap-5"
      style={{
        backgroundImage: `linear-gradient(to bottom right, rgb(187, 171, 223), rgb(187 171 223 / 43%) 100%)`,
      }}
    >
      <div className="flex-1 flex flex-col gap-3 justify-between">
        <h2 className="font-bold text-[36px] text-[#2C2B4B] leading-[46px]">
          {title}
        </h2>
        <p>{description}</p>
        <div>
          <Link href={"/apply-now"} className="w-max">
            <Button
              btnName={"Apply Now"}
              icon={<FaArrowRight />}
              styleA={"flex items-center gap-1"}
              style={
                "border border-2 border-[#606060] rounded-full px-4 py-3 bg-[#E59623] hover:bg-[#ff9700] transition duration-200  ease-in-out hover:scale-105"
              }
            />
          </Link>
        </div>
      </div>
      <div className="hidden lg:block lg:flex-1">
        <div className="h-full flex justify-end items-end">
          <Image
            src={`${image}`}
            alt={"use-links-icon-image"}
            width={400}
            height={400}
            className="w-[285px] h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ApplyCard;

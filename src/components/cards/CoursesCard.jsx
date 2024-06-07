import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../button";
import { FaArrowRight } from "react-icons/fa";

const CoursesCard = ({ icon, title, faculty, subTitle, link }) => {
  return (
    <div className="rounded-md">
      <div className="flex flex-col gap-8">
        <span className="relative">
          <Image
            src={`${icon}`}
            alt={"use-links-icon-image"}
            width={400}
            height={400}
            className="object-cover aspect-[1/1] rounded-md"
          />
          <p className="absolute font-semibold top-3 right-3 bg-[#F2CF9C] text-[#2C2B4B] rounded-md text-[12px] px-3 py-1">
            {faculty}
          </p>
        </span>

        <div className="flex flex-col gap-4 justify-between">
          <Link href={`${link}`}>
            <h3 className="font-bold text-2xl clamp-2 text-[#2C2B4B] w-fit leading-[28px] hover-highlight">
              {title}
            </h3>
          </Link>

          <p className="clamp-3">{subTitle}</p>

          <div className="flex  pb-2 justify-center sm:justify-between flex-col items-center sm:flex-row gap-3">
            <Link className="w-full" href={"/apply-now"}>
              <Button
                btnName={"Apply Now"}
                icon={<FaArrowRight />}
                styleA={"flex items-center gap-1"}
                styleType="tertiary"
                style={"w-fit"}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesCard;

import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../button";
import { FaArrowRight } from "react-icons/fa";

const GovernanceCard = ({ data, handleBtnClick }) => {
  const { image, title, subTitle, description } = data;
  return (
    <div className="bg-[#FAF4F4] outline outline-0 hover:outline-2 hover:outline-[#606060] p-5 rounded-[24px]">
      <div className="flex flex-col gap-2">
        <span className="relative">
          <Image
            src={`${image}`}
            alt={"use-links-icon-image"}
            width={400}
            height={400}
            className="object-cover w-full h-[250px] rounded-[24px]"
          />
        </span>
        <h3 className="font-bold text-[20px] clamp-1 text-[#2C2B4B] leading-[28px]">
          {title}
        </h3>
        <p className="font-bold text-[16px] text-[#E59623]">{subTitle}</p>
        <p className="clamp-3">{description}</p>
        <div className="flex justify-between gap-3">
          <div
            onClick={() => handleBtnClick(title, subTitle, image, description)}
          >
            <Button
              btnName={"Learn More"}
              icon={<FaArrowRight />}
              styleA={"flex items-center gap-1"}
              styleType="secondary"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GovernanceCard;

import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../button";
import { FaArrowRight } from "react-icons/fa";

const GovernanceCard = ({ data, handleBtnClick }) => {
  const { image, title, subTitle, description } = data;
  return (
    <div className="h-full flex flex-col gap-3 justify-between group">
      <div className="flex flex-col gap-3">
        <span className="relative overflow-hidden  rounded-md ">
          <Image
            src={`${image}`}
            alt={`Image of ${title}`}
            width={400}
            height={400}
            className="object-cover w-full aspect-square group-hover:scale-105 transition-all"
          />
        </span>
        <h3 className="font-bold text-[20px]  text-[#2C2B4B] leading-[28px]">
          {title}
        </h3>
        <p className="font-bold text-[16px] text-[#E59623]">{subTitle}</p>
        <p
          className="clamp-3"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>

      <div onClick={() => handleBtnClick(title, subTitle, image, description)}>
        <Button
          btnName={"Learn More"}
          icon={<FaArrowRight />}
          styleA={"flex items-center gap-1"}
          styleType="tertiary"
        />
      </div>
    </div>
  );
};

export default GovernanceCard;

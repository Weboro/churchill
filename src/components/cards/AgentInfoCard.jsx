import React from "react";
import { Button } from "@/components";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export const AgentInfoCard = ({
  title,
  designation,
  agentName,
  addressLine1,
  addressLine2,
  phone,
  imageUrl,
}) => {
  return (
    <>
      <div className="bg-[#F3E4E4] w-full rounded-[20px] px-4 py-3 md:px-8 lg:py-4 flex flex-col gap-8 lg:flex-row items-center justify-between lg:gap-6">
        <div className="max-w-36 ">
          <Image
            src={imageUrl}
            width={250}
            height={250}
            alt={`logo of ${title}`}
            className="h-full aspect-square object-contain"
          />
        </div>
        <div className="flex-1 flex flex-col justify-center gap-2 text-center lg:text-left">
          <h2 className="text-2xl font-extrabold">{title}</h2>
          <p>{addressLine1}</p>
          <p>
            {addressLine2}
            {phone}
          </p>
        </div>
        <div className="flex flex-col w-full lg:w-fit md:flex-row md:items-center md:justify-between lg:flex-col lg:justify-center lg:items-start gap-2 md:gap-4">
          <p className="flex flex-col md:flex-row md:items-end md:gap-2 lg:gap-0 lg:items-start lg:flex-col text-center lg:text-left">
            <span className="text-sm uppercase">{designation}</span>
            <span className="text-xl font-bold">{agentName}</span>
          </p>
          <div className="mx-auto md:mx-0">
            <Link href="/">
              <Button
                btnName={"Request A Call Back"}
                icon={<FaArrowRight />}
                styleA={" flex items-center gap-4 "}
                style={
                  "w-fit mx-auto md:m-0 border border-2 border-[#606060] font-semibold text-[14px] rounded-full px-4 py-3 bg-[#E59623] hover:bg-[#ff9700] transition duration-200  ease-in-out hover:scale-105"
                }
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../button";
import { FaArrowRight } from "react-icons/fa";

const EventsCard = ({
  image,
  title,
  subTitle,
  day,
  month,
  time,
  date,
  link,
  slug,
  UpcomingKeyData,
}) => {
  return (
    <div>
      <div className="flex flex-col lg:p-0 p-5 lg:flex-row justify-between items-center gap-3 rounded-[24px] bg-[#F3E4E4]">
        <div className="flex flex-col lg:flex-row gap-5 items-center">
          <div className="relative">
            <div className="w-[220px] h-auto">
              <Image
                src={`${image}`}
                alt={"use-links-icon-image"}
                width={400}
                height={400}
                className="object-cover w-[220px] h-auto lg:rounded-tl-[24px] lg:rounded-bl-[24px]"
              />
              <div className="absolute top-2 left-2">
                <div className="flex aspect-square w-[5rem] flex-col text-center text-white bg-[#E59623] lg:rounded-[16px] p-2 font-bold">
                  <p>{day}</p>
                  <p className="text-[32px] leading-[28px]">{date}</p>
                  <p>{month?.substring(0, 3)?.toUpperCase()}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-2">
              <div className="text-center lg:text-start">
                <div className="flex flex-col gap-1">
                  <h2 className="font-bold text-[20px] text-[#2C2B4B] leading-[28px]">
                    {title}
                  </h2>
                  <p>{subTitle}</p>
                </div>
              </div>
              <div>
                <div className="flex items-center lg:justify-start justify-center gap-2">
                  <h2 className="font-bold">Tags:</h2>
                  {UpcomingKeyData?.map((item, index) => (
                    <p
                      key={index}
                      className="font-semibold bg-[#F2CF9C] text-[#2C2B4B] rounded-[24px] text-[14px] px-3 py-1"
                    >
                      {item?.menutitle}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full lg:w-fit mr-4 items-center justify-between lg:flex-col gap-2">
          <p className="text-[16px] text-center">{time}</p>
          <div>
            <Link href={`/events/${slug}`} className="">
              <Button
                btnName={"Learn More"}
                icon={<FaArrowRight />}
                styleA={"flex items-center gap-1"}
                styleType="secondary"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsCard;

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
  catagories,
  duration,
}) => {
  return (
    <div className="group flex rounded-md border cursor-pointer bg-neutral-50 hover-shadow border-gray-500/40 overflow-hidden flex-col md:flex-row gap-3 first:lg:col-span-2">
      <div className="relative">
        <div className="aspect-[4/2] md:w-[16rem] overflow-hidden md:aspect-auto md:h-full">
          <Image
            src={`${image}`}
            alt={"use-links-icon-image"}
            width={600}
            height={600}
            className="object-cover w-full h-full group-hover:scale-105 transition-all"
          />
        </div>
        <div className="absolute top-2 left-2 rounded-md flex gap-2 bg-primary-orange p-2 text-white font-bold ">
          <span>
            {duration?.startDate.split("-")[2]}
            <sup>th</sup>
          </span>

          <span>{duration?.startMonth}</span>
        </div>
      </div>

      <div className="flex-1 py-4 md:py-6 px-4 flex flex-col justify-between gap-4">
        <Link href={`/events/${slug}`} className="w-fit">
          <h3 className="font-bold text-xl md:text-3xl text-[#2C2B4B] leading-[28px] line-clamp-3 transition-all hover:text-primary-orange">
            {title}
          </h3>
        </Link>

        <div
          dangerouslySetInnerHTML={{ __html: subTitle }}
          className="line-clamp-5 md:line-clamp-6"
        />

        <Link href={`/events/${slug}`} className="w-fit">
          <Button
            icon={<FaArrowRight />}
            styleType="tertiary"
            styleA={"flex items-center gap-1"}
            btnName="Learn More"
          />
        </Link>

        <div className="flex flex-row flex-wrap gap-2">
          {catagories?.map((item, index) => (
            <p
              key={index}
              className="font-semibold bg-[#F2CF9C] text-[#2C2B4B] rounded-full text-[14px] px-3 py-1 h-fit"
            >
              {item?.title}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsCard;

import React from "react";
import { UpcomingKeyData } from "@/constDatas/UpcomingKeyData";
import KeyDatesCard from "@/components/cards/KeyDatesCard";
import Button from "@/components/button";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const EventsSection = () => {
  return (
    <div className="container mx-auto px-5">
      <div className="flex flex-col gap-[32px] lg:gap-[44px]">
        <h2 className="font-bold text-[36px] text-center mx-auto text-[#2C2B4B]">
          Upcoming Key Dates
        </h2>
        <div className="grid md:grid-cols-2 gap-5">
          {UpcomingKeyData?.slice(0, 6)?.map((item, index) => (
            <KeyDatesCard
              key={index}
              title={item?.title}
              subTitle={item?.subTitle}
              day={item?.day}
              date={item?.date}
              displayMonth={item?.month}
            />
          ))}
        </div>
        <div>
          <div className="flex justify-center">
            <Link
              href={
                "https://churchill-student-hub-eight.vercel.app//upcoming-key-dates"
              }
              className="w-max"
            >
              <Button
                btnName={"Load More"}
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

export default EventsSection;

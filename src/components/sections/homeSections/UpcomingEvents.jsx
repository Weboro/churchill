import Button from "@/components/button";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { eventsData } from "@/constDatas/eventsData";
import Link from "next/link";
import EventsCard from "@/components/cards/EventsCard";

const UpcomingEvents = () => {
  return (
    <div className="container mx-auto px-5">
      <div className="flex flex-col gap-[32px] lg:gap-[44px]">
        <div className="text-center">
          <h2 className="font-bold text-[36px] text-[#2C2B4B]">
            Upcoming Events
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {eventsData?.slice(0, 4)?.map((item, index) => (
            <EventsCard
              key={index}
              image={item?.image}
              title={item?.title}
              subTitle={item?.subTitle}
              day={item?.day}
              month={item?.month}
              time={item?.time}
              date={item?.date}
              link={item?.link}
              slug={item?.slug}
              catagories={item?.catagories}
              duration={item?.duration}
            />
          ))}
        </div>
        <div>
          <div className="flex justify-center">
            <Link href={"/events"} className="w-max">
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

export default UpcomingEvents;

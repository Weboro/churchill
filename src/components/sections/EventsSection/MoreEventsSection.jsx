import React from "react";
import { eventsData } from "@/constDatas/eventsData";
import { EventsCard } from "@/components";

const MoreEventsSection = () => {
  return (
    <div className="container mx-auto px-5">
      <h3 className="font-bold text-2xl mb-8">More Events</h3>

      {eventsData?.map((item, index) => (
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
  );
};

export default MoreEventsSection;

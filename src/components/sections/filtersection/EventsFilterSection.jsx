import React from "react";
// import { navItems } from "@/constDatas/navItems";
import { eventsData } from "@/constDatas/eventsData";
import { EventsCard } from "@/components";

import {
  CheckBoxList,
  FilterComponent,
  NewsSection,
  SelectComponent,
} from "@/components";

const EventsFilterSection = () => {
  // const data = navItems[2]?.Catagories;

  const tags = [
    { title: "Business" },
    { title: "Science" },
    { title: "Law" },
    { title: "Education" },
  ];

  const dates = [
    { title: "Today" },
    { title: "Next 7 Days" },
    { title: "Next 1 Month" },
    { title: "Past Events" },
  ];

  return (
    <div className="container mx-auto px-5 flex flex-col gap-[32px] lg:gap-[64px]">
      <div className="flex flex-col lg:flex-row gap-8 relative">
        <FilterComponent>
          <SelectComponent title="Tags" data={tags ? tags : []} />
          <CheckBoxList title="Degree Type" data={dates ? dates : []} />
        </FilterComponent>

        <div className="flex-1">
          <div className="flex flex-col gap-8">
            {eventsData?.slice(0, 4)?.map((item, index) => (
              <EventsCard
                day={item?.day}
                image={item?.image}
                month={item?.month}
                subTitle={item?.subTitle}
                time={item?.time}
                title={item?.title}
                date={item?.date}
                link={item?.link}
                slug={item?.slug}
                UpcomingKeyData={item?.Catagories}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>

      <NewsSection />
    </div>
  );
};

export default EventsFilterSection;

"use client";
import React, { useState } from "react";
// import { navItems } from "@/constDatas/navItems";
import { eventsData } from "@/constDatas/eventsData";
import { DataNotFound, EventsCard } from "@/components";

import {
  CheckBoxList,
  FilterComponent,
  NewsletterSection,
  SelectComponent,
} from "@/components";

const EventsFilterSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const query = searchQuery.trim().toLowerCase();

  const filteredArray = eventsData.filter((item) =>
    item.title.toLowerCase().includes(query)
  );

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
        <FilterComponent
          searchQuery={searchQuery}
          onSearchQuery={setSearchQuery}
        >
          <SelectComponent title="Tags" data={tags ? tags : []} />
          <CheckBoxList title="Filter by Date" data={dates ? dates : []} />
        </FilterComponent>

        <div className="flex-1">
          {filteredArray.length > 0 ? (
            <div className="flex flex-col gap-8">
              {filteredArray?.map((item, index) => (
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
          ) : (
            <DataNotFound />
          )}
        </div>
      </div>

      <NewsletterSection />
    </div>
  );
};

export default EventsFilterSection;

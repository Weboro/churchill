"use client";
import React, { useState } from "react";
import {
  DataNotFound,
  EventsCard,
  CheckBoxList,
  FilterComponent,
  NewsletterSection,
  SelectComponent,
} from "@/components";

const EventsFilterSection = ({ data }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const query = searchQuery.trim().toLowerCase();

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
    <>
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
            {data.length > 0 ? (
              <div className="flex flex-col gap-8">
                {data?.map((item, index) => (
                  <EventsCard
                    key={index}
                    id={item?.id}
                    slug={item?.slug}
                    image={item?.image}
                    title={item?.title}
                    description={item?.description}
                    rich_text={item?.rich_text}
                    start_time={item?.start_time}
                    end_time={item?.end_time}
                    time_duration={item?.time_duration}
                    tags={item?.tags}
                  />
                ))}
              </div>
            ) : (
              <DataNotFound />
            )}
          </div>
        </div>
      </div>
      <NewsletterSection />
    </>
  );
};

export default EventsFilterSection;

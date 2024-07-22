"use client";
import { EventsFilterSection, Spiner } from "@/components";
import React, { useEffect, useState } from "react";
import { FetchUpcomingKeyEventsData } from "@/components/utils/apiQueries";

const EventsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    FetchUpcomingKeyEventsData()
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      {isLoading ? (
        <Spiner />
      ) : (
        <div className="flex flex-col gap-[32px] lg:gap-[64px]">
          <h1 className="font-extrabold text-3xl text-center mt-[32px]">
            Churchill Events
          </h1>
          <EventsFilterSection isLoading={isLoading} data={data} />
        </div>
      )}
    </>
  );
};

export default EventsPage;

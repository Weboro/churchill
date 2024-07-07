import { EventsFilterSection } from "@/components";
import React from "react";

const EventsPage = () => {
  return (
    <div className="flex flex-col gap-[32px] lg:gap-[64px]">
      <h1 className="font-extrabold text-3xl text-center mt-[32px]">
        Churchill Events
      </h1>
      <EventsFilterSection />
    </div>
  );
};

export default EventsPage;

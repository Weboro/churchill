import {
  EnquirySection,
  HeroSection,
  NewsSection,
  RequestFormSection,
  UpcomingEvents,
  CoursesSection,
  EventsSection,
  BlogSection,
} from "@/components";
import React from "react";

const Home = () => {
  return (
    <main className="">
      <div className="flex flex-col gap-[32px] lg:gap-[64px]">
        <div className="">
          <HeroSection />
        </div>
        <div>
          <CoursesSection />
        </div>
        <div>
          <EventsSection />
        </div>
        <div>
          <EnquirySection />
        </div>
        {/* <div> */}
        {/* <RequestFormSection isButtonActive={true} /> */}
        {/* </div> */}
        <div>
          <UpcomingEvents />
        </div>
        <div>
          <BlogSection />
        </div>
        <div>
          <NewsSection />
        </div>
      </div>
    </main>
  );
};

export default Home;

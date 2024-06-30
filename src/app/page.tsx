import {
  EnquirySection,
  HeroSection,
  NewsletterSection,
  RequestFormSection,
  UpcomingEvents,
  CoursesSection,
  UpcomingKeyDates,
  BlogSection,
} from "@/components";
import React from "react";

const Home = () => {
  return (
    <main className="">
      <div className="flex flex-col gap-[32px] lg:gap-[100px]">
        <div className="">
          <HeroSection />
        </div>
        <div>
          <CoursesSection />
        </div>
        <div>
          <UpcomingKeyDates />
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
          <NewsletterSection />
        </div>
      </div>
    </main>
  );
};

export default Home;

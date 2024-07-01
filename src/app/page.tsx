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
        <HeroSection />

        <CoursesSection />

        <UpcomingKeyDates />

        <EnquirySection />

        <UpcomingEvents />

        <BlogSection />

        <NewsletterSection />
      </div>
    </main>
  );
};

export default Home;

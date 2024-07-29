"use client";
import {
  EnquirySection,
  HeroSection,
  NewsletterSection,
  UpcomingEvents,
  CoursesSection,
  UpcomingKeyDates,
  BlogSection,
  Spiner,
} from "@/components";
import React, { useEffect, useState } from "react";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <main className="">
      {isLoading ? (
        <Spiner />
      ) : (
        <div className="flex flex-col gap-[32px] lg:gap-[100px]">
          <HeroSection />

          <CoursesSection />

          <UpcomingKeyDates />

          <EnquirySection />

          <UpcomingEvents />

          <BlogSection />

          <NewsletterSection />
        </div>
      )}
    </main>
  );
};

export default HomePage;

"use client";
import {
  FilterComponent,
  EnquirySection,
  NewsSection,
  TopBannerCard,
  CoursesFilterSection,
} from "@/components";
import {} from "@/components";
import React, { useRef } from "react";

const Courses = () => {
  const ScrollRef = useRef();

  function handleRightBtn() {
    scrollToSection("scrollToCourse");
  }

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = element.offsetTop - 170;
      window.scroll({
        top: offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-col gap-[32px] lg:gap-[64px]">
      <TopBannerCard
        image={`/assets/courses-banner.jpg`}
        titleSpan={
          <span>
            Study at <span className="highlight">Churchill</span>
          </span>
        }
        subTitle="Explore our innovative programs and transform your career."
        BtnAText="Apply Now"
        BtnBText="View Courses"
        link="/apply-now"
        linkA=""
        handleRightBtn={handleRightBtn}
      />

      <span id="scrollToCourse" />

      <CoursesFilterSection />
      <EnquirySection />
      <NewsSection />
    </div>
  );
};

export default Courses;

import {
  FilterComponent,
  EnquirySection,
  NewsSection,
  TopBannerCard,
  CoursesFilterSection,
} from "@/components";
import {} from "@/components";
import React from "react";

const Courses = () => {
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
        linkA="#courses"
      />

      <CoursesFilterSection />

      <EnquirySection />
      <NewsSection />
    </div>
  );
};

export default Courses;

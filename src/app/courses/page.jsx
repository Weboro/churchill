"use client";
import { useEffect, useState } from "react";
import {
  FilterComponent,
  EnquirySection,
  NewsletterSection,
  TopBannerCard,
  CoursesFilterSection,
  Spiner,
} from "@/components";
import { FetchCourseData } from "@/components/utils/apiQueries";
import React, { useRef } from "react";
const Courses = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    FetchCourseData()
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

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
    <>
      {isLoading ? (
        <Spiner />
      ) : (
        <>
          <div className="flex flex-col gap-[32px] lg:gap-[64px]">
            <TopBannerCard
              image={`/assets/courses-banner.webp`}
              titleSpan={
                <span>
                  Study at <span className="highlight">Churchill</span>
                </span>
              }
              subTitle="Explore our innovative programs and transform your career."
              BtnAText="Apply Now"
              BtnBText="View Courses"
              link="https://agentportal.galaxy360.com.au/application-overview"
              linkA=""
              handleRightBtn={handleRightBtn}
            />

            <span id="scrollToCourse" />

            <CoursesFilterSection data={data} />
            <EnquirySection />
            <NewsletterSection />
          </div>{" "}
        </>
      )}
    </>
  );
};

export default Courses;

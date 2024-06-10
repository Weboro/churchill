import { TopBannerCard } from "@/components";
import React from "react";

const HeroSection = () => {
  return (
    <div>
      <TopBannerCard
        image={`/assets/banner-peroson.jpg`}
        titleSpan={
          <span>
            Transforming <span className={`highlight`}>Dreams</span> into
            Degrees.
          </span>
        }
        title={""}
        subTitle={"Explore our innovative programs and transform your career."}
        link={`/courses`}
        linkA={`/apply-now`}
        BtnAText={"Explore Our Courses"}
        BtnBText={"Apply Now"}
      />
    </div>
  );
};

export default HeroSection;

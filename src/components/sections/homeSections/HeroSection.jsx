import { TopBannerCard } from "@/components";
import React from "react";

const HeroSection = () => {
  return (
    <div>
      <TopBannerCard
        image={`/assets/test-hero-image.webp`}
        titleSpan={
          <span>
            Empowering A Brighter <span className={`highlight`}>Tomorrow</span>
          </span>
        }
        title={""}
        subTitle={
          <p className="my-4">
            Explore our innovative programs and transform your career.
          </p>
        }
        link={`/courses`}
        linkA={`/apply-now`}
        BtnAText={"Explore Our Courses"}
        BtnBText={"Apply Now"}
      />
    </div>
  );
};

export default HeroSection;

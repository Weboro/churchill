import TopBannerCard from "@/components/cards/TopBannerCard";
import React from "react";

const HeroSection = () => {
  return (
    <div>
      <TopBannerCard
        image={`/assets/hero-person.jpg`}
        // image={`/assets/hero-person.jpg`}
        titleSpan={
          <span>
            Empowering A Brighter <span className={`highlight`}>Tomorrow</span>
          </span>
        }
        title={""}
        subTitle={`<p className="my-4"> Explore our innovative programs and transform your career. </p>`}
        link={`/courses`}
        linkA={"/assets/apply-at-churchill.pdf"}
        BtnAText={"Explore Our Courses"}
        BtnBText={"Apply Now"}
      />
    </div>
  );
};

export default HeroSection;

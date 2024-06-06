import TopBannerCard from "@/components/cards/TopBannerCard";
import React from "react";
import MissionVisionsection from "./MissionVisionsection";
import CoreValuesSection from "./CoreValuesSection";
import AboutSection from "./AboutSection";
import RelatedSection from "./RelatedSection";
import NewsSection from "../commonSections/NewsSection";

const AboutInfoSection = () => {
  return (
    <div className="flex flex-col gap-[32px] lg:gap-[64px]">
      <TopBannerCard
        // image={``}
        // imageA={"/assets/hero-image.jpeg"}
        image={"/assets/hero-image.jpeg"}
        titleSpan={
          <span>
            About <span className="highlight">Churchill</span>
          </span>
        }
        title={""}
        subTitle={
          "Since our founding, Churchill Institute has been dedicated to providing industry-relevant education, empowering students with the skills and knowledge to thrive in their careers."
        }
        link={`/courses`}
        linkA={`/under-construction`}
        BtnAText={"Explore Our Courses"}
        BtnBText={"Apply Now"}
      />
      <div className="container mx-auto px-5">
        <div className="flex flex-col gap-[32px] lg:gap-[64px]">
          <MissionVisionsection />
          <CoreValuesSection />
          <AboutSection />
          <RelatedSection />
          <NewsSection />
        </div>
      </div>
    </div>
  );
};

export default AboutInfoSection;

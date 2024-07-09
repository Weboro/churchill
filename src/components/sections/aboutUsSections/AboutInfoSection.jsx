import React from "react";
import {
  TopBannerCard,
  MissionVisionsection,
  CoreValuesSection,
  AboutSection,
  RelatedSection,
  NewsletterSection,
} from "@/components";

const AboutInfoSection = () => {
  return (
    <div className="flex flex-col gap-[32px] lg:gap-[64px]">
      <TopBannerCard
        image={"/assets/hero-about.webp"}
        titleSpan={
          <span>
            Meet Our <span className="highlight">Team</span>
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
        </div>
      </div>

      <NewsletterSection />
    </div>
  );
};

export default AboutInfoSection;

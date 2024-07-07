import React from "react";
import { navItems } from "@/constDatas/navItems";
import {
  TabbedPane,
  CourseOverviewSection,
  EnquirySection,
  NewsletterSection,
  TopBannerCard,
  CoursesSlider,
} from "@/components";

const CourseDetails = ({ slug }) => {
  const data = navItems[2]?.Catagories.find((item) => item.slug == slug);
  const tabbedPaneHeaders = navItems[2]?.tabTitle;

  return (
    <div className="flex flex-col gap-[32px] lg:gap-[64px]">
      <TopBannerCard
        beforeTitle={data?.faculty}
        image={`/assets/banner-courses.jpg`}
        imageA={data?.heroImage}
        titleSpan={data?.menuTitle}
        courseCode={`${data?.courseCode}`}
        subTitle={data?.subTitle}
        BtnAText="Apply Now"
        BtnBText="Enquire More"
        link={`https://agentportal.galaxy360.com.au/application-overview`}
        linkA={`https://forms.zohopublic.com.au/CIHE/form/StudentHubEnquiry/formperma/XilFJje5kQ-h7f4saQYbSV4kJ-kAMiG7p1QNfWEvDXs`}
        imageAStyle={`lg:scale-[135%]`}
      />

      <CourseOverviewSection overviewData={data?.courseDetails} />

      <TabbedPane
        tabbedPaneHeaders={tabbedPaneHeaders}
        tabbedPaneData={data?.tabbedPaneData}
      />

      <EnquirySection />

      <div className="container mx-auto px-5">
        <h2 className="font-bold leading-9 mb-6 text-[36px] text-[#2C2B4B]">
          Browse Other Courses
        </h2>

        <CoursesSlider />
      </div>

      <NewsletterSection />
    </div>
  );
};

export default CourseDetails;

import React from "react";
import { navItems } from "@/constDatas/navItems";
import {
  TabbedPane,
  CourseOverviewSection,
  EnquirySection,
  NewsSection,
  TopBannerCard,
} from "@/components";

const CourseDetails = ({ slug }) => {
  const data = navItems[2]?.Catagories.find((item) => item.slug == slug);
  const tabbedPaneHeaders = navItems[2]?.tabTitle;

  console.log(data);
  return (
    <div className="flex flex-col gap-[32px] lg:gap-[64px]">
      <TopBannerCard
        beforeTitle={data?.faculty}
        image={`/assets/banner-courses.jpg`}
        imageA={data?.heroImage}
        titleSpan={data?.menuTitle}
        courseCode={`Course Code: ${data?.courseCode}`}
        subTitle={data?.subTitle}
        BtnAText="Apply Now"
        BtnBText="Enquire More"
        link={`/apply-now`}
        linkA={`https://forms.zohopublic.com.au/CIHE/form/StudentHubEnquiry/formperma/XilFJje5kQ-h7f4saQYbSV4kJ-kAMiG7p1QNfWEvDXs`}
        imageAStyle={`lg:scale-[150%]`}
      />

      <CourseOverviewSection overviewData={data?.courseDetails} />

      <TabbedPane
        tabbedPaneHeaders={tabbedPaneHeaders}
        tabbedPaneData={data?.tabbedPaneData}
      />

      <EnquirySection />

      <NewsSection />
    </div>
  );
};

export default CourseDetails;

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
import Link from "next/link";

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
                  Study Bachelor of Business at <span className="highlight">Churchill</span>
                </span>
              }
              subTitle="Explore our innovative programs and transform your career."
              BtnAText="Apply Now"
              BtnBText="View Courses"
              link="https://agentportal.galaxy360.com.au/application-overview"
              linkA=""
              handleRightBtn={handleRightBtn}
            />
            <section className="container mx-auto bg-white rounded-lg p-8 fade-in">
              <div className="text-center mb-8">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Bachelor of Business (BBus)</h1>
                <p className="text-lg md:text-xl text-gray-600">
                  CRICOS Course Code: <a href="https://cricos.education.gov.au/Course/CourseDetails.aspx?CourseId=111749" target="_blank" className="text-orange-500 hover:underline">111749J</a>
                </p>
              </div>

              <div className="mb-8">
                <p className="text-gray-700 leading-relaxed">
                  The Bachelor of Business (BBus) (CRICOS Course Code <a href="https://cricos.education.gov.au/Course/CourseDetails.aspx?CourseId=111749" target="_blank" className="text-orange-500 hover:underline">111749J</a>) is at level 7 of the <a href="https://www.aqf.edu.au/framework/aqf-levels#toc-aqf-level-7-criteria-3" target="_blank" className="text-orange-500 hover:underline"> Australian Qualifications Framework (AQF) </a> and is accredited by the <a href="https://www.teqsa.gov.au/provider/mpika-holdings-pty-ltd" target="_blank" className="text-orange-500 hover:underline">Tertiary Education Quality and Standards Agency (TEQSA) . </a> The BBus:
                </p>
              </div>

              <div className="mb-8">
                <ul className="space-y-3 text-gray-700">
                  <li>
                    • Comprises four (4) majors in <Link href="/courses/major-in-accounting" className="text-orange-500 hover:underline">Accounting</Link>,  <Link href="/courses/major-in-hospitality" className="text-orange-500 hover:underline">Hospitality</Link>, <Link href="/courses/major-in-information-systems" className="text-orange-500 hover:underline">Information Systems</Link> and <Link href="/courses/major-in-management" className="text-orange-500 hover:underline">Management</Link>
                    <ul className="ml-6 mt-2 space-y-2">
                      <li>* The Accounting major is accredited by <a href="https://apps.cpaaustralia.com.au/accredited-course-details/?id=c296df07-cd90-ef11-8a69-00224817f123" target="_blank" className="text-orange-500 hover:underline"> CPA Australia </a> and <a href="https://www.charteredaccountantsanz.com/-/media/4014530aae564cf18df73ca785a61b1c.pdf" target="_blank" className="text-orange-500 hover:underline"> Chartered Accountants (CA) Australia </a></li>
                      <li>* Is delivered over 3 years full-time, face to face on campus over 6 semesters.</li>
                      <li>* Requires completion of 24 Units (240 credit points) that comply with the course major rules to meet graduation eligibility requirements.</li>
                    </ul>
                  </li>
                  <li>• Each semester comprises 12 weeks of class teaching (class attendance), a mid-semester break, a one (1) 1 week study break and a two (2) week exam period. Refer to the <Link href="https://student.churchill.nsw.edu.au/upcoming-key-dates" target="_blank" className="text-orange-500 hover:underline">key dates </Link> for details.</li>
                  <li>• Attendance for each unit includes 4 face-to-face contact hours per week that are divided into lecture and tutorial components (2-hour lecture + 2-hour tutorial).</li>
                  <li>• For each contact hour, 1.5 hours of independent study is expected from students for every face-to face hour (4 + 6 = 10 hours’ workload per unit per week).</li>
                  <li>• Full time workload: 4 Units x 10 hours per Unit = 40 hours per week.</li>
                </ul>
              </div>

              <div className="mb-8">
                <p className="text-gray-700 leading-relaxed">
                  The BBus does not include a Work Integrated Learning (WIL) component.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Learning Outcomes</h2>
                <p className="text-gray-700 mb-4">
                  The BBus has the following learning outcomes that are consistent with AQF Level 7 qualification requirements:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="outcome-card bg-orange-50 rounded-lg p-4">
                    <p className="text-gray-700">Apply analytical skills and competencies to solve practical business problems.</p>
                  </div>
                  <div className="outcome-card bg-orange-50 rounded-lg p-4">
                    <p className="text-gray-700">Acquire, demonstrate and apply specialised knowledge to management practice.</p>
                  </div>
                  <div className="outcome-card bg-orange-50 rounded-lg p-4">
                    <p className="text-gray-700">Demonstrate the ability to develop, analyse and evaluate business reports.</p>
                  </div>
                  <div className="outcome-card bg-orange-50 rounded-lg p-4">
                    <p className="text-gray-700">Demonstrate an ability to effectively communicate in written and oral forms.</p>
                  </div>
                  <div className="outcome-card bg-orange-50 rounded-lg p-4">
                    <p className="text-gray-700">Recognise the relationship between business and society; practise social responsibility and sustainable management that is cognisant of diversity.</p>
                  </div>
                  <div className="outcome-card bg-orange-50 rounded-lg p-4">
                    <p className="text-gray-700">Demonstrate the capacity to work individually and as part of a team to solve business problems.</p>
                  </div>
                </div>
              </div>
            </section>

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

import {
  EnquirySection,
  KeyDatesCard,
  NewsletterSection,
  TopBannerCard,
  UpcomingEvents,
  UpcomingKeyDates,
} from "@/components";
import React from "react";

const page = () => {
  return (
    <div>
      <TopBannerCard
        image="/assets/about-image.webp"
        title="Student Enrolment and Study Load Rules"
        subTitle="Semesters 1, 2 and 3 - Important Information for Current Students<br/>Understanding your academic requirements and progression policies"
        titleSpan=""
        BtnAText="Contact Student Services"
        link="/contact"
        beforeTitle="Current Students"
        showBtnB={false}
      />

      <div className="max-w-6xl mx-auto px-6 py-12">
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg border-primary-orange p-8">
            <h2 className="text-2xl font-bold text-primary-green mb-6 flex items-center">
              <div className="w-8 h-8 bg-primary-orange rounded-full flex items-center justify-center text-white font-bold mr-3">
                1
              </div>
              Standard Course Requirements
            </h2>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                Students are required to complete{" "}
                <strong className="text-primary-orange">
                  eight (8) units per year
                </strong>{" "}
                across two semesters to maintain satisfactory academic progress
                and complete their course within the Certificate of Enrolment
                (CoE) timeframe.
              </p>
              <div className="bg-highlight-orange bg-opacity-20 p-4 rounded-lg">
                <p className="font-semibold text-primary-green">
                  Students must complete their course on time unless they have:
                </p>
                <ul className="mt-2 space-y-1 ml-4">
                  <li className="flex items-start">
                    <span className="text-primary-orange mr-2">•</span>
                    Previously demonstrated compassionate or compelling
                    circumstances
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-orange mr-2">•</span>
                    Evidence of engaging with the Learning Management Plan (LMP)
                    issued by Churchill Institute
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg border-primary-orange p-8">
            <h2 className="text-2xl font-bold text-primary-green mb-6 flex items-center">
              <div className="w-8 h-8 bg-primary-orange rounded-full flex items-center justify-center text-white font-bold mr-3">
                2
              </div>
              Certificate of Enrolment (CoE) Extensions
            </h2>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                Based on <strong>Standard 8</strong> of the National Code of
                Practice for Providers of Education and Training to Overseas
                Students 2018 (Cth) and Churchill Institute's Course Progression
                and Graduation Policy, CoE extensions are only considered in
                specific circumstances.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-normal-grey p-6 rounded-lg">
                  <h3 className="font-bold text-primary-green mb-3">
                    Compassionate or Compelling Circumstances
                  </h3>
                  <p className="text-sm">
                    Extensions may be granted when students demonstrate they
                    have experienced circumstances beyond their reasonable
                    control that significantly impact their ability to progress.
                  </p>
                </div>
                <div className="bg-normal-grey p-6 rounded-lg">
                  <h3 className="font-bold text-primary-green mb-3">
                    Academic Intervention Engagement
                  </h3>
                  <p className="text-sm">
                    Students who can demonstrate they have actively tried to
                    improve their academic performance by completing activities
                    outlined in their Learning Management Plan (LMP).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg border-primary-orange p-8">
            <h2 className="text-2xl font-bold text-primary-green mb-6 flex items-center">
              <div className="w-8 h-8 bg-primary-orange rounded-full flex items-center justify-center text-white font-bold mr-3">
                3
              </div>
              Students Awarded Advanced Standing
            </h2>
            <div className="space-y-6 text-gray-700">
              <p className="leading-relaxed">
                Students who receive credit for previous study (Advanced
                Standing) have specific requirements to complete their course
                within a revised timeframe.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-orange rounded-full mt-2 flex-shrink-0"></div>
                  <p>
                    Students awarded <strong>four (4) units or more</strong> in
                    advanced standing will have their CoE course end date
                    reduced (as required per Standard 2.5 of the National Code
                    of Practice 2018)
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-orange rounded-full mt-2 flex-shrink-0"></div>
                  <p>
                    Must complete the remaining course units –{" "}
                    <strong>eight (8) per year</strong> – within the reduced
                    (revised) CoE end date
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-orange rounded-full mt-2 flex-shrink-0"></div>
                  <p>
                    Are required to repeat failed subjects (maximum of 2 units)
                    in <strong>semester 3</strong> to maintain academic progress
                    and complete their course on time
                  </p>
                </div>
              </div>

              <div className="bg-light-grey p-4 rounded-lg">
                <p className="text-sm font-semibold text-primary-green">
                  Exception: Students with advanced standing may extend beyond
                  their revised CoE end date only if they have previously
                  demonstrated compassionate or compelling circumstances or have
                  engaged with the LMP issued by Churchill Institute.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="bg-primary-orange bg-opacity-10 border border-primary-orange rounded-lg p-6">
            <h3 className="text-xl font-bold text-primary-orange mb-4">
              📋 Important Notice
            </h3>
            <p className="text-gray-700">
              All policies are in accordance with the{" "}
              <a
                href="https://www.legislation.gov.au/Details/F2017L01182"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-orange hover:underline font-semibold"
              >
                National Code of Practice for Providers of Education and
                Training to Overseas Students 2018 (Commonwealth)
              </a>{" "}
              and Churchill Institute's internal policies. Students are
              encouraged to speak with Student Services if they have questions
              about their enrolment or academic progress.
            </p>
          </div>
        </section>
      </div>

      <UpcomingKeyDates />

      <br />

      <EnquirySection />
      <br />
      <NewsletterSection />
    </div>
  );
};

export default page;

import React from "react";
import Link from "next/link";
import { Button, PatternBannerCard } from "@/components";

const scholarships = [
  {
    title: "Diploma-to-Degree Bursary",
    description:
      "If you've already completed an Australian AQF Diploma (or higher) and you're currently onshore in Australia, this bursary can help you take the next step into a business degree. Eligible students receive a 20% tuition fee reduction when progressing into Churchill's Bachelor of Business (CRICOS 111749J). You may also be able to apply for advanced standing/credit separately (subject to assessment), helping you build on what you've already studied.",
    pdf: "/assets/Diploma-to-Degree-Bursary-(Onshore).pdf",
  },
  {
    title: "Global Gateway Scholarship (GGS)",
    description:
      "Designed for high-achieving international students applying from offshore, the Global Gateway Scholarship provides a 20% tuition fee reduction for 2026 intakes. It recognises strong academic performance and supports students who are ready to take on a globally relevant business qualification in Australia. Selection is based on academic merit and your supporting documents; where places are limited, eligible applicants may be ranked competitively.",
    pdf: "/assets/Churchills-Global-Gateway-Scholarship-2026.pdf",
  },
];

const Page = () => {
  return (
    <>
      <PatternBannerCard
        title="Scholarships & Bursaries"
        description="Support to help eligible students reduce tuition costs."
      />

      <main className="container mx-auto px-5">
        <section className="max-w-4xl mx-auto pt-6 pb-12 text-center">
          <p className="text-gray-700 leading-relaxed">
            Studying in Australia is a major investment - Churchill's
            scholarships and bursaries are designed to help eligible students
            reduce their tuition costs and start their journey with greater
            confidence. Details, eligibility and conditions vary by award,
            please download the relevant PDF for full information.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-12">
          {scholarships.map((item) => (
            <div
              key={item.title}
              className="bg-white shadow-sm border border-neutral-200 rounded-lg p-6 flex flex-col gap-4"
            >
              <h2 className="text-xl font-semibold text-gray-900">
                {item.title}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {item.description}
              </p>
              <div>
                <Link
                  href={item.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex"
                >
                  <Button btnName="Learn more (PDF)" />
                </Link>
              </div>
            </div>
          ))}
        </section>

        <section className="max-w-4xl mx-auto pb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            How to Apply
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Apply for your course as normal and submit the required supporting
            documents. If you are eligible, Churchill will assess the
            scholarship/bursary in line with the relevant award criteria and the
            documents you provide.
          </p>
          <Link href="https://churchill.nsw.edu.au/apply-for-course-admission">
            <Button btnName="Apply for Course Admission" />
          </Link>
        </section>

        <section className="max-w-4xl mx-auto pb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Important Note
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Scholarships and bursaries are offered in line with Churchill's
              Scholarships and Prizes Policy and are subject to eligibility,
              assessment and availability. Meeting the criteria does not
              guarantee an award, and Churchill may vary, suspend or withdraw an
              award in accordance with institutional requirements.
            </p>
            <p>
              Awards apply to tuition fees only and exclude non-tuition costs
              (including OSHC, accommodation, living expenses,
              textbooks/materials, visa costs and third-party fees).
              Scholarships/bursaries do not guarantee admission, a CoE, visa
              approval, employment or migration outcomes.
            </p>
            <p>
              Any indicative course duration or "fast-track" statements are
              indicative only and depend on factors such as approved credit (if
              applicable), study load, subject availability/timetabling and
              satisfactory academic progress. Full details are set out in the
              relevant PDF and the policy linked above.
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Page;

import { PatternBannerCard } from "@/components";
import Button from "@/components/button";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const enrollments = {
  semester_enrollments: {
    value: 474,
    subtext: "International Students",
  },
  EFTSL: {
    value: 231.08,
    subtext: "EFTSL",
  },
  semester: "Semester 2/2025",
};

const GovernanceStructure = ({ slug }) => {
  return (
    <>
      <PatternBannerCard title="Financial Standing, TPS & Enrolment Summary" />
      <div className="container mx-auto px-5">
        <main className="max-w-5xl mx-auto px-4 py-12 space-y-12">
          <section className="bg-white rounded-lg border p-6 fade-in">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Financial Standing
            </h2>
            <p className="text-gray-700 leading-relaxed mb-5">
              Refer to the Financial Auditor's Declaration from the 2024
              Financial Year Audit of CIHE's Accounts.
            </p>
            <Link
              href={`/assets/docs/Auditor Declaration_FY_2024.pdf`}
              target="_blank"
              className="w-max "
            >
              <Button
                btnName={"View Report"}
                icon={<FaArrowRight />}
                styleA={"flex items-center gap-1"}
                style={
                  "border border-2 border-[#606060] rounded-md px-4 py-3 bg-[#E59623] hover:text-black hover:bg-[#ff9700] transition duration-200  ease-in-out hover:scale-105"
                }
              />
            </Link>
          </section>

          <section className="bg-white rounded-lg border p-6 fade-in">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Tuition Protection Service (TPS)
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Churchill Institute of Higher Education financially contributes to
              the{" "}
              <a
                href="https://www.education.gov.au/tps"
                target="_blank"
                className="text-orange-500 hover:underline"
              >
                {" "}
                Tuition Protection Service (TPS)
              </a>{" "}
              that protects students in the event a course of study provided by
              an approved provider ceases to be provided after it starts but
              before it is completed. Tuition assurance for international and
              domestic students (whether they are paying up-front or deferring
              tuition via FEE-HELP) is provided through the Australian
              Government’s Tuition Protection Service (TPS).
            </p>
          </section>

          <section className="bg-white rounded-lg border p-6 fade-in">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              2025 Enrolments
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Churchill Institute of Higher Education enrols approximately{" "}
              {enrollments.semester_enrollments.value}{" "}
              {enrollments.semester_enrollments.subtext} ({enrollments.semester}
              ) at an estimated {enrollments.EFTSL.subtext} of{" "}
              {enrollments.EFTSL.value} for this semester.
            </p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-orange-50 rounded-lg p-4 text-center">
                <p className="text-lg font-medium text-gray-800">
                  {enrollments.semester_enrollments.value}
                </p>
                <p className="text-sm text-gray-600">
                  {enrollments.semester_enrollments.subtext} (
                  {enrollments.semester})
                </p>
              </div>
              <div className="bg-orange-50 rounded-lg p-4 text-center">
                <p className="text-lg font-medium text-gray-800">
                  {enrollments.EFTSL.value}
                </p>
                <p className="text-sm text-gray-600">
                  {enrollments.EFTSL.subtext}
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default GovernanceStructure;

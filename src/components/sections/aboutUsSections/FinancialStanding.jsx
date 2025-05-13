import { PatternBannerCard } from "@/components";
import Image from "next/image";
import FadeUpAnimation from "@/animations/FadeUp";
import Button from "@/components/button";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";


const GovernanceStructure = ({ slug }) => {
    return (
        <div>
            <PatternBannerCard title="Financial Standing, TPS & Enrolment Summary" />
            <div className="container mx-auto px-5">
                {/* <Image
          width={1000}
          height={800}
          alt="governance chart"
          src="/assets/CIHE-Governance-Structi.svg"
          className="w-full"
        /> */}
                <main className="max-w-5xl mx-auto px-4 py-12 space-y-12">
                    <section className="bg-white rounded-lg shadow-lg p-6 fade-in">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Financial Standing</h2>
                        <p className="text-gray-700 leading-relaxed mb-5">
                            Refer to the Financial Auditor's Declaration from the 2024 Financial Year Audit of CIHE's Accounts.
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

                    <section className="bg-white rounded-lg shadow-lg p-6 fade-in">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Tuition Protection Service (TPS)</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Churchill Institute of Higher Education financially contributes to the <a href="https://www.education.gov.au/tps" target="_blank" className="text-orange-500 hover:underline"> Tuition Protection Service (TPS)</a> that protects students in the event a course of study provided by an approved provider ceases to be provided after it starts but before it is completed.
                            Tuition assurance for international and domestic students (whether they are paying up-front or deferring tuition via FEE-HELP) is provided through the Australian Government’s Tuition Protection Service (TPS).
                        </p>
                    </section>

                    <section className="bg-white rounded-lg shadow-lg p-6 fade-in">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">2025 Enrolments</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Churchill Institute of Higher Education enrols approximately 499 international students (Semester 1/2025) at an estimated EFTSL of 218.31 for this semester.
                        </p>
                        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-orange-50 rounded-lg p-4 text-center">
                                <p className="text-lg font-medium text-gray-800">499</p>
                                <p className="text-sm text-gray-600">International Students</p>
                            </div>
                            <div className="bg-orange-50 rounded-lg p-4 text-center">
                                <p className="text-lg font-medium text-gray-800">218.31</p>
                                <p className="text-sm text-gray-600">EFTSL (Semester 1/2025)</p>
                            </div>
                        </div>
                    </section>
                </main>

            </div>
        </div>
    );
};

export default GovernanceStructure;

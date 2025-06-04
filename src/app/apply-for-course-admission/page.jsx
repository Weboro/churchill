import { Button, PatternBannerCard } from "@/components";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            Admission Information
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Join Churchill’s vibrant community! Discover how to apply for our courses as a domestic or international student.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <svg className="w-6 h-6 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Eligibility & Application
            </h2>
            <ul className="text-gray-600 space-y-4">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-orange-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Admission is open to eligible domestic and international students.</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-orange-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Apply for <a href="https://student.churchill.nsw.edu.au/upcoming-key-dates" className="text-orange-500 hover:underline" target="_blank">Semester 1 (late March)</a> or <a href="https://student.churchill.nsw.edu.au/upcoming-key-dates" className="text-orange-500 hover:underline" target="_blank">Semester 2 (late July)</a>.</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-orange-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Complete the <a href="https://churchill.nsw.edu.au/assets/apply-at-churchill.pdf" className="text-orange-500 hover:underline" target="_blank">Application Form</a> with certified documents at least two weeks before the semester start date. Late applications may be accepted at Churchill’s discretion.</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-orange-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Applications for Admission are assessed against the course admission criteria as specified in the <a href="https://backend.churchill.nsw.edu.au/media/policy_pdfs/Admissions_Policy_CIHE_v1.0_April_2025-Web_oLAnI8C.pdf" className="text-orange-500 hover:underline" target="_blank">Admissions Policy (Admission Guidelines page 10/16)</a>  and the general provisions of this policy.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <svg className="w-6 h-6 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
              </svg>
              How to Submit
            </h2>
            <p className="text-gray-600 mb-4">
              Submit your application by:
            </p>
            <ul className="text-gray-600 space-y-4">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-orange-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Directly to Churchill via the <a href="https://churchill.nsw.edu.au/assets/apply-at-churchill.pdf" className="text-orange-500 hover:underline" target="_blank">Application Form</a>.</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-orange-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Through an approved <a href="https://churchill.nsw.edu.au/find-agent" className="text-orange-500 hover:underline" target="_blank">Education Agent</a>.</span>
              </li>
            </ul>
            <p className="text-gray-600 mt-4 italic">
              For advanced standing, apply at the time of admission (see <a href="https://backend.churchill.nsw.edu.au/media/policy_pdfs/Advanced-Standing-Policy-and-Procedure_RLcCgHQ.pdf" className="text-orange-500 hover:underline">Advanced Standing details</a>).
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <svg className="w-6 h-6 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Application Outcome
            </h2>
            <p className="text-gray-600 mb-4">
              You’ll be notified within <strong>three business days</strong> of submitting a complete application.
            </p>
            <ul className="text-gray-600 space-y-4">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-orange-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Successful applicants</strong> receive an Offer of Admission with terms and conditions. International students must pay a fee deposit by the specified date.</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-orange-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Unsuccessful applicants</strong> are informed with reasons, referencing the <a href="https://backend.churchill.nsw.edu.au/media/policy_pdfs/Admissions_Policy_CIHE_v1.0_April_2025-Web_oLAnI8C.pdf" className="text-orange-500 hover:underline" target="_blank">Admissions Policy</a>.</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-orange-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Unsuccessful applicants can appeal via the <a href="https://forms.zohopublic.com.au/CIHE/form/Grievanceform/formperma/5jf5-XC5SXb47VhUMTlxv30fih-aqYAUbQh8V3lncvQ" className="text-orange-500 hover:underline" target="_blank">Student Grievance Form</a>, per <a href="https://backend.churchill.nsw.edu.au/media/policy_pdfs/Student-Grievance-Management-Policy.pdf" className="text-orange-500 hover:underline" target="_blank">Grievance Policy</a>.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <a href="https://churchill.nsw.edu.au/assets/apply-at-churchill.pdf" download="apply-at-churchill.pdf"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg inline-flex items-center space-x-2 transition-colors duration-200">
            <i class="fi fi-rr-download"></i>
            <span>Download Application Form</span>
          </a>
        </div>
      </div>
    </div>
    //     <div>
    //   <PatternBannerCard>
    //     <div className="text-center mb-12">
    //       <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
    //         Admission Information
    //       </h1>
    //       <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
    //         Learn how to apply to Churchill’s courses as a domestic or international student.
    //       </p>
    //     </div>
    //   </PatternBannerCard>
    //   <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

    //     <div className="grid grid-cols-1 gap-8 mb-12">
    //       <div className="bg-white rounded-lg shadow-lg p-8">
    //         <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
    //           <svg className="w-6 h-6 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    //           </svg>
    //           Admission Details
    //         </h2>
    //         <p className="text-gray-600 mb-4">
    //           Admission to Churchill’s course(s) is open to eligible domestic and international students.
    //         </p>
    //         <ul className="text-gray-600 space-y-4">
    //           <li className="flex items-start">
    //             <svg className="w-5 h-5 text-orange-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
    //             </svg>
    //             <span>Students may apply to commence a course offered by Churchill in either semester 1 (late March) or semester 2 (late July) of each year (refer to the <a href="https://student.churchill.nsw.edu.au/upcoming-key-dates" className="text-orange-500 hover:underline" target="_blank">Dates</a> for semester start dates).</span>
    //           </li>
    //           <li className="flex items-start">
    //             <svg className="w-5 h-5 text-orange-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
    //             </svg>
    //             <span><strong>Complete the <a href="https://churchill.nsw.edu.au/assets/apply-at-churchill.pdf" className="text-orange-500 hover:underline" target="_blank">Form</a> and attach the required certified evidence (documentation) no later than two (2) weeks before the semester 1 or 2 semester start date. Churchill may accept late applications at its discretion.</strong></span>
    //           </li>
    //           <li className="flex items-start">
    //             <svg className="w-5 h-5 text-orange-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
    //             </svg>
    //             <span>Applications for Admission are assessed against the course admission criteria as specified in the <a href="https://backend.churchill.nsw.edu.au/media/policy_pdfs/Admissions_Policy_CIHE_v1.0_April_2025-Web_oLAnI8C.pdf" className="text-orange-500 hover:underline" target="_blank">Admissions Policy</a> and the general provisions of this policy.</span>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>

    //     <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
    //       <div className="bg-white rounded-lg shadow-lg p-8">
    //         <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
    //           <svg className="w-6 h-6 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
    //           </svg>
    //           Submission and Assessment of Applications for Admission
    //         </h2>
    //         <p className="text-gray-600 mb-4">
    //           Applicants can submit their application for admission by completing the <a href="https://churchill.nsw.edu.au/assets/apply-at-churchill.pdf" className="text-orange-500 hover:underline" target="_blank">Student Admission Application Form</a>; and submitting it either:
    //         </p>
    //         <ul className="text-gray-600 space-y-4">
    //           <li className="flex items-start">
    //             <svg className="w-5 h-5 text-orange-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
    //             </svg>
    //             <span>directly to Churchill (as specified in the <a href="https://churchill.nsw.edu.au/assets/apply-at-churchill.pdf" className="text-orange-500 hover:underline" target="_blank">Application Form</a>); or</span>
    //           </li>
    //           <li className="flex items-start">
    //             <svg className="w-5 h-5 text-orange-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
    //             </svg>
    //             <span>via an Education Agent approved by Churchill (approved agents are listed on Churchill’s website – <a href="https://churchill.nsw.edu.au/find-agent" className="text-orange-500 hover:underline" target="_blank">Find an Education Agent</a>)</span>
    //           </li>
    //         </ul>
    //         <p className="text-gray-600 mt-4 italic">
    //           *Students who wish to be considered for advanced standing (credit towards the BBus course based prior learning are strongly encouraged to apply for Advanced Standing <strong>when they apply for admission to the course</strong> (refer to the advanced standing information for details)*
    //         </p>
    //       </div>

    //       <div className="bg-white rounded-lg shadow-lg p-8">
    //         <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
    //           <svg className="w-6 h-6 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    //           </svg>
    //           Notification of Outcome - Application for Admission
    //         </h2>
    //         <p className="text-gray-600 mb-4">
    //           Applicants who submit a correct and complete application are usually advised of their admission application outcome (successful or unsuccessful) within three (3) business days of its receipt by Churchill Institute.
    //         </p>
    //         <ul className="text-gray-600 space-y-4">
    //           <li className="flex items-start">
    //             <svg className="w-5 h-5 text-orange-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
    //             </svg>
    //             <span><a name="_Hlk199680433"></a><strong>Successful applicants</strong> will be issued an Offer of Admission (Written Agreement) that provides key administrative information about the course and the terms and conditions of enrolment that the applicant must read, sign and return to accept their Offer of Admission. For international students, this includes the payment of a fee deposit in $AUD by the specified acceptance and deposit payment date</span>
    //           </li>
    //           <li className="flex items-start">
    //             <svg className="w-5 h-5 text-orange-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
    //             </svg>
    //             <span><strong>Unsuccessful applicants</strong> will be advised in writing of the reason(s) their application for admission was unsuccessful with reference to the applicable section(s) of the <a href="https://backend.churchill.nsw.edu.au/media/policy_pdfs/Admissions_Policy_CIHE_v1.0_April_2025-Web_oLAnI8C.pdf" className="text-orange-500 hover:underline" target="_blank">Admissions Policy.</a></span>
    //           </li>
    //           <li className="flex items-start">
    //             <svg className="w-5 h-5 text-orange-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
    //             </svg>
    //             <span>Unsuccessful applicants may <strong>appeal</strong> the decision (per <a href="https://backend.churchill.nsw.edu.au/media/policy_pdfs/Admissions_Policy_CIHE_v1.0_April_2025-Web_oLAnI8C.pdf" className="text-orange-500 hover:underline" target="_blank">section 10 of the Admissions Policy</a>) by submitting an <a href="https://forms.zohopublic.com.au/CIHE/form/Grievanceform/formperma/5jf5-XC5SXb47VhUMTlxv30fih-aqYAUbQh8V3lncvQ" className="text-orange-500 hover:underline" target="_blank">Student Grievance Form</a> that will be reviewed based on the <a href="https://backend.churchill.nsw.edu.au/media/policy_pdfs/Student-Grievance-Management-Policy.pdf" className="text-orange-500 hover:underline" target="_blank">Management Policy</a>.</span>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>

    //     <div className="text-center">
    //       <a href="https://churchill.nsw.edu.au/assets/apply-at-churchill.pdf" download="apply-at-churchill.pdf"
    //         className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg inline-flex items-center space-x-2 transition-colors duration-200">
    //         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 16V4m-6 8l6 6 6-6m-6 6v6" />
    //         </svg>
    //         <span>Download Application Form</span>
    //       </a>
    //     </div>
    //   </div>
    // </div>
  );
};

export default page;

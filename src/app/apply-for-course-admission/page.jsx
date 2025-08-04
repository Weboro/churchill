const page = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            Admission Information
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Join Churchill’s vibrant community! Discover how to apply for our
            courses as a domestic or international student.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <svg
                className="w-6 h-6 text-orange-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Eligibility & Application
            </h2>
            <ul className="text-gray-600 space-y-4">
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-orange-500 mr-2 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>
                  Admission is open to eligible domestic and international
                  students.
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-orange-500 mr-2 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>
                  Apply for{" "}
                  <a
                    href="https://student.churchill.nsw.edu.au/upcoming-key-dates"
                    className="text-orange-500 hover:underline"
                    target="_blank"
                  >
                    Semester 1 (late March)
                  </a>{" "}
                  or{" "}
                  <a
                    href="https://student.churchill.nsw.edu.au/upcoming-key-dates"
                    className="text-orange-500 hover:underline"
                    target="_blank"
                  >
                    Semester 2 (late July)
                  </a>
                  .
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-orange-500 mr-2 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>
                  Complete the{" "}
                  <a
                    href="https://churchill.nsw.edu.au/assets/apply-at-churchill.pdf"
                    className="text-orange-500 hover:underline"
                    target="_blank"
                  >
                    Application Form
                  </a>{" "}
                  with certified documents at least two weeks before the
                  semester start date. Late applications may be accepted at
                  Churchill’s discretion.
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-orange-500 mr-2 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>
                  Applications for Admission are assessed against the course
                  admission criteria as specified in the{" "}
                  <a
                    href="https://backend.churchill.nsw.edu.au/media/policy_pdfs/Admissions_Policy_CIHE_v1.0_April_2025-Web_oLAnI8C.pdf"
                    className="text-orange-500 hover:underline"
                    target="_blank"
                  >
                    Admissions Policy (Admission Guidelines page 10/16)
                  </a>{" "}
                  and the general provisions of this policy.
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <svg
                className="w-6 h-6 text-orange-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                />
              </svg>
              How to Submit
            </h2>
            <p className="text-gray-600 mb-4">Submit your application by:</p>
            <ul className="text-gray-600 space-y-4">
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-orange-500 mr-2 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>
                  Directly to Churchill via the{" "}
                  <a
                    href="https://churchill.nsw.edu.au/assets/apply-at-churchill.pdf"
                    className="text-orange-500 hover:underline"
                    target="_blank"
                  >
                    Application Form
                  </a>
                  .
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-orange-500 mr-2 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>
                  Through an approved{" "}
                  <a
                    href="https://churchill.nsw.edu.au/find-agent"
                    className="text-orange-500 hover:underline"
                    target="_blank"
                  >
                    Education Agent
                  </a>
                  .
                </span>
              </li>
            </ul>
            <p className="text-gray-600 mt-4 italic">
              For advanced standing, apply at the time of admission (see{" "}
              <a
                href="https://backend.churchill.nsw.edu.au/media/policy_pdfs/Advanced-Standing-Policy-and-Procedure_RLcCgHQ.pdf"
                className="text-orange-500 hover:underline"
              >
                Advanced Standing details
              </a>
              ).
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <svg
                className="w-6 h-6 text-orange-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Application Outcome
            </h2>
            <p className="text-gray-600 mb-4">
              You’ll be notified within <strong>three business days</strong> of
              submitting a complete application.
            </p>
            <ul className="text-gray-600 space-y-4">
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-orange-500 mr-2 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>
                  <strong>Successful applicants</strong> receive an Offer of
                  Admission with terms and conditions. International students
                  must pay a fee deposit by the specified date.
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-orange-500 mr-2 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>
                  <strong>Unsuccessful applicants</strong> are informed with
                  reasons, referencing the{" "}
                  <a
                    href="https://backend.churchill.nsw.edu.au/media/policy_pdfs/Admissions_Policy_CIHE_v1.0_April_2025-Web_oLAnI8C.pdf"
                    className="text-orange-500 hover:underline"
                    target="_blank"
                  >
                    Admissions Policy
                  </a>
                  .
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-orange-500 mr-2 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>
                  Unsuccessful applicants can appeal via the{" "}
                  <a
                    href="https://forms.zohopublic.com.au/CIHE/form/Grievanceform/formperma/5jf5-XC5SXb47VhUMTlxv30fih-aqYAUbQh8V3lncvQ"
                    className="text-orange-500 hover:underline"
                    target="_blank"
                  >
                    Student Grievance Form
                  </a>
                  , per{" "}
                  <a
                    href="https://backend.churchill.nsw.edu.au/media/policy_pdfs/Student-Grievance-Management-Policy.pdf"
                    className="text-orange-500 hover:underline"
                    target="_blank"
                  >
                    Grievance Policy
                  </a>
                  .
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <a
            href="https://churchill.nsw.edu.au/assets/apply-at-churchill.pdf"
            download="apply-at-churchill.pdf"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg inline-flex items-center space-x-2 transition-colors duration-200"
          >
            <i class="fi fi-rr-download"></i>
            <span>Download Application Form</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default page;

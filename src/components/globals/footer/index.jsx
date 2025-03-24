import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaPhoneAlt, FaUser } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const NEXT_PUBLIC_CHURCHILL_STUDENT_HUB_URL =
    process.env.NEXT_PUBLIC_CHURCHILL_STUDENT_HUB_URL;
  const NEXT_PUBLIC_CHURCHILL_AGENT_HUB_URL =
    process.env.NEXT_PUBLIC_CHURCHILL_AGENT_HUB_URL;

  return (
    <div className="">
      <div
        className="bg-[#606060] py-[64px]"
        style={{
          backgroundImage: `url(${`/assets/footer-watermark.svg`})`,
          backgroundRepeat: "no-repeat",
          objectFit: "cover",
          width: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto container px-5">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col items-center lg:flex-row justify-between gap-4">
              <Link href="/">
                <Image
                  src={`/assets/logo.svg`}
                  width={400}
                  height={400}
                  alt="Footer Logo"
                  className="object-contain w-[300px] h-auto brightness-0 invert"
                  priority
                />
              </Link>
              <div className="text-white flex flex-col gap-2">
                <h3 className="text-[16px]">
                  <strong>Churchill Institute of Higher Education</strong>
                </h3>

                <Link
                  href={"tel:+61-02-8856-2997"}
                  className="flex gap-2 items-center text-[14px]"
                >
                  <span>
                    <FaPhoneAlt />
                  </span>
                  +61 (02) 8856 2997
                </Link>
                <Link
                  href={"mailto:info@churchill.nsw.edu.au"}
                  className="flex gap-2 items-center text-[14px]"
                >
                  <span>
                    <MdEmail />
                  </span>
                  info@churchill.nsw.edu.au
                </Link>

                <Link
                  href={"https://maps.app.goo.gl/h7FJyoQfasvUvck79"}
                  target="_blank"
                >
                  <p className="flex gap-2 items-center text-[14px]">
                    <span>
                      <FaLocationDot />
                    </span>
                    Level 1, 16-18 Wentworth Street Parramatta NSW 2150
                  </p>
                </Link>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-between gap-5 text-white">
              <div>
                <h3 className="text-[16px] pb-4">
                  <strong>About Us</strong>
                </h3>
                <ul className="flex flex-col gap-1 text-[14px]">
                  <li>
                    <Link href={"/about-us/CIHE-governance-structure"}>
                      CIHE Governance
                    </Link>
                  </li>
                  <li>
                    <Link href={"/about-us/CIHE-organisational-chart"}>
                      CIHE Leadership
                    </Link>
                  </li>
                  <li>
                    <Link href={"/about-us/governance-and-leadership"}>
                      Governance and Leadership
                    </Link>
                  </li>
                  <li>
                    <Link href={"/about-us/company-and-financial-documents"}>
                      Financial Standing, TPS & Enrolment Summary
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      href={`${NEXT_PUBLIC_CHURCHILL_STUDENT_HUB_URL}/policies`}
                    >
                      Policies and Procedures
                    </Link>
                  </li>
                  <li>
                    <Link href={"/about-us/accreditation"}> Accreditation</Link>
                  </li>
                  {/* <li>
                    <Link href={"/about-us/approved-agents"}>
                      Approved Agents
                    </Link>
                  </li> */}
                  <li>
                    <Link href={"/about-us/gallery"}>
                      Gallery
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-[16px] pb-4">
                  <strong>Courses</strong>
                </h3>
                <ul className="flex flex-col gap-1 text-[14px]">
                  <li>
                    <Link href={"/courses/accounting-major"}>
                      Accounting Major
                    </Link>
                  </li>
                  <li>
                    <Link href={"/courses/major-in-information-systems"}>
                      Major in Information Systems
                    </Link>
                  </li>
                  <li>
                    <Link href={"/courses/major-in-hospitality"}>
                      Major in Hospitality
                    </Link>
                  </li>
                  <li>
                    <Link href={"/courses/major-in-management"}>
                      Major in Management
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-[16px] pb-4">
                  <strong>Student</strong>
                </h3>
                <ul className="flex flex-col gap-1 text-[14px]">
                  <li>
                    <Link href={"/apply-now"}>Apply At Churchil</Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      href={NEXT_PUBLIC_CHURCHILL_STUDENT_HUB_URL}
                    >
                      Student Hub
                    </Link>
                  </li>
                  <li>
                    <Link href={"/contact-us/faq"}>FAQ</Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      href={
                        "https://forms.zohopublic.com.au/CIHE/form/StudentHubEnquiry/formperma/XilFJje5kQ-h7f4saQYbSV4kJ-kAMiG7p1QNfWEvDXs"
                      }
                    >
                      Enquiry Now
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      href={
                        "https://forms.zohopublic.com.au/CIHE/form/Grievanceform/formperma/5jf5-XC5SXb47VhUMTlxv30fih-aqYAUbQh8V3lncvQ"
                      }
                    >
                      Grievance Form
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      href={`${NEXT_PUBLIC_CHURCHILL_STUDENT_HUB_URL}/request-form`}
                    >
                      Request Form
                    </Link>
                  </li>
                  <li>
                    <Link href={"/blogs"}>Blogs</Link>
                  </li>
                  <li>
                    <Link href={"/events"}>Upcoming Events</Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      href={`${NEXT_PUBLIC_CHURCHILL_STUDENT_HUB_URL}/upcoming-key-dates`}
                    >
                      Upcoming Key Dates
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-[16px] pb-4">
                  <strong>Quick Links</strong>
                </h3>
                <ul className="flex flex-col gap-1 text-[14px]">
                  <li>
                    <Link href={"/"}>Home</Link>
                  </li>
                  <li>
                    <Link href={"https://elearning.churchill.nsw.edu.au/"}>
                      eLearning
                    </Link>
                  </li>
                  <li>
                    <Link href={"/find-agent"}>Find Agent</Link>
                  </li>
                  <li>
                    <Link href={'https://churchill.softlinkhosting.com.au/liberty/libraryHome.do'}>
                      Library
                    </Link>
                  </li>
                  <li>
                    <Link href={`${NEXT_PUBLIC_CHURCHILL_STUDENT_HUB_URL}`}>
                      Student Support
                    </Link>
                  </li>
                  <li>
                    <Link href={`${NEXT_PUBLIC_CHURCHILL_AGENT_HUB_URL}`}>
                      Agent Hub
                    </Link>
                  </li>
                  <li>
                    <Link href={"/contact-us"}>Contact Us</Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-[16px] pb-4">
                  <strong>Login</strong>
                </h3>
                <ul className="flex flex-col gap-1 text-[14px]">
                  <li>
                    <Link
                      target="_blank"
                      href={"https://elearning.churchill.nsw.edu.au/"}
                    >
                      eLearning
                    </Link>
                  </li>
                  <li>
                    <Link href={"https://agent.churchill.nsw.edu.au/"}>
                      Agent Portal
                    </Link>
                  </li>
                  <li>
                    <Link href={"https://churchill.softlinkhosting.com.au/"}>
                      Library Portal
                    </Link>
                  </li>
                  <li>
                    <Link href={"http://staff.churchill.nsw.edu.au"}>Staff Portal</Link>
                  </li>
                  <li>
                    <Link href={"https://elearning.churchill.nsw.edu.au/login/index.php"}>
                      Student Moodle Portal
                    </Link>
                  </li>
                  <li>
                    <Link href={"https://attendance.churchill.nsw.edu.au/"}>
                      Attendance Portal
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#E59623] pt-8 pb-4">
        <div className="container mx-auto px-5 space-y-4">
          <div className="flex flex-col items-center justify-between gap-5">
            <div className="flex gap-3 items-center">
              <Image
                src={`/assets/flag-a.png`}
                width={400}
                height={400}
                alt="Footer Logo"
                className="object-contain w-[50px] h-auto"
                priority
              />
              <Image
                src={`/assets/flag-b.png`}
                width={400}
                height={400}
                alt="Footer Logo"
                className="object-contain w-[50px] h-auto"
                priority
              />
            </div>
            <p className="text-center max-w-[80ch] mx-auto">
              CIHE acknowledges Aboriginal and Torres Strait Islander people as
              the Traditional Custodians of the land and acknowledges and pays
              respect to their elders, past and present
            </p>
          </div>

          {/* <div className=""><div className="flex flex-col gap-2"><h3 className="text-[16px]"><strong>Churchill Institute of Higher Education</strong></h3><p className="text-[14px]">CRICOS Provider Code 04082E</p><p className="text-[14px]">TEQSA Provider Number PRV14305</p><p className="text-[14px]">ABN 91 612 507 141</p></div></div> */}

          <hr className="border-neutral-950/25 " />

          <p className="text-center text-[#323432] text-[14px] py-4">
            Copyright &copy;{new Date().getFullYear()} Mpika Holdings Pty Ltd (ACN: 612 507 141) t/as Churchill Institute of Higher Education (ABN: 91 612 507 141).
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

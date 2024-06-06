import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaPhoneAlt, FaUser } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="mt-[32px] lg:mt-[64px]">
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

                <Link href={""} className="flex gap-2 items-center text-[14px]">
                  <span>
                    <FaPhoneAlt />
                  </span>
                  +61 (02) 8856 2997
                </Link>
                <Link href={""} className="flex gap-2 items-center text-[14px]">
                  <span>
                    <MdEmail />
                  </span>
                  info@churchill.nsw.edu.au
                </Link>
                <p className="flex gap-2 items-center text-[14px]">
                  <span>
                    <FaLocationDot />
                  </span>
                  Level 1, 16-18 Wentworth Street Parramatta NSW 2150
                </p>
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
                      CIHE Governance Structure
                    </Link>
                  </li>
                  <li>
                    <Link href={"/about-us/CIHE-organisational-chart"}>
                      CIHE Organisational Chart
                    </Link>
                  </li>
                  <li>
                    <Link href={"/about-us/governance-and-leadership"}>
                      Governance and Leadership
                    </Link>
                  </li>
                  <li>
                    <Link href={"/about-us/governance-and-leadership"}>
                      Company and Financial Documents
                    </Link>
                  </li>
                  <li>
                    <Link href={"/about-us/policies-and-procedures"}>
                      Policies and Procedures
                    </Link>
                  </li>
                  <li>
                    <Link href={"/about-us/accreditation"}> Accreditation</Link>
                  </li>
                  <li>
                    <Link href={"/about-us/approved-agents"}>
                      Approved Agents
                    </Link>
                  </li>
                  <li>
                    <Link href={"/policies"}> Policies and Procedures</Link>
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
                      href={"https://churchill-student-hub-eight.vercel.app/"}
                    >
                      Student Hub
                    </Link>
                  </li>
                  <li>
                    <Link href={"/contact-us/faq"}>Faqs</Link>
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
                    <Link target="_blank" href={"/student/grievance-form"}>
                      Grievance Form
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      href={
                        "https://churchill-student-hub-eight.vercel.app/request-form"
                      }
                    >
                      Request Form
                    </Link>
                  </li>
                  <li>
                    <Link href={"/blogs"}>Blogs</Link>
                  </li>
                  <li>
                    <Link href={"/events"}>Events</Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      href={
                        "https://churchill-student-hub-eight.vercel.app/upcoming-key-dates"
                      }
                    >
                      Upcoming Key Dates
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
                    <Link href={"/"}>Home</Link>
                  </li>
                  <li>
                    <Link href={"/find-agent"}>Find Agent</Link>
                  </li>
                  <li>
                    <Link
                      href={"https://churchill-student-hub-eight.vercel.app/"}
                    >
                      Student Hub
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
                    <Link href={""}>Student Hub</Link>
                  </li>
                  <li>
                    <Link href={""}>Staff Login</Link>
                  </li>
                  <li>
                    <Link href={""}>Library</Link>
                  </li>
                  <li>
                    <Link href={""}>Student Portal</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#E59623] pt-[64px]">
        <div className="container mx-auto px-5">
          <div className="flex flex-col lg:flex-row justify-between gap-5 pb-[54px]">
            <div className="flex flex-col gap-4 items-center mx-auto justify-center max-w-[100ch]">
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
              <p className="text-center">
                CIHE acknowledges Aboriginal and Torres Strait Islander people
                as the Traditional Custodians of the land and acknowledges and
                pays respect to their elders, past and present
              </p>
            </div>
            {/* <div className="">
              <div className="flex flex-col gap-2">
                <h3 className="text-[16px]">
                  <strong>Churchill Institute of Higher Education</strong>
                </h3>
                <p className="text-[14px]">CRICOS Provider Code 04082E</p>
                <p className="text-[14px]">TEQSA Provider Number PRV14305</p>
                <p className="text-[14px]">ABN 91 612 507 141</p>
              </div>
            </div> */}
          </div>
          <hr className=" border-neutral-950/50 " />
          <p className="text-center container mx-auto px-5 font-semibold text-[15px] py-4">
            Copyright © 2024 Mpika Holdings Pty Ltd t/as Churchill Institute of
            Higher Education.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import { FaAngleDown, FaPhoneAlt, FaUser } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { MdQuestionAnswer } from "react-icons/md";
import Link from "next/link";

const TopInfo = () => {
  const NEXT_PUBLIC_CHURCHILL_STUDENT_HUB_URL =
    process.env.NEXT_PUBLIC_CHURCHILL_STUDENT_HUB_URL;
  const NEXT_PUBLIC_CHURCHILL_AGENT_HUB_URL =
    process.env.NEXT_PUBLIC_CHURCHILL_AGENT_HUB_URL;

  return (
    <div className="">
      <ul className="flex gap-4 text-[14px] font-semibold text-[#424242]">
        <Link href="/find-agent">
          <li className="flex gap-2 items-center cursor-pointer">
            <p className="text-matte-purple">Find Agent</p>
            <i className="fi fi-rr-headphones flex"></i>
          </li>
        </Link>
        <Link href="https://churchill.softlinkhosting.com.au/" target="_blank">
          <li className="flex gap-1 items-center cursor-pointer">
            <p className="text-matte-purple">Library</p>
            <i className="fi fi-rr-book flex"></i>
          </li>
        </Link>
        <Link href={NEXT_PUBLIC_CHURCHILL_STUDENT_HUB_URL} target="_blank">
          <li className="flex gap-1 items-center cursor-pointer">
            <p className="text-matte-purple">Student Support</p>
            <i className="fi fi-rr-student flex"></i>
          </li>
        </Link>

        <Link href={NEXT_PUBLIC_CHURCHILL_AGENT_HUB_URL} target="_blank">
          <li className="flex gap-1 items-center cursor-pointer">
            <p className="text-matte-purple">Agent Hub</p>
            <i className="fi fi-rs-employee-man-alt flex"></i>
          </li>
        </Link>

        <Link href="/contact-us">
          <li className="flex gap-1 items-center cursor-pointer">
            <p className="text-matte-purple">Contact Us</p>
            <i className="fi fi-rr-phone-flip flex"></i>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default TopInfo;

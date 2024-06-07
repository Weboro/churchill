import React from "react";
import { FaAngleDown, FaPhoneAlt, FaUser } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { MdQuestionAnswer } from "react-icons/md";
import Link from "next/link";

const TopInfo = () => {
  return (
    <div className="">
      <ul className="flex gap-4 text-[14px] font-semibold text-[#424242]">
        <Link href="/">
          <li className="flex gap-2 items-center cursor-pointer">
            <p className="text-matte-purple">Student Support</p>
            <i className="fi fi-rr-student flex"></i>
          </li>
        </Link>

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
        <Link
          href="https://churchill-student-hub-eight.vercel.app/"
          target="_blank"
        >
          <li className="flex gap-1 items-center cursor-pointer">
            <p className="text-matte-purple">Student Hub</p>
            <i className="fi fi-rr-globe-alt flex"></i>
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

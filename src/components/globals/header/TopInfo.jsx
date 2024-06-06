import React from "react";
import { FaAngleDown, FaPhoneAlt, FaUser } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { MdQuestionAnswer } from "react-icons/md";
import Link from "next/link";

const TopInfo = () => {
  return (
    <div className="">
      <ul className="flex gap-4 text-[14px] font-semibold text-[#424242]">
        <Link href="/find-agent">
          <li className="flex gap-2 items-center cursor-pointer">
            <p>Find Agent</p>
            <span>
              <FaUser />
            </span>
          </li>
        </Link>
        <Link href="https://churchill.softlinkhosting.com.au/" target="_blank">
          <li className="flex gap-1 items-center cursor-pointer">
            <p>Library</p>
            <span>
              <IoLibrary />
            </span>
          </li>
        </Link>
        <Link
          href="https://churchill-student-hub-eight.vercel.app/"
          target="_blank"
        >
          <li className="flex gap-1 items-center cursor-pointer">
            <p>Student Hub</p>
            <span>
              <MdQuestionAnswer />
            </span>
          </li>
        </Link>
        <Link href="/contact-us">
          <li className="flex gap-1 items-center cursor-pointer">
            <p>Contact Us</p>
            <span>
              <FaPhoneAlt />
            </span>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default TopInfo;

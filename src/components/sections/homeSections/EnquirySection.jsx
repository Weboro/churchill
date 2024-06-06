import ApplyCard from "@/components/cards/ApplyCard";
import React from "react";
import Link from "next/link";
import Button from "@/components/button";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

const EnquirySection = () => {
  return (
    <section className="container mx-auto px-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="lg:row-span-2">
          <ApplyCard
            image={"/assets/girl-pointing.png"}
            title={"Applying to CIHE is quick, easy and secure."}
            description={
              "We're happy you're choosing to join the CIHE community with students from across Australia and around the world."
            }
          />
        </div>
        <div
          className="rounded-[32px] flex gap-4 justify-between px-8"
          style={{
            backgroundImage: `linear-gradient(to bottom left, rgb(235, 124, 158), rgb(235 124 158 / 43%) 100%)`,
          }}
        >
          <div className="flex items-end">
            <div className="hidden lg:block">
              <Image
                src={`/assets/degree.png`}
                alt={"use-links-icon-image"}
                width={400}
                height={400}
                className="w-[400px] h-auto object-contain"
              />
            </div>
          </div>
          <div className="flex flex-col gap-5 justify-center">
            <div className="pt-[32px] flex flex-col gap-5">
              <div className="flex justify-between gap-4 flex-col lg:flex-row items-center">
                <h2 className="font-bold text-[36px] text-[#2C2B4B] leading-[46px]">
                  Choosing the right degree starts here
                </h2>
              </div>
            </div>
            <div className="pb-[32px]">
              <div className="">
                <Link href={"/courses"}>
                  <Button
                    btnName={"View Courses"}
                    icon={<FaArrowRight />}
                    styleA={"flex items-center gap-1"}
                    style={
                      "border border-2 border-[#606060] rounded-full px-4 py-3 bg-[#E59623] hover:bg-[#ff9700] transition duration-200  ease-in-out hover:scale-105"
                    }
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          className="rounded-[32px] flex gap-4 justify-between px-8 "
          style={{
            backgroundImage: `linear-gradient(to bottom right, rgb(244, 213, 107), rgb(244 213 107 / 43%) 100%)`,
          }}
        >
          <div className="flex flex-col gap-5 justify-center">
            <div className="pt-[32px] flex flex-col gap-5">
              <div className="flex justify-between gap-4 flex-col lg:flex-row items-center">
                <h2 className="font-bold text-[36px] text-[#2C2B4B] leading-[46px]">
                  Have a question? We're here to help.
                </h2>
              </div>
            </div>
            <div className="pb-[32px]">
              <div className="">
                <Link
                  href={"https://zfrmz.com.au/ThpIBv0BRCITpoh20tLf"}
                  target="_blank"
                >
                  <Button
                    btnName={"Enquiry Now"}
                    icon={<FaArrowRight />}
                    styleA={"flex items-center gap-1"}
                    style={
                      "border border-2 border-[#606060] rounded-full px-4 py-3 bg-[#E59623] hover:bg-[#ff9700] transition duration-200  ease-in-out hover:scale-105"
                    }
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex items-end">
            <div className="hidden lg:block">
              <Image
                src={`/assets/help.png`}
                alt={"use-links-icon-image"}
                width={400}
                height={400}
                className="w-[350px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnquirySection;

// "use client";
// import ApplyCard from "@/components/cards/ApplyCard";
// import React, { useState } from "react";
// import Link from "next/link";
// import Button from "@/components/button";
// import { FaArrowRight } from "react-icons/fa";
// import Image from "next/image";

// const EnquirySection = () => {
//   return (
//     <section className="container mx-auto px-5">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
//         <div className="lg:row-span-2">
//           <EnquirySectionCard
//             mode="col" // row col row-reverse
//             title="Applying to CIHE is quick, easy and secure."
//             description="We're happy you're choosing to join the CIHE community with students from across Australia and around the world."
//             ImageURl="/assets/find-agent-page.png"
//             backgroundStyle="linear-gradient(to bottom right, rgb(187, 171, 223), rgb(187 171 223 / 43%) 100%)"
//           />
//         </div>

//         <EnquirySectionCard
//           mode="row" // row col row-reverse
//           title=" Choosing the right degree starts here"
//           ImageURl="/assets/find-agent-page.png"
//           backgroundStyle="linear-gradient(to bottom left, rgb(235, 124, 158), rgb(235 124 158 / 43%) 100%)"
//         />

//         <EnquirySectionCard
//           mode="rowReverse" // row col row-reverse
//           title="Have a question? We're here to help."
//           ImageURl="/assets/find-agent-page.png"
//           backgroundStyle="linear-gradient(to bottom right, rgb(244, 213, 107), rgb(244 213 107 / 43%) 100%)"
//         />
//       </div>
//     </section>
//   );
// };

// const EnquirySectionCard = ({
//   title,
//   backgroundStyle,
//   description,
//   children,
//   ImageURl,
//   mode = "row", // row col row-reverse
// }) => {
//   return (
//     <div
//       style={{ backgroundImage: backgroundStyle }}
//       className={`rounded-2xl h-full flex flex-col items-end ${
//         mode === "row"
//           ? ""
//           : mode == "col"
//           ? "md:flex-col "
//           : mode == "rowReverse"
//           ? "md:flex-row-reverse"
//           : ""
//       }`}
//     >
//       <div className="p-4 flex-1 flex flex-col gap-4">
//         <h2 className="font-bold text-[36px] text-[#2C2B4B] leading-10">
//           {title}
//         </h2>
//         <p>{description}</p>
//         {children}
//       </div>
//       <div className="md:w-[300px] h-full">
//         <Image
//           src={ImageURl}
//           width={1000}
//           height={1000}
//           alt={`Image for ${title}`}
//           className="w-full object-cover"
//         />
//       </div>
//     </div>
//   );
// };

// export default EnquirySection;

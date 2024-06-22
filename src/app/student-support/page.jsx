import React from "react";
import {
  NewsSection,
  EnquirySection,
  Button,
  AIHelpSection,
  YouTubeLinksSection,
} from "@/components";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <>
      <section className="mt-[100px] mb-[48px]">
        <div className="container mb-[25px] px-5 mx-auto flex flex-col gap-8 items-center justify-center text-center">
          <h1 className="text-matte-purple text-3xl leading-[32px] font-bold lg:text-[54px] lg:leading-[56px]">
            Enhance Your Churchill Experience
          </h1>
          <p className="text-matte-purple lg:w-[80%] mx-auto text-base leading-[18px] lg:text-[22px] lg:leading-[24px] font-semibold">
            Churchill provides a variety of tools and services to help you make
            the most of your time with us. Many of our support services are
            accessible remotely, online, or over the phone, ensuring you have
            the help you need, wherever you are.
          </p>
          <div className="flex flex-col gap-4 md:flex-row md:gap-5">
            <Link
              target="_blank"
              href="https://forms.zohopublic.com.au/CIHE/form/StudentHubEnquiry/formperma/XilFJje5kQ-h7f4saQYbSV4kJ-kAMiG7p1QNfWEvDXs"
            >
              <Button
                btnName="Enquire Now"
                icon={<FaArrowRight />}
                styleA={"flex items-center gap-1"}
              />
            </Link>
          </div>
        </div>
        <Image
          src="/assets/border-hero-image.png"
          width={1600}
          height={1000}
          alt="image"
          className="md:w-full h-[28vh] md:h-[50vh] object-cover"
        />
      </section>

      <div className="container mx-auto px-5 flex flex-col gap-[32px] lg:gap-[64px]">
        <AIHelpSection />

        <YouTubeLinksSection />

        <EnquirySection />

        <NewsSection />
      </div>
    </>
  );
};

export default page;

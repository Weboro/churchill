"use client";

import { PatternBannerCard, AgentInfoCard, Button } from "@/components";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { CHIEAgentData } from "@/constDatas/CHIEAgentData";
import Image from "next/image";
import Link from "next/link";
import FadeUpAnimation from "@/animations/FadeUp";

const FindAgent = () => {
  const [searchByName, setSearchByName] = useState("");
  const nameQuery = searchByName.trim().toLowerCase();

  // const filteredData

  return (
    <>
      <PatternBannerCard
        title="Find a CIHE AGENT"
        description="Get in touch with one of our official CIHE agents."
        BtnAText="Find an Agent"
        BtnALink="https://zfrmz.com.au/ZKkopYxKWUmCGMefPqt9"
        BtnBText="Become an Agent"
        BtnBLink="#search-agent"
      />

      <div
        className="container mx-auto px-5 flex flex-col gap-[32px] lg:gap-[64px]"
        id="search-agent"
      >
        <section className="text-center mx-auto max-w-[80ch] mt-[32px] lg:mt-[64px] flex flex-col justify-center gap-6">
          <h1 className="text-2xl lg:text-4xl font-extrabold">
            Looking for help with your CIHE application?
          </h1>
          <h3>
            CIHE agents are independent advisors authorised to consult with
            students on our behalf. From student visas to applications and
            accepting an offer, our global network of certified agents offer
            help every step of the way, no matter where you are in the world.
          </h3>
        </section>

        <section className="bg-[#F3E4E4] rounded-3xl md:rounded-md flex flex-col gap-4 px-3 py-4 md:flex-row lg:w-fit lg:mx-auto">
          <input
            type="text"
            name="Your Address"
            placeholder="Your Address"
            className=" rounded-md px-4 py-3 outline outline-neutral-900/20 flex-1 w-full lg:w-[280px]"
          />
          <input
            type="text"
            name="Agent/Representative Name"
            value={searchByName}
            onChange={(e) => setSearchByName(e.target.value)}
            placeholder="Agent/Representative Name"
            className=" rounded-md px-4 py-3 outline outline-neutral-900/20 flex-1 w-full lg:w-[280px]"
          />
          <Button
            btnName={"Find an Agent"}
            icon={<FaSearch />}
            styleA={" flex items-center gap-4"}
            style={
              "border border-2 border-[#606060] font-semibold text-[14px] rounded-md px-4 py-3 bg-[#E59623] hover:bg-[#ff9700] transition duration-200  ease-in-out hover:scale-105"
            }
          />
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CHIEAgentData.map((data, index) => (
            <AgentInfoCard
              key={index}
              title={data?.title}
              designation={data?.designation}
              agentName={data?.agentName}
              addressLine1={data?.addressLine1}
              addressLine2={data?.addressLine2}
              phone={data?.phone}
              imageUrl={data?.imageUrl}
              email={data?.email}
            />
          ))}
        </section>

        <FadeUpAnimation>
          <div className="w-full flex flex-col md:flex-row bg-[#F3E4E4] relative hover-shadow overflow-hidden rounded-md">
            <div className="flex z-[10] flex-1 flex-col gap-6 pt-8 pl-8 md:py-20 md:pl-20">
              <h3 className="relative leading-10 font-bold text-[36px]  text-[#2C2B4B]">
                Interested in becoming an agent?
              </h3>
              <p>
                If you would like to become an authorised representative of CIHE
                Sydney, please submit an Expression of Interest. Expression of
                interests will be assessed by the relevant Regional Recruitment
                Manager.
              </p>
              <Link
                href={`https://forms.zohopublic.com.au/CIHE/form/duplicatedonottouchAgencyRequestApplicationForm/formperma/Z-cwJzbSBI4l1IJbFvia5ZwzHFxyNw2AoPgQAstZl80`}
                target="_blank"
                className="w-max"
              >
                <Button
                  btnName={"Fill Up A Quick Form"}
                  icon={<FaArrowRight />}
                  styleA={"flex items-center gap-1"}
                  style={
                    "border border-2 border-[#606060] rounded-md px-4 py-3 bg-[#E59623] hover:text-black hover:bg-[#ff9700] transition duration-200  ease-in-out hover:scale-105"
                  }
                />
              </Link>
            </div>
            <div className="flex-1 pb-48 md:flex-0">
              <Image
                width={600}
                height={600}
                className="absolute z-[0] translate-y-1/2 translate-x-1/2 bottom-16 -left-1/2 md:left-auto md:right-48 group-hover:scale-105 transition-all"
                src="/assets/churchil-circle.webp"
                alt="alt image for churchil circle"
              />
            </div>
          </div>
        </FadeUpAnimation>
      </div>

      <div className="mb-[64px]"></div>
    </>
  );
};

export default FindAgent;

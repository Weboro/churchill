"use client";

import { TopBannerCard } from "@/components";
import React, { useState } from "react";
import { Button } from "@/components";
import { FaArrowRight } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { CHIEAgentData } from "@/constDatas/CHIEAgentData";
import { AgentInfoCard } from "../../components/cards/AgentInfoCard";
import Image from "next/image";
import Link from "next/link";

const FindAgent = () => {
  const [searchByName, setSearchByName] = useState("");
  const nameQuery = searchByName.trim().toLowerCase();

  return (
    <>
      <TopBannerCard
        title={
          <span>
            Find a CIHE <span className={`highlight`}>AGENT</span>
          </span>
        }
        image={`/assets/hero-image.jpeg`}
        imageA={"/assets/hero-image-Find-CHIE-agent.png"}
        titleSpan=""
        subTitle="Get in touch with one of our official CIHE agents."
        BtnAText="Find an Agent"
        BtnBText="Become an Agent"
        linkA={"https://zfrmz.com.au/ZKkopYxKWUmCGMefPqt9"}
        link={"#search-agent"}
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

        <section className="bg-[#F3E4E4] rounded-3xl md:rounded-full flex flex-col gap-4 px-3 py-4 md:flex-row lg:w-fit lg:mx-auto">
          <input
            type="text"
            name="Your Address"
            placeholder="Your Address"
            className=" rounded-full px-4 py-3 outline outline-neutral-900/20 flex-1 w-full lg:w-[280px]"
          />
          <input
            type="text"
            name="Agent/Representative Name"
            value={searchByName}
            onChange={(e) => setSearchByName(e.target.value)}
            placeholder="Agent/Representative Name"
            className=" rounded-full px-4 py-3 outline outline-neutral-900/20 flex-1 w-full lg:w-[280px]"
          />
          <Button
            btnName={"Find an Agent"}
            icon={<FaSearch />}
            styleA={" flex items-center gap-4"}
            style={
              "border border-2 border-[#606060] font-semibold text-[14px] rounded-full px-4 py-3 bg-[#E59623] hover:bg-[#ff9700] transition duration-200  ease-in-out hover:scale-105"
            }
          />
        </section>

        <section className="flex flex-col gap-4 items-center">
          {CHIEAgentData.map((data, index) => {
            const shouldShow =
              !nameQuery ||
              data?.agentName.trim().toLowerCase().includes(nameQuery) ||
              data?.title.trim().toLowerCase().includes(nameQuery);

            if (shouldShow)
              return (
                <AgentInfoCard
                  key={index}
                  title={data?.title}
                  designation={data?.designation}
                  agentName={data?.agentName}
                  addressLine1={data?.addressLine1}
                  addressLine2={data?.addressLine2}
                  phone={data?.phone}
                  imageUrl={data?.imageUrl}
                />
              );
          })}
        </section>

        <section className="bg-[#F3E4E4] rounded-[20px] flex flex-col gap-6 md:gap-4 md:flex-row px-5 pt-5">
          <Image
            src="/assets/find-agent-page.png"
            width={250}
            height={250}
            alt="find agent page image"
            className="mx-auto md:m-0 md:w-[24rem]"
          />
          <div className="pb-5 flex-1 flex flex-col justify-center items-start gap-5 text-center md:text-left">
            <h3 className="font-bold text-3xl md:text-4xl mx-auto md:m-0">
              Interested in becoming an agent?
            </h3>
            <p>
              If you would like to become an authorised representative of CIHE
              Sydney, please submit an Expression of Interest. Expression of
              interests will be assessed by the relevant Regional Recruitment
              Manager.
            </p>
            <Link
              href={"https://zfrmz.com.au/ZKkopYxKWUmCGMefPqt9"}
              target="_blank"
              className={""}
            >
              <Button
                btnName={"Fill up a Quick Form"}
                icon={<FaArrowRight m ght />}
                styleA={" flex items-center gap-4"}
                style={
                  "mx-auto md:m-0 border border-2 border-[#606060] font-semibold text-[14px] rounded-full px-4 py-3 bg-[#E59623] hover:bg-[#ff9700] transition duration-200  ease-in-out hover:scale-105"
                }
              />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default FindAgent;

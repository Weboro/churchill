"use client";
import {
  PatternBannerCard,
  AgentInfoCard,
  Button,
  DataNotFound,
} from "@/components";

import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { AgentUserData } from "@/constDatas/AgentUserData";
import Image from "next/image";
import Link from "next/link";
import FadeUpAnimation from "@/animations/FadeUp";

function formatText(text) {
  return text.trim().toLowerCase();
}

const FindAgent = () => {
  const [searchByName, setSearchByName] = useState("");
  const [searchByCountry, setSearchByCountry] = useState("");

  const [filteredData, setFilteredData] = useState(AgentUserData);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!formatText(searchByName) && !formatText(searchByCountry)) {
      setFilteredData(AgentUserData);
    }
  }, [searchByName, searchByCountry]);

  function handleClick() {
    setIsLoading(true);

    try {
      const formattedSearchByName = formatText(searchByName);
      const formattedSearchByCountry = formatText(searchByCountry);

      const filteredData = AgentUserData.filter((item) => {
        const nameMatches = formatText(item.RecruitmentAgentName).includes(
          formattedSearchByName
        );

        const countryMatches =
          formatText(item.Country).includes(formattedSearchByCountry) ||
          formatText(item.BillingStreet).includes(formattedSearchByCountry) ||
          formatText(item.Billingcity).includes(formattedSearchByCountry) ||
          formatText(item.BillingState).includes(formattedSearchByCountry);

        return nameMatches && countryMatches;
      });

      setFilteredData(filteredData);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <PatternBannerCard
        title="Find a CIHE AGENT"
        description="Get in touch with one of our official CIHE agents."
        BtnAText="Find an Agent"
        BtnALink="#search-agent"
        BtnBText="Become an Agent"
        BtnBLink="https://zfrmz.com.au/JgLxavLkXBxSFGUch5E6"
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

        {/* className="bg-[#F3E4E4] rounded-md flex flex-col gap-4 px-3 py-4 md:flex-row lg:w-fit lg:mx-auto" */}
        <section className="container-blog bg-light-grey flex flex-col md:flex-row gap-4 px-4 py-4 rounded-md">
          <input
            type="text"
            name="search-country"
            placeholder="Search by street/city"
            value={searchByCountry}
            onChange={(e) => setSearchByCountry(e.target.value)}
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

          <div onClick={() => handleClick()}>
            <Button
              btnName={"Find an Agent"}
              icon={<FaSearch />}
              styleA={" flex items-center gap-4"}
              style={
                "border border-2 border-[#606060] font-semibold text-[14px] rounded-md px-4 py-3 bg-[#E59623] hover:bg-[#ff9700] transition duration-200  ease-in-out hover:scale-105"
              }
            />
          </div>
        </section>

        <>
          {isLoading ? (
            <>Loading </>
          ) : (
            <>
              {filteredData.length > 0 ? (
                <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                  {filteredData.map((data, index) => (
                    <AgentInfoCard
                      key={index}
                      RecruitmentAgentOwner={data?.RecruitmentAgentOwner}
                      RecruitmentAgentName={data?.RecruitmentAgentName}
                      Phone={data?.Phone}
                      Website={data?.Website}
                      BillingStreet={data?.BillingStreet}
                      Billingcity={data?.Billingcity}
                      BillingState={data?.BillingState}
                      BillingCode={data?.BillingCode}
                      Description={data?.Description}
                      RecruitmentAgencyEmail={data?.RecruitmentAgencyEmail}
                      RepresentativeContactName={
                        data?.RepresentativeContactName
                      }
                    />
                  ))}
                </section>
              ) : (
                <div className="grid place-items-center md:w-1/2 mx-auto">
                  <DataNotFound />
                </div>
              )}
            </>
          )}
        </>

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

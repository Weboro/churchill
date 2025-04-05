"use client";
import {
  PatternBannerCard,
  AgentInfoCard,
  Button,
  DataNotFound,
  Loading,
} from "@/components";
import { FetchAgents } from "@/components/utils/apiQueries";

import React, { useState, useEffect } from "react";

import { FaArrowRight } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { AgentUserData } from "@/constDatas/AgentUserData";
import Image from "next/image";
import Link from "next/link";
import FadeUpAnimation from "@/animations/FadeUp";

// import { AgentUserData } from "@/components/utils/apiQueries";


function formatText(text) {
  return text.trim().toLowerCase();
}

const defaultFilter = {
  addressSearch: "",
  nameSearch: "",
};

const FindAgent = () => {
  const [filter, setFilter] = useState(defaultFilter);

const Page = () => {
  const [pageData, setPageData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        const res = await FetchAgents();
        setPageData(res.data);
      } catch (error) {
        console.error("[E]\t Error while fetching agent data", error);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, []);


  if (isLoading) {
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
        <Loading />
      </>
    );
  }

  if (!pageData) {
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
        <DataNotFound />
      </>
    );
  }

  function formatText(str) {
    return str ? str.toLowerCase().trim() : "";
  }

  const filterData = pageData.filter(
    (item) =>
      formatText(item?.address).includes(formatText(searchText)) ||
      formatText(item?.name).includes(formatText(searchText)) ||
      formatText(item?.phone).includes(formatText(searchText)) ||
      formatText(item?.email).includes(formatText(searchText)) ||
      formatText(item?.agent_name).includes(formatText(searchText))
  );


  useEffect(() => {
    if (!formatText(filter.nameSearch) || !formatText(filter.addressSearch)) {
      setFilteredData(AgentUserData);
    }
  }, [filter.nameSearch, filter.addressSearch]);

  const handleFilterChange = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    const filtered = AgentUserData.filter((agent) => {
      const addressMatch =
        formatText(agent.BillingStreet).includes(
          formatText(filter.addressSearch)
        ) ||
        formatText(agent.Billingcity).includes(
          formatText(filter.addressSearch)
        ) ||
        formatText(agent.BillingState).includes(
          formatText(filter.addressSearch)
        );

      const nameMatch =
        formatText(agent.RecruitmentAgentName).includes(
          formatText(filter.nameSearch)
        ) ||
        formatText(agent.RepresentativeContactName).includes(
          formatText(filter.nameSearch)
        );

      return addressMatch && nameMatch;
    });

    setFilteredData(filtered);

  };

  return (
    <div>
      <PatternBannerCard
        title="Find a CIHE AGENT"
        description="Get in touch with one of our official CIHE agents."
        BtnAText="Find an Agent"
        BtnALink="#search-agent"
        BtnBText="Become an Agent"
        BtnBLink="https://zfrmz.com.au/JgLxavLkXBxSFGUch5E6"
      />

      <section
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

      </section>

      <section className="container mx-auto mt-16">
        <input
          type="text"
          id="search"
          className="mb-4 px-4 py-2 rounded-lg bg-slate-100 lg:w-96 border border-primary-orange/5"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        {filterData.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {filterData.map((item, i) => {
              const address = item?.address?.replace("/", " ");

              return (
                <div key={i} className="p-4 bg-primary-orange/5">
                  <p className="text-lg font-bold mb-1">{item.name}</p>
                  <p className="mb-3">{item?.agent_name}</p>

                  {item?.phone && (
                    <a
                      className="flex items-start gap-1"
                      href={`tel:${item?.phone}`}
                    >
                      <i className="flex fi fi-rr-envelope"></i>
                      <span>{item?.phone}</span>
                    </a>
                  )}

                  {item?.email && (
                    <a
                      className="flex items-start gap-1"
                      href={`mailto:${item?.email}`}
                    >
                      <i className="flex fi fi-rr-phone-flip scaleX(-1)"></i>
                      <span>{item?.email}</span>
                    </a>
                  )}

                  {item?.address && (
                    <a
                      className="flex items-start gap-1"
                      href={`https://www.google.com/maps/search/${address}`}
                    >
                      <i className="fi fi-rr-marker flex"></i>
                      <span>{item?.address}</span>
                    </a>
                  )}

        <section className="container-blog bg-light-grey flex flex-col md:flex-row gap-4 px-4 py-4 rounded-md">
          <input
            type="text"
            name="addressSearch"
            placeholder="Search by street/city"
            value={filter.addressSearch}
            onChange={handleFilterChange}
            className="rounded-md px-4 py-3 outline outline-neutral-900/20 flex-1 w-full lg:w-[280px]"
          />

          <input
            type="text"
            name="nameSearch"
            placeholder="Agent/Representative Name"
            value={filter.nameSearch}
            onChange={handleFilterChange}
            className="rounded-md px-4 py-3 outline outline-neutral-900/20 flex-1 w-full lg:w-[280px]"
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
            <>
              <Loading />
            </>
          ) : (
            <>
              {console.log(filteredData)}
              {filteredData.length > 0 ? (
                <div>
                  <p className="mb-6">
                    Showing {filteredData.length} item
                    {filteredData.length > 1 && "s"}
                  </p>

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
                </div>
              ) : (
                <div className="grid place-items-center md:w-1/2 mx-auto">
                  <DataNotFound />
                </div>
              );
            })}
          </div>
        ) : (
          <p>No data matches Your query.</p>
        )}
      </section>
      <div className="my-96"></div>
    </div>
  );
};

export default Page;

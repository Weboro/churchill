"use client";
import React, { useState } from "react";
import { requestList } from "@/constDatas/requestList";
import NewsletterSection from "@/components/sections/commonSections/NewsletterSection";
import RequestFormCard from "@/components/cards/RequestFormCard";
import StyledHeroCard from "@/components/cards/StyledHeroCard";

const PoliciesSection = ({ slug }) => {
  const [searchText, setSearchText] = useState("");
  const query = searchText.trim().toLowerCase();

  return (
    <>
      <div className="container mx-auto px-5 flex flex-col gap-[32px] lg:gap-[64px]">
        <StyledHeroCard
          title={`${slug?.split("-").join(" ")}`}
          breadcrumbs={`Home > About us > ${slug?.split("-").join(" ")}`}
          searchText={searchText}
          showSearch={true}
          onSearchText={setSearchText}
        />

        <div className="flex flex-col gap-4">
          {requestList?.map((item, index) => (
            <RequestFormCard
              key={index}
              icon={item?.icon}
              link={item?.link}
              menuTitle={item?.menuTitle}
              slug={`/policies/${item?.slug}`}
              subTitle={item?.subTitle}
              btnTitle={"View"}
              iconStyles={item?.iconStyles}
            />
          ))}
        </div>

        <div>
          <NewsletterSection />
        </div>
      </div>
    </>
  );
};

export default PoliciesSection;

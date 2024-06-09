"use client";
import React, { useEffect, useState } from "react";
import { requestList } from "@/constDatas/requestList";
import {
  NewsSection,
  RequestFormCard,
  Loading,
  StyledHeroCard,
} from "@/components";

const PoliciesSection = ({ searchQuery }) => {
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    setNotFound(false);
  }, [searchQuery]);

  return (
    <>
      <div className="container mx-auto px-5 flex flex-col gap-[32px] lg:gap-[64px]">
        <div className="flex flex-col gap-4">
          {requestList?.map((item, index) => {
            if (
              !searchQuery ||
              item?.menuTitle.trim().toLowerCase().includes(searchQuery)
            ) {
              return (
                <>
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
                </>
              );
            }
          })}
        </div>

        <div>
          <NewsSection />
        </div>
      </div>
    </>
  );
};

export default PoliciesSection;

"use client";
import { navItems } from "@/constDatas/navItems";
import React, { useEffect, useState } from "react";
import { GovernanceCard, NewsSection, PopUpDetailsCard } from "@/components";
import FadeUpAnimation from "@/animations/FadeUp";

const GovernancePageSection = ({ slug, searchQuery }) => {
  const [openDetails, setOpenDetails] = useState(false);

  const [comment, setComment] = useState({
    title: "",
    image: "",
    subTitle: "",
    description: "",
  });

  const [data, setData] = useState([]);

  useEffect(() => {
    const info = navItems[0]?.Catagories?.find((item) => item?.slug === slug);
    setData(info?.CatagoriesItem);
  }, [slug]);

  return (
    <div className="flex flex-col gap-[32px] lg:gap-[64px]">
      <div className="container mx-auto px-5 mt-[48px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8">
          {data?.map((item, index) => {
            if (
              !searchQuery ||
              item?.title.trim().toLowerCase().includes(searchQuery)
            )
              return (
                <div key={index} className="h-full">
                  <FadeUpAnimation delay={index * 0.1} className="h-full">
                    <GovernanceCard
                      data={item}
                      key={index}
                      handleBtnClick={(title, subTitle, image, description) => {
                        setOpenDetails(true);
                        setComment({
                          title,
                          subTitle,
                          image,
                          description,
                        });
                      }}
                    />
                  </FadeUpAnimation>
                </div>
              );
          })}
        </div>
        <div>
          {openDetails && (
            <PopUpDetailsCard
              data={comment}
              handlePopUpClose={() => {
                setOpenDetails(false);
              }}
            />
          )}
        </div>
      </div>
      <NewsSection />
    </div>
  );
};

export default GovernancePageSection;

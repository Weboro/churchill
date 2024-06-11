"use client";
import { navItems } from "@/constDatas/navItems";
import React, { useEffect, useState } from "react";
import { GovernanceCard, NewsSection, DataNotFound } from "@/components";
import FadeUpAnimation from "@/animations/FadeUp";
import Image from "next/image";

const GovernancePageSection = ({ slug }) => {
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
    <>
      <TextBanner
        title={slug?.split("-").join(" ")}
        subTitle="Churchill's senior leaders guide our institution towards big goals, focusing on excellence and innovative teaching to help our community, country, and the world."
      />

      <div className="flex flex-col gap-[32px] lg:gap-[64px]">
        <div className="container mx-auto px-5 mt-[48px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {data?.map((item, index) => (
              <FadeUpAnimation
                key={index}
                delay={index * 0.1}
                className="h-full"
              >
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
            ))}
          </div>
        </div>
        <NewsSection />
      </div>
    </>
  );
};

const TextBanner = ({ title, subTitle }) => {
  return (
    <div className="mt-[175px] md:mt-[32px] relative">
      <div className=" container mx-auto px-5 flex items-center">
        <div className="flex flex-col gap-6">
          <h1 className="text-3xl md:text-4xl font-semibold capitalize">
            {title}
          </h1>
          <h2 className="md:text-lg font-semibold lg:w-2/3">{subTitle}</h2>
        </div>
      </div>
      <Image
        width={400}
        height={400}
        alt={"churchil half logo"}
        src="/assets/churchil-hex-half-logo.png"
        className="hidden md:block absolute top-[-200%] right-[-80px] -rotate-[32deg] z-[10]"
      />
    </div>
  );
};
export default GovernancePageSection;

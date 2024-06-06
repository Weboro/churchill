"use client";
import Button from "@/components/button";
import GovernanceCard from "@/components/cards/GovernanceCard";
import { navItems } from "@/constDatas/navItems";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import NewsSection from "../commonSections/NewsSection";
import PopUpDetailsCard from "@/components/cards/PopUpDetailsCard";

const GovernancePageSection = ({ slug }) => {
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const delay = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 500);

  //   return () => clearTimeout(delay);
  // }, [isLoading]);
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
      <div className="container mx-auto px-5">
        <div className="flex flex-col gap-[32px] lg:gap-[64px]">
          <div>
            <div className="flex flex-col gap-[32px] lg:gap-[44px]">
              <div className="pt-[12vh] lg:pt-[8vh]">
                <div className="text-center">
                  <h3 className="font-bold text-[20px]">{`Home > About`}</h3>
                  <h3 className="font-bold text-[36px] text-[#2C2B4B]">
                    Governance and Leadership
                  </h3>
                </div>
              </div>
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                  {data?.map((item, index) => (
                    <div key={index}>
                      <GovernanceCard
                        data={item}
                        handleBtnClick={(
                          title,
                          subTitle,
                          image,
                          description
                        ) => {
                          setOpenDetails(true);
                          setComment({
                            title,
                            subTitle,
                            image,
                            description,
                          });
                        }}
                      />
                    </div>
                  ))}
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
            </div>
          </div>
          <div>
            <NewsSection />
          </div>
        </div>
      </div>
    </>
  );
};

export default GovernancePageSection;

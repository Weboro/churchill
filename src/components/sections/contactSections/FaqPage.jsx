"use client";
import React, { useEffect, useState } from "react";
import { FetchFaqData } from "@/components/utils/apiQueries";
import NewsletterSection from "@/components/sections/commonSections/NewsletterSection";
import PatternBannerCard from "@/components/cards/PatternBannerCard";
import Spiner from "@/components/spiner";
import AccordionComponent from "@/components/accordion/AccordionComponent";

const FaqPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    FetchFaqData()
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      {isLoading ? (
        <Spiner />
      ) : (
        <>
          <PatternBannerCard title="Frequently Asked Questions" />

          <div className="flex flex-col gap-[32px] lg:gap-[64px]">
            <div className="container mx-auto px-5">
              <AccordionComponent data={data} />
            </div>

            <NewsletterSection />
          </div>
        </>
      )}
    </>
  );
};

export default FaqPage;

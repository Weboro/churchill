"use client";
import Image from "next/image";
import { eventsData } from "@/constDatas/eventsData";
import { StyledHeroCard } from "@/components";
import { useState, useEffect } from "react";

const IndivisualEventsPage = ({ slug }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      setData(eventsData?.find((item) => item.slug === slug));
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <>
      {isLoading ? (
        <>loading</>
      ) : (
        <>
          <StyledHeroCard
            title={data?.title}
            breadcrumbs={`Home > Events > ${data?.title}`}
          />
          <Image
            width={1240}
            height={700}
            src="/assets/upcoming-key.png"
            alt={data?.title}
            className="w-screen h-[24rem] object-cover"
          />
          <div className="container mx-auto px-5 flex flex-col gap-[32px] lg:gap-[64px]">
            <div className="bg-white -translate-y-16 p-4 rounded-tl-[16px] rounded-tr-[16px] flex flex-col gap-5">
              <div className="flex gap-3 items-start md:items-center">
                <div className="flex aspect-square w-[3rem] md:w-[5rem] flex-col text-center text-white bg-[#E59623] rounded-md p-1 md:p-2 font-bold">
                  <p className="text-[14px]">{data?.day}</p>
                  <p className="text-[18px] leading-[28px]">{data?.date}</p>
                  <p className="text-[14px]">
                    {data?.month?.substring(0, 3)?.toUpperCase()}
                  </p>
                </div>
                {/*  */}
                <div className="flex flex-col gap-1">
                  <span className="text-sm md:text-base">{data?.time}</span>
                  <h2 className="text-xl md:text-3xl font-bold">
                    {data?.title}
                  </h2>
                </div>
              </div>
              <section className="flex flex-col gap-4">
                <div
                  className="rich-text-container"
                  dangerouslySetInnerHTML={{ __html: data?.description }}
                />
              </section>
            </div>
          </div>{" "}
        </>
      )}
    </>
  );
};

export default IndivisualEventsPage;

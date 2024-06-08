"use client";
import Image from "next/image";
import { eventsData } from "@/constDatas/eventsData";
import { NewsSection, StyledHeroCard } from "@/components";
import { useState, useEffect } from "react";

const monthArray = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const IndivisualEventsPage = ({ slug }) => {
  const data = eventsData?.find((item) => item.slug === slug);

  const startDate = data.duration.startDate.split("-");
  const year = parseInt(startDate[0]);
  const month = parseInt(startDate[1]) - 1;
  const day = parseInt(startDate[2]);

  const eventDate = new Date(year, month, day);

  const displayMonth = monthArray[eventDate.getMonth()];
  const displayDay = `${day}${
    day === 1 ? "st" : day === 2 ? "nd" : day === 3 ? "rd" : "th"
  }`;

  return (
    <>
      <div className="container mx-auto px-5 flex flex-col gap-[32px] md:gap-[64px]">
        <section className="flex flex-col gap-3 mt-[48px]">
          <div className="flex items-center gap-3">
            <p className="flex items-center gap-[3px]">
              <i className="fi fi-rr-calendar-day flex text-xl" />
              <span>{displayMonth}</span>
              <span>{displayDay}</span>
              <span>{year}</span>
            </p>
            <p>·</p>
            <p className="flex items-center gap-[3px]">
              <i class="fi fi-rr-circle-user flex text-xl" />
              <span>{data.author}</span>
            </p>
          </div>

          <h2 className="text-4xl leading-[38px] font-bold">{data.title}</h2>
          <h4 dangerouslySetInnerHTML={{ __html: data.subTitle }} />

          <Image
            width={2000}
            height={1500}
            src={data.image}
            alt={`event image for ${data.title}`}
            className="w-full aspect-[3/1.2] object-cover rounded-md"
          />
          <div
            className="rich-text-container"
            dangerouslySetInnerHTML={{ __html: data.description }}
          />
        </section>

        {/*  */}
        <NewsSection />
      </div>
    </>
  );
};

export default IndivisualEventsPage;

//  <>
//       {isLoading ? (
//         <>loading</>
//       ) : (
//         <>
//           <StyledHeroCard
//             title={data?.title}
//             breadcrumbs={`Home > Events > ${data?.title}`}
//           />
//           <Image
//             width={1240}
//             height={700}
//             src="/assets/upcoming-key.png"
//             alt={data?.title}
//             className="w-screen h-[24rem] object-cover"
//           />
//           <div className="container mx-auto px-5 flex flex-col gap-[32px] lg:gap-[64px]">
//             <div className="bg-white -translate-y-16 p-4 rounded-tl-[16px] rounded-tr-[16px] flex flex-col gap-5">
//               <div className="flex gap-3 items-start md:items-center">
//                 <div className="flex aspect-square w-[3rem] md:w-[5rem] flex-col text-center text-white bg-[#E59623] rounded-md p-1 md:p-2 font-bold">
//                   <p className="text-[14px]">{data?.day}</p>
//                   <p className="text-[18px] leading-[28px]">{data?.date}</p>
//                   <p className="text-[14px]">
//                     {data?.month?.substring(0, 3)?.toUpperCase()}
//                   </p>
//                 </div>
//                 <div className="flex flex-col gap-1">
//                   <span className="text-sm md:text-base">{data?.time}</span>
//                   <h2 className="text-xl md:text-3xl font-bold">
//                     {data?.title}
//                   </h2>
//                 </div>
//               </div>
//               <section className="flex flex-col gap-4">
//                 <div
//                   className="rich-text-container"
//                   dangerouslySetInnerHTML={{ __html: data?.description }}
//                 />
//               </section>
//             </div>
//           </div>
//         </>
//       )}
//     </>

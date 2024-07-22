"use client";
import React from "react";

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
const KeyDatesCard = ({
  title,
  description,
  start_date,
  end_date,
  category,
  audience,
}) => {
  const dateObj = new Date(start_date);

  const formattedDate = `${dateObj.getDay()}${
    dateObj.getDay() === 1
      ? "st"
      : dateObj.getDay() === 2
      ? "nd"
      : dateObj.getDay() === 3
      ? "rd"
      : "th"
  } ${monthArray[dateObj.getMonth()]}`;

  return (
    <>
      <div className="bg-[#FAF4F4] rounded-md p-4 flex flex-col justify-between gap-6 transition-all hover-shadow hover:-translate-y-[6px]">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <div className="text-white bg-primary-orange w-32 py-2 px-3 rounded-md flex items-center gap-2 font-bold">
            <i className="fi fi-rr-calendar-day flex text-2xl"></i>
            <span>{formattedDate}</span>
          </div>
          <h2 className="font-bold text-[22px] text-[#2C2B4B] leading-6">
            {title}
          </h2>
          ({dateObj.getFullYear()} temp)
        </div>

        {/* <div className="flex gap-2 items-center flex-wrap text-sm">
          {audience.map((item, index) => (
            <p
              className="bg-primary-orange/20 text-neutral-950/75 px-3 py-1 rounded-full whitespace-nowrap"
              key={index}
            >
              {item}
            </p>
          ))}
          {category.map((item, index) => (
            <p
              className="bg-primary-orange/20 text-neutral-950/75 px-3 py-1 rounded-full whitespace-nowrap"
              key={index}
            >
              {item}
            </p>
          ))}
        </div> */}
      </div>
    </>
  );
};

export default KeyDatesCard;

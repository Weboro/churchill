"use client";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const AccordionComponent = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col">
      {data?.map((item, index) => {
        const isActive = activeIndex == index ? true : false;

        return (
          <div key={index} className=" border-y border-y-neutral-800/25">
            <h2
              onClick={() => handleToggle(index)}
              className={`text-2xl font-bold px-4 py-2 flex items-center justify-between cursor-pointer select-none hover:bg-zinc-200/20
               ${isActive ? "border-b-neutral-800/25 border-b" : ""}`}
            >
              <span>{item.title}</span>
              <span
                className={`transition-all ${isActive ? "rotate-180" : ""}`}
              >
                <IoIosArrowDown />
              </span>
            </h2>
            {activeIndex === index && (
              <div
                className="px-4 py-2 rich-text-container"
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default AccordionComponent;

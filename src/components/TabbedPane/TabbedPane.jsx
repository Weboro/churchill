"use client";
import React, { useState } from "react";

const TabbedPane = ({ tabbedPaneHeaders, tabbedPaneData }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="container mx-auto px-5">
      <div className="flex flex-col gap-[32px] lg:gap-[44px]">
        {/* <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 text-center"> */}
        <div className="flex flex-col gap-3 mx-auto lg:flex-row lg:justify-center lg:items-center">
          {tabbedPaneHeaders?.map((header, index) => (
            <div
              className={`${
                selectedIndex === index ? "bg-[#E59623] border-2" : ""
              } text-[#2C2B4B] font-bold border-2 border-[#E59623] px-6 py-2 rounded-full transition-all hover:cursor-pointer select-none text-center`}
              key={index}
              onClick={() => setSelectedIndex(index)}
            >
              {header.title}
            </div>
          ))}
        </div>

        <div className="w-full bg-[#F3E4E4] px-4 py-3 mt-4 rounded-[24px]">
          {tabbedPaneData?.map(
            (data, index) =>
              selectedIndex === index && (
                <div className="w-full rounded-full m-2 pb-4" key={index}>
                  <div
                    className="rich-text-container"
                    dangerouslySetInnerHTML={{ __html: data.description }}
                  />
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default TabbedPane;

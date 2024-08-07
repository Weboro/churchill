"use client";
import React, { useState } from "react";
import { Button } from "@/components";

const TabbedPane = ({ tabbedPaneHeaders, tabbedPaneData }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="container mx-auto px-5">
      <div className="flex flex-col gap-[32px] lg:gap-[44px]">
        {/* <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 text-center"> */}
        <div className="flex flex-col gap-3 lg:flex-row lg:justify-center lg:items-center">
          {tabbedPaneHeaders?.map((header, index) => (
            <div key={index}>
              <div
                className={`flex items-center justify-between px-2 py-2 border rounded-md border-primary-orange transition-all font-bold ${
                  selectedIndex == index ? "bg-[#E59623] " : ""
                } | ${
                  selectedIndex === index ? "lg:bg-[#E59623] lg:border-2" : ""
                } lg:text-[#2C2B4B] lg:font-bold lg:border-2 lg:border-[#E59623]lg:px-6 lg:py-2 lg:rounded-lg lg:transition-all lg:hover:cursor-pointer lg:select-none lg:text-center`}
                key={index}
                onClick={() => setSelectedIndex(index)}
              >
                {header.title}

                <i
                  className={`lg:hidden text-2xl fi fi-rr-cross-small flex transition-all ${
                    selectedIndex === index ? "rotate-0" : "rotate-[45deg]"
                  }`}
                ></i>
              </div>

              {selectedIndex == index && (
                <div className="w-full lg:hidden bg-[#F3E4E4] px-4 py-3 mt-4 rounded-md">
                  {tabbedPaneData?.map(
                    (data, index) =>
                      selectedIndex === index && (
                        <div className="w-full rounded-md" key={index}>
                          <div
                            className="rich-text-container w-full overflow-x-scroll"
                            dangerouslySetInnerHTML={{
                              __html: data.description,
                            }}
                          />
                          {selectedIndex === 3 && (
                            <>
                              <h2 className="text-xl capitalize mt-6 font-bold mb-3">
                                Ready to start your journey with churchill?
                              </h2>
                              <div className="flex flex-col gap-2 ">
                                <a href="/apply-now">
                                  <Button
                                    btnName={"Apply Yourself"}
                                    style={"w-fit"}
                                  />
                                </a>
                                <a href="/find-agent">
                                  <Button
                                    btnName={"Find Agent"}
                                    style={"w-fit"}
                                  />
                                </a>
                              </div>
                            </>
                          )}
                        </div>
                      )
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="w-full hidden lg:block bg-[#F3E4E4] px-6 py-3 mt-4 pb-10 rounded-md">
          {tabbedPaneData?.map(
            (data, index) =>
              selectedIndex === index && (
                <div className="w-full rounded-md" key={index}>
                  <div
                    className="rich-text-container"
                    dangerouslySetInnerHTML={{ __html: data.description }}
                  />
                  {selectedIndex === 3 && (
                    <>
                      <h2 className="text-xl capitalize font-bold mt-6 mb-3">
                        Ready to start your journey with churchill?
                      </h2>
                      <div className="flex gap-2 items-center">
                        <a href="/apply-now">
                          <Button btnName={"Apply Yourself"} style={"w-fit"} />
                        </a>
                        <a href="/find-agent">
                          <Button btnName={"Find Agent"} style={"w-fit"} />
                        </a>
                      </div>
                    </>
                  )}
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default TabbedPane;

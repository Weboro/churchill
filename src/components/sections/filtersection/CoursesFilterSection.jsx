"use client";
import React, { useState } from "react";
import { navItems } from "@/constDatas/navItems";
import { DataNotFound, CourseDetailsCard, FilterComponent } from "@/components";
import FadeUpAnimation from "@/animations/FadeUp";

const CoursesFilterSection = () => {
  const data = navItems[2]?.Catagories;

  const [searchQuery, setSearchQuery] = useState("");

  const filteredArray = data.filter((item) =>
    item.menuTitle.toLowerCase().includes(searchQuery.trim().toLowerCase())
  );

  return (
    <div className="container mx-auto px-5 flex flex-col gap-[32px] lg:gap-[64px]">
      <div className="flex flex-col lg:flex-row gap-6 relative">
        <FilterComponent
          searchQuery={searchQuery}
          onSearchQuery={setSearchQuery}
        ></FilterComponent>

        <div className="flex-1">
          {filteredArray.length > 0 && (
            <p className="mb-2 lg:hidden">
              Showing {filteredArray.length} Item
              {filteredArray.length > 1 ? "s" : ""}
            </p>
          )}

          {filteredArray.length > 0 ? (
            <div className="flex flex-col gap-8">
              {filteredArray.map((data, index) => (
                <FadeUpAnimation delay={index * 0.1} key={index}>
                  <CourseDetailsCard
                    faculty={data?.faculty}
                    menuTitle={data?.menuTitle}
                    subTitle={data?.subTitle}
                    slug={data?.slug}
                    courseDetails={data?.courseDetails}
                  />
                </FadeUpAnimation>
              ))}
            </div>
          ) : (
            <div className="w-[50%] mx-auto grid place-items-center">
              <DataNotFound />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CoursesFilterSection;

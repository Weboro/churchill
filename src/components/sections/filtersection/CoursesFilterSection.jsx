"use client";
import React, { useState } from "react";
import { navItems } from "@/constDatas/navItems";
import CourseDetailsCard from "@/components/cards/CourseDetailsCard";
import FilterComponent from "@/components/filter/FilterComponent";

import { CheckBoxList, SelectComponent } from "@/components";

const CoursesFilterSection = () => {
  const data = navItems[2]?.Catagories;

  const DegreeType = [{ title: "undergraduate" }, { title: "postgraduate" }];
  const courseData = [{ title: "course 1" }, { title: "a very long course" }];

  const [searchQuery, setSearchQuery] = useState("");
  const query = searchQuery.trim().toLowerCase();

  return (
    <div className="container mx-auto px-5 flex flex-col gap-[32px] lg:gap-[64px]">
      {/* <h3 className="text-center font-bold text-3xl mx-auto">
        Your career pathway starts here
      </h3> */}

      <div className="flex flex-col lg:flex-row gap-8 relative">
        <FilterComponent
          searchQuery={searchQuery}
          onSearchQuery={setSearchQuery}
        >
          {/* <SelectComponent
            title="Courses"
            data={courseData ? courseData : []}
          />
          <CheckBoxList
            title="Degree Type"
            data={DegreeType ? DegreeType : []}
          /> */}
        </FilterComponent>

        <div className="flex-1">
          <div className="flex flex-col gap-8">
            {data.map((data, index) => {
              const shouldShow =
                !query || data.menuTitle.trim().toLowerCase().includes(query);

              if (shouldShow)
                return (
                  <>
                    <CourseDetailsCard
                      key={index}
                      menuTitle={data?.menuTitle}
                      subTitle={data?.subTitle}
                      slug={data?.slug}
                    />
                  </>
                );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesFilterSection;

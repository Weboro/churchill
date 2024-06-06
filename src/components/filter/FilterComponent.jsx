"use client";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { LuSettings2 } from "react-icons/lu";
import { Button } from "@/components";

const FilterComponent = ({ children, searchQuery, onSearchQuery }) => {
  return (
    <div className="p-4 rounded-xl bg-[#F3E4E4] lg:w-[21rem] h-fit flex flex-col gap-5">
      <h1 className="font-extrabold text-xl lg:text-2xl w-fit flex gap-3 items-center">
        <span className="bg-[#E59623] rounded-full w-12 h-12 text-white grid place-items-center">
          <LuSettings2 />
        </span>
        <span>Filters</span>
      </h1>

      <div className="w-full bg-[#FAF4F4] rounded-full overflow-hidden px-4 flex items-center justify-between cursor-pointer select-none hover:outline outline-neutral-900/20">
        <input
          type="text"
          placeholder="Search"
          className="w-full flex-1 px-3 py-4 transparent-background outline-none"
          value={searchQuery}
          onChange={(e) => onSearchQuery(e.target.value)}
        />
        <div className="w-10 h-10 grid place-items-center text-lg ">
          <FaSearch />
        </div>
      </div>

      {children}

      <Button
        btnName="Filter"
        styleA={"w-fit"}
        style={
          "w-fit border font-semibold text-[14px] border-2 border-[#606060] rounded-full px-6 md:px-8 py-3 bg-[#E59623] hover:bg-[#ff9700] transition duration-200  ease-in-out hover:scale-105"
        }
      />
    </div>
  );
};

export default FilterComponent;

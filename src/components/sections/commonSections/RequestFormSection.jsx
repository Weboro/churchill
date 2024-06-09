import React from "react";
// import Search from "@/components/Search";
import { navItems } from "@/constDatas/navItems";
import RequestFormCard from "@/components/cards/RequestFormCard";
import Button from "@/components/button";
import { FaArrowRight, FaSearch } from "react-icons/fa";
import Link from "next/link";

const RequestFormSection = ({ isButtonActive }) => {
  const requestLists = navItems[3]?.Catagories;
  return (
    <div className="container mx-auto px-5">
      <div className="flex flex-col gap-[44px]">
        <div>
          <div className="flex justify-between gap-4 flex-col lg:flex-row items-center">
            <h2 className="font-bold text-[36px] text-[#2C2B4B]">
              Request Form
            </h2>
          </div>
        </div>
        <div className="rounded-md">
          <div className="flex flex-col gap-5">
            {requestLists?.map((item, index) => (
              <RequestFormCard
                key={index}
                icon={item?.icon}
                menuTitle={item?.menuTitle}
                link={item?.link}
                subTitle={item?.subTitle}
                btnTitle={"Apply"}
                target={"_blank"}
              />
            ))}
          </div>
        </div>
        {isButtonActive && (
          <div className="flex justify-center">
            <Link href={"/request-form"}>
              <Button
                btnName={"Load More Links"}
                icon={<FaArrowRight />}
                styleA={"flex items-center gap-1"}
                styleType="secondary"
              />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default RequestFormSection;

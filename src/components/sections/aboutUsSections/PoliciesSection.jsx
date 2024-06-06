import React from "react";
import NewsSection from "../commonSections/NewsSection";
import RequestFormCard from "@/components/cards/RequestFormCard";
import { requestList } from "@/constDatas/requestList";
import StyledHeroCard from "@/components/cards/StyledHeroSection";

const PoliciesSection = () => {
  return (
    <>
      <div className="container mx-auto px-5">
        <div className="flex flex-col gap-[32px] lg:gap-[64px]">
          <div>
            <StyledHeroCard
              title="Policy And Procedures"
              breadcrumbs="Home > About us > Policy And Procedures"
            />
            <div className="flex flex-col gap-[32px] lg:gap-[44px]">
              <div>
                <div className="flex flex-col gap-5">
                  {requestList?.map((item, index) => (
                    <RequestFormCard
                      key={index}
                      icon={item?.icon}
                      link={item?.link}
                      menuTitle={item?.menuTitle}
                      slug={`/policies/${item?.slug}`}
                      subTitle={item?.subTitle}
                      btnTitle={"View"}
                      iconStyles={item?.iconStyles}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div>
            <NewsSection />
          </div>
        </div>
      </div>
    </>
  );
};

export default PoliciesSection;

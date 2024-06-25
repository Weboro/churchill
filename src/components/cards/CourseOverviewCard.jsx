import React from "react";
import FadeUpAnimation from "@/animations/FadeUp";

const CourseOverviewSection = ({ overviewData }) => {
  return (
    <>
      <div className="container mx-auto px-5">
        <div className="rounded-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {overviewData?.map((item, index) => (
            <FadeUpAnimation delay={0.1 * index} key={index}>
              {/* <div className="flex rounded-md py-6 px-2 justify-start flex-col items-center text-center">
                <div className="w-14 h-14 grid place-items-center bg-primary-orange/20 rounded-full text-4xl">
                  <p className="text-[#E59623]">{item?.icon}</p>
                </div>
                <h3 className="text-[#2C2B4B] font-bold text-xl lg:text-2xl">
                  {item.description}
                </h3>
                <p
                  className="capitalize"
                  dangerouslySetInnerHTML={{ __html: item?.title }}
                />
              </div> */}
              <div className="flex flex-row gap-3" key={index}>
                <div className="w-12 h-12 grid place-items-center bg-primary-orange rounded-full text-2xl">
                  <p className="text-white flex">{item?.icon}</p>
                </div>

                <div className="">
                  <h3 className="text-[#2C2B4B] font-bold text-lg">
                    {item?.description}
                  </h3>
                  <p
                    className="text-[#2C2B4B]"
                    dangerouslySetInnerHTML={{ __html: item?.title }}
                  ></p>
                </div>
              </div>
            </FadeUpAnimation>
          ))}
        </div>
      </div>
    </>
  );
};

export default CourseOverviewSection;

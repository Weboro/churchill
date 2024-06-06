import React from "react";

const CourseOverviewSection = ({ overviewData }) => {
  return (
    <>
      <div className="container mx-auto px-5">
        <div className="bg-[#FBF6F6] p-3 lg:p-8 rounded-[40px] grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
          {overviewData?.map((item, index) => (
            <div
              key={index}
              className="flex bg-normal-grey px-2 lg:px-4 py-3 rounded-[22px] gap-4 items-center bg-[#E9E9E9]"
            >
              <div className="w-14 h-14 grid place-items-center bg-white rounded-full text-4xl ">
                <p className="text-[#E59623]">{item?.icon}</p>
              </div>
              <div className="text-[#2C2B4B] flex flex-1 flex-col justify-between ">
                <h3 className="text-[#2C2B4B] font-bold text-xl lg:text-2xl">
                  {item.description}
                </h3>
                <p
                  className="capitalize"
                  dangerouslySetInnerHTML={{ __html: item?.title }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CourseOverviewSection;

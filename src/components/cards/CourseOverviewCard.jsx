import React from "react";

const CourseOverviewSection = ({ overviewData }) => {
  return (
    <>
      <div className="container mx-auto px-5">
        <div className="p-3 lg:p-8 rounded-md grid grid-cols-2 lg:grid-cols-6 gap-3 lg:gap-4">
          {overviewData?.map((item, index) => (
            <div
              key={index}
              className="flex rounded-md py-6 px-2 justify-start flex-col items-center text-center"
            >
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
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CourseOverviewSection;

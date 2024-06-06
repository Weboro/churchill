import { navItems } from "@/constDatas/navItems";
import Image from "next/image";
import React from "react";

const AboutSection = () => {
  const aboutLists = navItems[0]?.page;

  return (
    <div>
      <div className="flex flex-col gap-[32px] lg:gap-[44px]">
        {aboutLists?.message?.map((item, index) => (
          <div
            className={`grid grid-cols-1 md:grid-cols-2 gap-5 ${
              index % 2 === 0 ? "md:grid-flow-col" : "md:grid-flow-row-dense"
            }`}
            key={index}
          >
            <div
              className={`flex flex-col gap-2 ${
                index % 2 === 0 ? "order-1" : "order-2"
              }`}
            >
              <h2 className="font-bold text-[36px] text-[#2C2B4B]">
                {item?.title}
              </h2>
              <div
                className="rich-text-container"
                dangerouslySetInnerHTML={{ __html: item?.description }}
              />
            </div>
            <Image
              src={item?.image}
              alt={"use-links-icon-image"}
              width={400}
              height={400}
              className={`w-full lg:h-[500px] rounded-[32px] object-cover ${
                index % 2 === 0 ? "order-2" : "order-1"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutSection;

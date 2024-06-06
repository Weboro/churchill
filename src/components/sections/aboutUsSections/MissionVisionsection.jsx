import { navItems } from "@/constDatas/navItems";
import Image from "next/image";
import React from "react";

const MissionVisionsection = () => {
  const aboutLists = navItems[0]?.page;

  return (
    <div>
      <div className="grid md:grid-cols-2 gap-5">
        {aboutLists?.missionVision?.map((item, index) => (
          <div className="bg-[#F3E4E4] p-8 rounded-[24px]" key={index}>
            <div className="flex flex-col gap-2">
              <Image
                src={item?.icon}
                alt={"use-links-icon-image"}
                width={400}
                height={400}
                className="object-contain w-[80px] h-auto"
              />
              <h2 className="font-bold text-[20px] text-[#2C2B4B]">
                {item?.title}
              </h2>
              <p>{item?.subTitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MissionVisionsection;

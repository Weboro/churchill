import { NewsSection, TopBannerCard } from "@/components";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { usefulLinksData } from "@/constDatas/usefulLinksData";

export const metadata = {
  title: "Abhinay",
  // description: 'abcd',
  // metadataBase: new URL('https://sdsd.com.np'),
  // keywords: ['Next.js', 'React', 'JavaScript'],
  // openGraph: {
  //   images: '/og-image.png',
  // },
};
const UsefuLinks = () => {
  return (
    <main className="min-h-[80vh]">
      <div className="flex flex-col gap-[32px] lg:gap-[64px]">
        <div>
          <TopBannerCard
            image={`/assets/hero-image.jpeg`}
            titleSpan={"Useful"}
            title={"Links"}
            subTitle={`Student Hub > Request Form > Useful Links`}
          />
        </div>
        <div className="container mx-auto px-5">
          <div className="flex flex-col gap-[32px] lg:gap-[64px]">
            <div className="flex justify-between gap-4 flex-col lg:flex-row items-center">
              <h2 className="font-bold text-[36px] text-[#2C2B4B]">
                Useful Links
              </h2>
              {/* <div className="">
                <div className="relative">
                  <span className="absolute right-3 top-3 text-[20px] flex items-center justify-center text-black/65">
                    <FaSearch />
                  </span>
                  <input
                    type="text"
                    placeholder="Search for links"
                    // id="search"
                    // value={search}
                    // onChange={(e) => {
                    //   setSearch(e.target.value);
                    // }}
                    className="w-full h-auto font-inter text-[12px] text-[#021327] bg-transparent border border-[#ABABAB] outline-0 pr-8 pl-3 py-3 rounded-full"
                  />
                </div>
              </div> */}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-[34px] lg:gap-[34px]">
              {/* {usefulLinksData?.map((item, index) => (
                <UsefulLinksCard
                  icon={`${item?.icon}`}
                  subTitle={item?.subTitle}
                  title={item?.title}
                  key={index}
                />
              ))} */}
            </div>
          </div>
        </div>
        <div>
          <NewsSection />
        </div>
      </div>
    </main>
  );
};

export default UsefuLinks;

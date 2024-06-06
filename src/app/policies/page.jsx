import { NewsSection, RequestFormCard, TopBannerCard } from "@/components";
import React from "react";
// import { navItems } from "@/constDatas/navItems";
import { requestList } from "@/constDatas/requestList";

export const metadata = {
  title: "Abhinay",
  // description: 'abcd',
  // metadataBase: new URL('https://sdsd.com.np'),
  // keywords: ['Next.js', 'React', 'JavaScript'],
  // openGraph: {
  //   images: '/og-image.png',
  // },
};
const PoliciesList = () => {
  // const requestLists = navItems[2]?.Catagories;

  return (
    <main className="min-h-[80vh]">
      <div className="flex flex-col gap-[32px] lg:gap-[64px]">
        <div>
          <TopBannerCard
            image={`/assets/hero-image.jpeg`}
            titleSpan={""}
            title={"Policies and Procedures"}
            subTitle={`Student Hub > Request Form > Policies and Procedures`}
          />
        </div>
        <div className="container mx-auto px-5">
          <div className="flex flex-col gap-[44px]">
            <h2 className="font-bold text-[36px] text-[#2C2B4B]">Policies</h2>
            <div className="">
              <div className="flex flex-col gap-5">
                {requestList?.map((item, index) => (
                  <RequestFormCard
                    key={index}
                    icon={item?.icon}
                    menuTitle={item?.menuTitle}
                    slug={`/policies/${item?.slug}`}
                    subTitle={item?.subTitle}
                    btnTitle={"View"}
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
    </main>
  );
};

export default PoliciesList;

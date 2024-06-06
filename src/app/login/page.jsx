import React from "react";
import { navItems } from "@/constDatas/navItems";
import { StyledHeroCard, Button } from "@/components";
import Link from "next/link";

const page = () => {
  const loginData = navItems[3];
  console.log(loginData.Catagories);

  return (
    <div>
      <StyledHeroCard title="Login" />
      <div className="container mx-auto px-5 my-[64px]">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {loginData.Catagories?.map((item, index) => (
            <div key={index}>
              <Link
                target={item?.redirectLink ? "_blank" : ""}
                href={
                  item?.redirectLink
                    ? item?.redirectLink
                    : item?.link
                    ? item?.link
                    : ""
                }
              >
                <div className="p-4 rounded-2xl bg-red-100 flex flex-col gap-4">
                  <div className="w-14 h-14 mx-auto bg-white rounded-full grid place-items-center">
                    <i className={`text-2xl ${item?.headerIcon}`}></i>
                  </div>
                  <p className="text-xl font-bold text-center">
                    {item?.menuTitle}
                  </p>
                  <Button
                    btnName="Login"
                    style="w-fit mx-auto"
                    type="primary"
                  />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;

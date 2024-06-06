import Image from "next/image";
import React from "react";

const PopUpDetailsCard = ({ data, handlePopUpClose }) => {
  const { title, subTitle, image, description } = data;
  return (
    <div>
      <div className="z-50 fixed top-0 left-0 right-0 bottom-0 bg-black/75">
        <div>
          <div
            className="w-[80%] lg:w-[50%] h-fit overflow-x-hidden z-50 fixed top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] overflow-y-auto bg-white p-5 rounded-[25px] lg:rounded-[5px] shadow-xl shadow-cus"
            style={{
              animation: "loginAnimation ease-out 0.5s",
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Image
                src={`${image}`}
                alt={"use-links-icon-image"}
                width={400}
                height={400}
                className="object-cover w-full h-[400px] rounded-[24px]"
              />
              <div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-bold text-[20px] clamp-1 text-[#2C2B4B] leading-[28px]">
                    {title}
                  </h3>
                  <p className="font-bold text-[16px] text-[#E59623]">
                    {subTitle}
                  </p>
                  <p className="">{description}</p>
                </div>
              </div>
            </div>
          </div>
          <p
            className="absolute top-8 right-8 text-[#FF0000] text-4xl font-bold cursor-pointer"
            onClick={() => {
              handlePopUpClose();
            }}
          >
            X
          </p>
        </div>
      </div>
    </div>
  );
};

export default PopUpDetailsCard;

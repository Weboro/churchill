import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../button";
import { FaArrowRight } from "react-icons/fa";

const TopBannerCard = ({
  image,
  title,
  subTitle,
  titleSpan,
  imageA,
  BtnAText,
  BtnBText,
  link,
  linkA,
  beforeTitle,
  imageAStyle,
  courseCode,
}) => {
  return (
    <div
      style={{
        // backgroundImage: `linear-gradient(45deg, rgba(0, 0, 0, .5) 30%, rgb(97 96 96 / 39%) 100%), url(${image})`,
        backgroundImage: `linear-gradient(241deg, rgba(229, 150, 35, 0) 10%, rgb(97 96 96 / 74%) 100%), url(${image})`,
        backgroundRepeat: "no-repeat",
        objectFit: "cover",
        width: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="lg:h-[80vh] mt-8 md:mt-0 flex items-center justify-center"
    >
      <div className="container mx-auto px-5 mt-8 md:m-0">
        <div className="flex flex-col lg:grid lg:grid-cols-2">
          <div className="lg:pt-0 pt-[8vh]">
            <div className="flex lg:h-[80vh] h-[44vh] flex-col justify-center gap-4 md:gap-7 ">
              <div>
                {beforeTitle && (
                  <p className="text-white px-[2px] pt-[2px] pb-[1px] text-xl font-extrabold highlight w-fit">
                    {beforeTitle}
                  </p>
                )}
                <h2 className="text-4xl font-extrabold md:text-[70px] leading-8 md:leading-[70px] text-[#ffffff]">
                  {titleSpan} {title}
                </h2>
                {courseCode && (
                  <p
                    className="text-white underline-[#2C2B4B] pb-1 px-[2px] mt-5 text-xl font-extrabold w-fit relative
             before:absolute before:w-full before:h-1 before:bg-[#E59623] before:bottom-0 before:left-0
              "
                  >
                    {courseCode}
                  </p>
                )}
              </div>
              <p className="font-semibold text-[#ffffff] text-md md:text-[24px]">
                {subTitle}
              </p>
              <div className="flex gap-1 md:gap-3 flex-col md:flex-row">
                <Link href={`${linkA}`}>
                  <Button
                    btnName={BtnBText}
                    icon={<FaArrowRight />}
                    styleA={"flex items-center gap-1"}
                    style={
                      "border rounded-lg text-[#ffffff] font-bold text-[18px] border-2 border-[#606060] px-4 md:px-8 py-3 bg-[#E59623] hover:bg-[#ff9700] transition duration-200  ease-in-out hover:scale-105"
                    }
                  />
                </Link>

                <Link href={`${link}`}>
                  <Button
                    btnName={BtnAText}
                    icon={<FaArrowRight />}
                    styleA={"flex items-center gap-1"}
                    style={
                      "border rounded-lg text-[#ffffff] font-bold text-[18px] border-2 border-[#606060] px-4 md:px-8 py-3 bg-[#E59623] hover:bg-[#ff9700] transition duration-200  ease-in-out hover:scale-105"
                    }
                  />
                </Link>
              </div>
            </div>
          </div>
          {imageA && (
            <div className="flex justify-center items-center">
              <Image
                src={`${imageA}`}
                alt=""
                width={400}
                height={400}
                // className={`hidden lg:block object-contain w-[450px] aspect-square ${imageAStyle}`}
                className={` object-contain w-[450px] aspect-square ${imageAStyle}`}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopBannerCard;

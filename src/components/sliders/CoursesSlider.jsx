"use client";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { navItems } from "@/constDatas/navItems";
// import { usefulLinksData } from "@/constDatas/usefulLinksData";
import CoursesCard from "../cards/CoursesCard";
import Button from "../button";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const CoursesSlider = () => {
  const courcesData = navItems[2]?.Catagories;
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);

  useEffect(() => {
    // Update the total number of slides whenever the slider content changes
    const handleSliderUpdate = () => {
      if (sliderRef.current) {
        setTotalSlides(sliderRef.current.props.children.length);
      }
    };

    if (sliderRef.current) {
      handleSliderUpdate();
    }
  }, [currentSlide]);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    afterChange: (current) => setCurrentSlide(current),
  };
  const goToPreviousSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const goToNextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };
  const serviceLocaton = navItems[2]?.Catagories;

  return (
    <div className="flex flex-col gap-4 lg:gap-[40px]">
      <Slider {...settings} ref={sliderRef}>
        {courcesData?.map((item, index) => (
          <div className="px-[11px] my-[11px]" key={index}>
            <CoursesCard
              icon={`${item?.icon}`}
              subTitle={item?.subTitleA}
              title={item?.menuTitle}
              key={index}
              link={`/courses/${item?.slug}`}
            />
          </div>
        ))}
      </Slider>
      <div>
        <div className="flex flex-col lg:flex-row justify-between gap-4 items-center">
          <div className="block lg:hidden">
            <div className="flex gap-[24px]">
              <button
                className={`rounded-full w-[54px] h-[54px] flex items-center justify-center ${
                  currentSlide === 0
                    ? "bg-[#848484] text-white border border-[#848484]"
                    : "hover:bg-[#848484] hover:text-white bg-transparent text-[#202917] border border-[#202917]"
                }`}
                onClick={goToPreviousSlide}
              >
                <BiChevronLeft className="text-[24px]" />
              </button>
              <button
                className={`rounded-full w-[54px] h-[54px] flex items-center justify-center ${
                  currentSlide === totalSlides - 1
                    ? "bg-[#848484] text-white border border-[#848484]"
                    : "hover:bg-[#848484] hover:text-white bg-transparent text-[#202917] border border-[#202917]"
                }`}
                onClick={goToNextSlide}
              >
                <BiChevronRight className="text-[24px]" />
              </button>
            </div>
          </div>

          <div>
            <div className="flex justify-start">
              <Link href={"/courses"}>
                <Button
                  btnName={"View all Courses"}
                  icon={<FaArrowRight />}
                  styleA={"flex items-center gap-1"}
                  styleType="secondary"
                />
              </Link>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="flex gap-[24px]">
              <button
                className={`rounded-full w-[54px] h-[54px] flex items-center justify-center ${
                  currentSlide === 0
                    ? "bg-[#848484] text-white border border-[#848484]"
                    : "hover:bg-[#848484] hover:text-white bg-transparent text-[#202917] border border-[#202917]"
                }`}
                onClick={goToPreviousSlide}
              >
                <BiChevronLeft className="text-[24px]" />
              </button>
              <button
                className={`rounded-full w-[54px] h-[54px] flex items-center justify-center ${
                  currentSlide === totalSlides - 1
                    ? "bg-[#848484] text-white border border-[#848484]"
                    : "hover:bg-[#848484] hover:text-white bg-transparent text-[#202917] border border-[#202917]"
                }`}
                onClick={goToNextSlide}
              >
                <BiChevronRight className="text-[24px]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesSlider;

// import CoursesCard from "../cards/CoursesCard";

// const CoursesSlider = () => {
//   const coursesData = navItems[2]?.Catagories;

//   const [showingCourse, setShowingCourse] = useState({ start: 0, stop: 2 });

//   function handleLoadLess() {
//     setShowingCourse({ start: 0, stop: 2 });
//   }
//   function handleLoadMore() {
//     setShowingCourse({ start: 2, stop: 4 });
//   }
//   return (
//     <div className="flex flex-col gap-8">
//       <div className="grid md:grid-cols-2 md:hidden">
//         {coursesData
//           ?.slice(showingCourse.start, showingCourse.stop)
//           ?.map((item, index) => (
//             <div className="px-[11px] my-[11px]" key={index}>
//               <CoursesCard
//                 icon={`${item?.icon}`}
//                 subTitle={item?.subTitleA}
//                 title={item?.menuTitle}
//                 key={index}
//                 link={`/courses/${item?.slug}`}
//               />
//             </div>
//           ))}
//       </div>

//       <div className="grid md:grid-cols-3">
//         {coursesData?.map((item, index) => (
//           <div className="px-[11px] my-[11px]" key={index}>
//             <CoursesCard
//               icon={`${item?.icon}`}
//               subTitle={item?.subTitleA}
//               title={item?.menuTitle}
//               key={index}
//               link={`/courses/${item?.slug}`}
//             />
//           </div>
//         ))}
//       </div>

//       <div className="items gap-[24px] flex md:hidden">
//         <button
//           onClick={() => handleLoadLess()}
//           className={`rounded-full w-[54px] h-[54px] flex items-center justify-center border-[#2C2B4B] text-white border `}
//         >
//           <BiChevronLeft className="text-[24px] text-black" />
//         </button>
//         <button
//           onClick={() => handleLoadMore()}
//           className={`rounded-full w-[54px] h-[54px] flex items-center justify-center border-[#2C2B4B] text-white border`}
//         >
//           <BiChevronRight className="text-[24px] text-black" />
//         </button>
//       </div>
//       {/* <div className="w-fit mx-auto" onClick={() => handleLoadMore()}>
//         <Button
//           btnName="Courses"
//           icon={<FaArrowRight />}
//           styleA={"flex items-center gap-1"}
//           style={
//             "border font-semibold text-[14px] border-2 border-[#606060] rounded-full px-4 py-3 hover:bg-[#ff9700] transition duration-200  ease-in-out hover:scale-105"
//           }
//         />
//       </div> */}
//     </div>
//   );
// };

// export default CoursesSlider;

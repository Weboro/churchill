"use client";
import React, { useEffect, useState } from "react";
import FadeUpAnimation from "@/animations/FadeUp";
import { FetchCourseData } from "@/components/utils/apiQueries";
import CoursesCard from "@/components/cards/CoursesCard";

const CoursesSlider = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    FetchCourseData()
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      {!isLoading && (
        <div className="flex flex-col gap-4 lg:gap-[40px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[22px]">
            {data?.map((item, index) => (
              <FadeUpAnimation delay={index * 0.1} key={index}>
                <CoursesCard
                  image={item.heroImage}
                  faculty={item?.faculty.faculty_name}
                  title={item?.course_name}
                  subTitle={item?.description}
                  link={`/courses/${item?.slug}`}
                />
              </FadeUpAnimation>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default CoursesSlider;

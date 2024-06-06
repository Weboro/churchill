"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Search, Button, StyledHeroCard } from "@/components";
import { FaArrowRight } from "react-icons/fa";
import { BlogData } from "@/constDatas/BlogData";
import Link from "next/link";

const BlogsPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const tags = [
    { tag: "busineess" },
    { tag: "science" },
    { tag: "law" },
    { tag: "education" },
    { tag: "technology" },
    { tag: "design" },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const query = searchQuery.trim().toLowerCase();

  return (
    <>
      {isLoading ? (
        <>Loading</>
      ) : (
        <>
          <div className="container mx-auto px-5 flex flex-col gap-[32px] lg:gap-[64px]">
            <StyledHeroCard title="Blogs" />
            <div className="container mx-auto px-5 flex flex-col gap-[32px] lg:gap-[64px]">
              <section>
                <div className="flex flex-col lg:flex-row gap-5">
                  <div className="flex-[65%] flex flex-col gap-5">
                    <h3 className="text-xl font-bold">
                      Search for blogs you want to explore.
                    </h3>
                    <Search
                      text={searchQuery}
                      onSetText={setSearchQuery}
                      placeholderText="Search"
                    />
                  </div>
                  <div className="flex-[30%] flex flex-col gap-3">
                    <h3 className="text-xl font-bold">Tags</h3>
                    <div className="flex flex-wrap gap-3">
                      {tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-[#F2CF9C] px-3 py-1 rounded-full"
                        >
                          {tag.tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
              <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {BlogData.map((data, index) => {
                  const shouldShow =
                    !query || data.title.trim().toLowerCase().includes(query);

                  if (shouldShow)
                    return (
                      <div
                        key={index}
                        className=" bg-[#F3E4E4] rounded-3xl overflow-hidden"
                      >
                        <Link href={`/events/blogs/${data.slug}`}>
                          <Image
                            width={400}
                            height={400}
                            alt={`Image for ${data?.title}`}
                            src={data.image}
                            // className="h-[300px] w-full object-cover"
                            className="w-full aspect-[3/2]"
                          />
                        </Link>
                        <div className="p-4 flex flex-col gap-5">
                          <div className="flex-1 flex flex-col gap-3">
                            <p>{data.date}</p>
                            <h4 className="font-bold text-2xl leading-7 line-clamp-3">
                              {data.title}
                            </h4>
                            <h3 className="line-clamp-5">{data?.subTitle}</h3>
                            {/* <p dangerouslySetInnerHTML={{ __html: data?.description }}></p> */}
                            <div className="mt-4">
                              <Link href={`/blogs/${data.slug}`}>
                                <Button
                                  btnName="Learn More"
                                  icon={<FaArrowRight />}
                                  styleA={"flex items-center gap-1"}
                                  styleType="secondary"
                                />
                              </Link>
                            </div>
                          </div>
                          <div className="flex items-start gap-2 flex-wrap">
                            {data?.tags?.map((item, index) => (
                              <span
                                className="bg-[#F2CF9C] px-3 py-1 rounded-full"
                                key={index}
                              >
                                {item.tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                })}
              </section>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default BlogsPage;

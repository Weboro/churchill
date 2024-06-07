"use client";
import React, { useState } from "react";
import { Search, BlogItemCard, StyledHeroCard } from "@/components";
import { BlogData } from "@/constDatas/BlogData";

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
          <div className="container mx-auto px-5 flex flex-col gap-[32px] lg:gap-[64px] mb-[48px]">
            <StyledHeroCard title="Blogs" showSearch={false} />

            <div className="container mx-auto px-5 flex flex-col gap-[32px] lg:gap-[64px]">
              <section>
                <div className="flex flex-col lg:flex-row gap-5">
                  <div className="flex-[65%] flex flex-col gap-5">
                    <h3 className="text-xl font-bold">
                      Search for blogs you want to explore.
                    </h3>
                    <Search
                      text={searchQuery}
                      onSearchText={setSearchQuery}
                      placeholderText="Search"
                    />
                  </div>
                  <div className="flex-[30%] flex flex-col gap-3">
                    <h3 className="text-xl font-bold">Tags</h3>
                    <div className="flex flex-wrap gap-3">
                      {tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-[#F2CF9C] px-3 py-1 rounded-md"
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
                  if (
                    !query ||
                    data?.title.trim().toLowerCase().includes(query)
                  )
                    return (
                      <BlogItemCard
                        key={index}
                        slug={data?.slug}
                        title={data?.title}
                        image={data?.image}
                        date={data?.date}
                        tags={data?.tags}
                        subTitle={data?.subTitle}
                        index={data?.index}
                      />
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

"use client";
import React, { useState, useEffect } from "react";
import {
  Search,
  BlogItemCard,
  StyledHeroCard,
  DataNotFound,
  Button,
  Spiner,
} from "@/components";
import { BlogData } from "@/constDatas/BlogData";
import { BlogTags } from "@/constDatas/BlogTags";
import { FetchBlogData } from "../../components/utils/apiQueries";
import { FiAnchor } from "react-icons/fi";

const BlogsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  const [searchQuery, setSearchQuery] = useState("");
  const query = searchQuery.trim().toLowerCase();

  useEffect(() => {
    setIsLoading(true);

    FetchBlogData()
      .then((res) => {
        setData(
          res.data.sort((prev, next) => {
            const prevDate = new Date(prev.date);
            const nextDate = new Date(next.date);

            return nextDate - prevDate;
          })
        );
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (!query.length > 0) setData(data);
  }, [query]);

  function handleSearch() {
    setIsLoading(true);
    try {
      if (!query.length > 0) setData(data);

      setData(data.filter((item) => item.title.toLowerCase().includes(query)));
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      {isLoading ? (
        <Spiner />
      ) : (
        <div className="container mx-auto px-5 flex flex-col gap-[32px] lg:gap-[64px] mb-[48px] mt-[48px]">
          <div className="container mx-auto px-5 flex flex-col gap-[32px] lg:gap-[64px]">
            <section>
              <div className="flex flex-col lg:flex-row gap-5">
                <div className="flex-[65%] flex flex-col gap-5 md:max-w-[50%]">
                  <h3 className="text-2xl font-bold ">
                    Search for blogs you want to explore.
                  </h3>
                  <div className="flex items-center gap-4 flex-col md:flex-row">
                    <Search
                      text={searchQuery}
                      onSearchText={setSearchQuery}
                      placeholderText="Enter Your Search Query"
                    />
                    <div onClick={handleSearch}>
                      <Button btnName={"Search"} />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {data.length > 0 ? (
              <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-[3rem] gap-4">
                {data.map((data, index) => {
                  return (
                    <BlogItemCard
                      key={index}
                      slug={data?.slug}
                      title={data?.title}
                      image={data?.image}
                      date={data?.date}
                      tags={data?.tags}
                      subTitle={data?.description}
                      index={data?.index}
                    />
                  );
                })}
              </section>
            ) : (
              <div className="md:w-1/2 md:mx-auto">
                <DataNotFound />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default BlogsPage;

"use client";
import { BlogData } from "@/constDatas/BlogData";
import React from "react";
import { useParams } from "next/navigation";
import { BlogItemCard } from "@/components";

const MoreBlogsSection = () => {
  const { slug } = useParams();

  return (
    <div className="container mx-auto px-5">
      <h3 className="font-bold text-3xl mb-12">More Blogs</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {BlogData?.slice()
          .reverse()
          .slice(0, 3)
          .map((item, index) => {
            if (item.slug !== slug) {
              return (
                <BlogItemCard
                  key={index}
                  slug={item?.slug}
                  title={item?.title}
                  image={item?.image}
                  date={item?.date}
                  tags={item?.tags}
                  subTitle={item?.subTitle}
                  index={item?.index}
                />
              );
            }
          })}
      </div>
    </div>
  );
};

export default MoreBlogsSection;

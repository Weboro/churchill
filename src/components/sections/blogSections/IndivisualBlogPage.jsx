// "use client";
import StyledHeroCard from "@/components/cards/StyledHeroSection";
import { BlogData } from "@/constDatas/BlogData";
import Image from "next/image";

const IndivisualBlogPage = ({ slug }) => {
  const data = BlogData?.find((data) => data.slug === slug);

  return (
    <>
      <StyledHeroCard
        title={data.title}
        breadcrumbs={`Events > Blogs > ${data.slug.split("-").join(" ")}`}
      />

      <div className="-translate-y-8">
        <div className="container mx-auto px-5">
          {/* flex flex-col gap-[32px] lg:gap-[64px] */}
          <Image
            width={1240}
            height={1240}
            src={data.image}
            alt={`Hero image for ${data.title}`}
            className="w-full aspect-[3/2] rounded-tl-[24px] rounded-tr-[24px]"
          />
          <div className="bg-[#FFFFFFFF] p-4 -translate-y-16 rounded-tl-[32px] rounded-tr-[32px] flex flex-col gap-4">
            <p>{data.date}</p>
            <h2 className=" text-matte-purple leading-7 md:leading-none text-2xl md:text-3xl font-bold">
              {data.title}
            </h2>
            <div
              className="rich-text-container"
              dangerouslySetInnerHTML={{ __html: data?.description }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default IndivisualBlogPage;

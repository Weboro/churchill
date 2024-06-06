import Image from "next/image";
import { BlogData } from "@/constDatas/BlogData";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import Button from "@/components/button";

function BlogSection() {
  const firstItem = BlogData[0];

  return (
    <div className="container mx-auto px-5 ">
      <div className="flex flex-col gap-[32px] lg:gap-[44px]">
        <h2 className="font-bold text-[36px] text-center mx-auto text-[#2C2B4B]">
          Latest Blogs
        </h2>
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {BlogData.map((data, index) => (
            <div
              key={index}
              className=" bg-[#F3E4E4] rounded-3xl overflow-hidden"
            >
              <Link href={`/blogs/${data.slug}`}>
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
          ))}
        </section>
        <div>
          <div className="flex justify-center">
            <Link href={"/blogs"} className="w-max">
              <Button
                btnName={"More Blogs"}
                icon={<FaArrowRight />}
                styleA={"flex items-center gap-1"}
                styleType="secondary"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogSection;

// <div className="flex items-center flex-col lg:flex-row gap-4 mb-8">
//           <div className="lg:w-[50%] lg:h-[400px] rounded-[22px] overflow-hidden relative">
//             <Image
//               src={`${firstItem?.image}`}
//               alt={"use-links-icon-image"}
//               width={400}
//               height={400}
//               className="w-full rounded-[32px] aspect-[3/2]"
//             />
//             <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-zinc-900 to-slate-50/0 flex flex-col justify-end px-5 py-3 gap-4 text-white group">
//               <Link
//                 href={`/blogs/${firstItem?.slug}`}
//                 className="font-bold text-2xl line-clamp-2"
//               >
//                 {firstItem?.title}
//               </Link>
//               <div className="flex gap-2 items-center justify-between">
//                 <p className="text-sm">{firstItem?.date}</p>

//                 <Link
//                   href={`/blogs/${firstItem?.slug}`}
//                   className="capitalize flex items-center gap-2 pr-2 text-slate-50/70 group-hover:translate-x-2 transition-all"
//                 >
//                   <span>learn more</span>
//                   <FaArrowRight />
//                 </Link>
//               </div>
//             </div>
//           </div>

//           <div className="flex-1 grid grid-rows-4">
//             {BlogData?.slice(1, 5).map((item, index) => (
//               <Link
//                 href={`/blogs/${item.slug}`}
//                 key={index}
//                 className=" border-b-[#B0B0B0] border-b last:border-b-[#B0B0B0] p-2 flex flex-col gap-4 lg:gap-2 justify-between hover:bg-[#E59623] transition-all group hover:cursor-pointer"
//               >
//                 <h2 className="text-xl text-[#2C2B4B] font-bold">
//                   {item.title}
//                 </h2>

//                 <div className="flex gap-2 items-center text-[#7C7C8F] font-semibold justify-between">
//                   <p>{item.date}</p>
//                   <p className="capitalize flex items-center gap-2 pr-2 text-neutral-900/70 group-hover:translate-x-2 transition-all">
//                     {/* <span className="hidden lg:block">learn more</span> */}
//                     <FaArrowRight />
//                   </p>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>

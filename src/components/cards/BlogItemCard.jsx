import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import Button from "@/components/button";

const BlogItemCard = ({ slug, title, image, date, tags, subTitle, index }) => {
  return (
    <div key={index} className=" rounded-md overflow-hidden">
      <Link href={`/blogs/${slug}`}>
        <Image
          width={400}
          height={400}
          alt={`Image for ${title}`}
          src={image}
          className="w-full aspect-[3/2]"
        />
      </Link>
      <div className="flex flex-col gap-4">
        <div className="pt-5 flex items-center justify-between">
          <p className="flex items-center gap-2">
            <i className="fi fi-rr-calendar-day flex text-xl"></i>
            <span>{date}</span>
          </p>

          <p className="text-md flex items-center gap-2">
            <i className="fi fi-rr-circle-user flex text-xl"></i>
            <span>Admin</span>
          </p>
        </div>

        <h4 className="font-bold text-2xl leading-7 line-clamp-3 text-matte-purple">
          {title}
        </h4>

        <p className="line-clamp-3 text-lg">{subTitle}</p>

        <Link href={`/blogs/${slug}`} className="w-fit">
          <Button
            btnName="Learn More"
            icon={<FaArrowRight />}
            styleA={"flex items-center gap-1"}
            styleType="tertiary"
          />
        </Link>

        <div className="flex items-start gap-2 flex-wrap">
          {tags?.map((item, index) => (
            <span className="bg-[#F2CF9C] px-3 py-1 rounded-md" key={index}>
              {item.tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogItemCard;

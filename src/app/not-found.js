"use client";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Button from "@/components/button";
import Animation from "@/constDatas/PageNotFound.json";
import Lottie from "lottie-react";

export default function NotFound() {
  return (
    <div
      className="min-h-[80vh]"
      style={{
        backgroundImage: `linear-gradient(rgb(255 255 255 / 64%), rgb(255 255 255 / 64%) 100%), url(/assets/about-us-watermark.png)`,
        backgroundRepeat: "no-repeat",
        objectFit: "cover",
        width: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-5">
        <div className="flex flex-col items-center justify-center gap-5">
          {/* <Image
          
            src={`/assets/page-not-found.png`}
            alt={"use-links-icon-image"}
            width={400}
            height={400}
            className="w-[280px] h-[280px] object-contain"
          /> */}
          {<Lottie className="w-1/2" animationData={Animation} loop={true} />}

          <h3 className="font-bold text-[36px] text-center text-[#2C2B4B]">
            Are You Lost?
          </h3>
          <p>The page you are looking for doesnt exist!</p>
          <Link href={`/`} className="w-max">
            <Button
              btnName={"Go Back Home"}
              icon={<FaArrowRight />}
              styleA={"flex items-center gap-1"}
              style={
                "border border-[#606060] mb-[10vh] rounded-full px-4 py-3 bg-[#E59623] hover:text-black hover:bg-[#424242]/25 transition delay-150"
              }
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

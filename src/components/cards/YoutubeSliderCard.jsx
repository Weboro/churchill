"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const YoutubeSliderCard = ({ videoId, title }) => {
  return (
    <div className="group">
      <div className="relative aspect-[3/1.6]">
        <Link href={`https://www.youtube.com/watch?v=${videoId}`}>
          <Image
            width={400}
            height={300}
            src={`https://i3.ytimg.com/vi/${videoId}/hqdefault.jpg`}
            alt={`Youtube link for ${title}`}
            className="w-full h-full object-cover"
          ></Image>
        </Link>

        <div className="transition-all bg-black/40  group-hover:bg-black/20 top-0 left-0 w-full h-full absolute"></div>

        <Image
          width={300}
          height={300}
          className="w-16 aspect-square object-contain absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          src="/assets/YoutubeIcon.svg"
        />
      </div>
      <h4 className="font-bold text-lg py-6 group-hover:underline transition-all">
        {title}
      </h4>
    </div>
  );
};

export default YoutubeSliderCard;

"use client";
import { PatternBannerCard } from "@/components";
import { useState } from "react";
import Image from "next/image";

const images = [
  "1H7A2756.webp",
  "1H7A2760.webp",
  "1H7A2761.webp",
  "1H7A2762.webp",
  "1H7A2766.webp",
  "1H7A2767.webp",
  "1H7A2769.webp",
  "1H7A2770.webp",
  "1H7A2773.webp",
  "1H7A2779.webp",
  "1H7A2782.webp",
  "1H7A2784.webp",
  "1H7A2801.webp",
  "1H7A2842.webp",
  "1H7A2847.webp",
  "1H7A2852.webp",
  "1H7A2913.webp",
  "1H7A2942.webp",
  "1H7A2949.webp",
  "1H7A2956.webp",
  "1H7A2960.webp",
  "1H7A2963.webp",
  "1H7A2970-Pano.webp",
  "1H7A3005.webp",
  "1H7A3053.webp",
  "1H7A3055.webp",
  "1H7A3058.webp",
  "1H7A3099.webp",
  "1H7A3100.webp",
  "1H7A3112.webp",
  "1H7A3113.webp",
  "1H7A3114.webp",
  "1H7A3115.webp",
  "1H7A3116.webp",
  "1H7A3222.webp",
  "1H7A3223.webp",
  "1H7A3224.webp",
  "1H7A3227.webp",
  "1H7A3229.webp",
  "1H7A3232.webp",
  "1H7A3233.webp",
  "1H7A3235.webp",
  "1H7A3237.webp",
  "1H7A3238.webp",
  "1H7A3241.webp",
  "1H7A3242.webp",
  "1H7A3243.webp",
  "1H7A3335.webp",
  "1H7A3336.webp",
  "1H7A3337.webp",
  "1H7A3338.webp",
  "1H7A3339.webp",
  "1H7A3341.webp",
  "1H7A3342.webp",
  "1H7A3352.webp",
  "1H7A3353.webp",
  "1H7A3357.webp",
  "1H7A3359.webp",
  "1H7A3362.webp",
  "1H7A3363.webp",
  "1H7A3364.webp",
  "1H7A3379.webp",
  "1H7A3381.webp",
  "1H7A3406.webp",
  "1H7A3434.webp",
  "1H7A3435.webp",
  "1H7A3480.webp",
  "1H7A3516.webp",
  "1H7A3518.webp",
  "1H7A3519.webp",
  "1H7A3521.webp",
  "1H7A3523.webp",
  "1H7A3524.webp",
  "1H7A3525.webp",
  "1H7A3526.webp",
  "1H7A3529.webp",
  "1H7A3532.webp",
  "1H7A3533.webp",
  "1H7A3539.webp",
  "1H7A3541.webp",
  "1H7A3542.webp",
  "1H7A3543.webp",
  "1H7A3547.webp",
  "1H7A3548.webp",
  "1H7A3549.webp",
  "1H7A3550.webp",
  "1H7A3551.webp",
  "1H7A3554.webp",
  "1H7A3555.webp",
  "1H7A3557.webp",
  "1H7A3558.webp",
  "1H7A3561.webp",
  "1H7A3562.webp",
  "1H7A3563.webp",
  "1H7A3665.webp",
  "1H7A3667.webp",
  "1H7A3681.webp",
  "1H7A3683.webp",
  "1H7A3689.webp",
];

const GalleryPage = () => {
  const step = 9;
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(startIndex + step);
  const ImagesToShow = images.slice(startIndex, endIndex);
  const [isFullScreenShown, setIsFullScreenShown] = useState(false);
  const [fullScreenImage, setFullScreenImage] = useState("");

  function handleNextPage() {
    if (endIndex < images.length) {
      setStartIndex(startIndex + step);
      setEndIndex(endIndex + step);
    }
  }

  function handlePrevPage() {
    if (startIndex > 0) {
      setStartIndex(startIndex - step);
      setEndIndex(endIndex - step);
    }
  }

  return (
    <>
      <PatternBannerCard title="Gallery" />

      <div className="container mx-auto px-5 flex flex-col gap-[48px] pb-[48px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {ImagesToShow.map((item, index) => (
            <Image
              key={index}
              src={`/assets/gallery/${item}`}
              width={500}
              height={500}
              alt={`Gallery Image ${index}`}
              onClick={(e) => {
                setIsFullScreenShown(true);
                setFullScreenImage(`/assets/gallery/${item}`);
              }}
              className="aspect-square object-cover border-2 border-white"
            />
          ))}
        </div>

        <div className="flex items-center justify-between gap-2">
          <p>
            Showing {startIndex} to {endIndex}
          </p>
          <div className="flex items-center gap-2">
            <button
              className="bg-primary-orange font-bold p-4 rounded-md"
              onClick={handlePrevPage}
            >
              Previous
            </button>
            <button
              className="bg-primary-orange font-bold p-4 rounded-md"
              onClick={handleNextPage}
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {isFullScreenShown && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black/90 z-[5000] grid place-items-center">
          <div
            className="absolute top-8 right-12 cursor-pointer text-white"
            onClick={() => {
              setIsFullScreenShown(false);
            }}
          >
            <i class="fi fi-br-cross"></i>
          </div>
          <div className="w-[90%] md:w-[60%] grid place-items-center">
            <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-xl">
              loading...
            </p>
            <Image
              src={fullScreenImage}
              width={1000}
              height={1000}
              alt="showing image"
              className="w-full object-contain relative z-10"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryPage;

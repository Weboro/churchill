"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const CampusGalleryCarousel = ({ images }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const openGallery = (index) => {
    setActiveIndex(index);
    setIsOpen(true);
  };

  return (
    <div className="mt-6">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        loop
        autoplay={{ delay: 3200, disableOnInteraction: false }}
        spaceBetween={16}
        navigation
        pagination={{ clickable: true }}
        slidesPerView={1.1}
        breakpoints={{
          640: { slidesPerView: 1.6 },
          768: { slidesPerView: 2.2 },
          1024: { slidesPerView: 2.8 },
        }}
        className="campus-carousel"
      >
        {images.map((photo, index) => (
          <SwiperSlide key={photo}>
            <button
              type="button"
              onClick={() => openGallery(index)}
              className="group relative h-44 w-full overflow-hidden rounded-2xl bg-white shadow-sm sm:h-52 md:h-60"
              aria-label="Open campus gallery"
            >
              <Image
                src={photo}
                alt={`Campus gallery image ${index + 1}`}
                width={960}
                height={640}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="pointer-events-none absolute inset-0 bg-black/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </button>
          </SwiperSlide>
        ))}
      </Swiper>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-6">
          <div className="relative w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-2xl">
            <button
              type="button"
              className="absolute right-3 top-3 z-10 rounded-full bg-zinc-100 px-3 py-1 text-sm font-semibold text-zinc-700 hover:bg-zinc-200"
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>
            <Swiper
              modules={[Navigation, Pagination]}
              initialSlide={activeIndex}
              navigation
              pagination={{ clickable: true }}
              className="campus-lightbox"
            >
              {images.map((photo, index) => (
                <SwiperSlide key={`${photo}-lightbox`}>
                  <div className="lightbox-frame flex items-center justify-center bg-zinc-950">
                    <Image
                      src={photo}
                      alt={`Campus gallery image ${index + 1}`}
                      width={1400}
                      height={900}
                      className="lightbox-image"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}

      <style>{`
        .campus-carousel .swiper-button-prev,
        .campus-carousel .swiper-button-next,
        .campus-lightbox .swiper-button-prev,
        .campus-lightbox .swiper-button-next {
          color: #ffffff;
        }

        .campus-carousel .swiper-pagination-bullet,
        .campus-lightbox .swiper-pagination-bullet {
          background: #ffffff;
          opacity: 0.35;
        }

        .campus-carousel .swiper-pagination-bullet-active,
        .campus-lightbox .swiper-pagination-bullet-active {
          opacity: 1;
        }

        .campus-lightbox {
          height: min(70vh, 560px);
        }

        .campus-lightbox .swiper-wrapper,
        .campus-lightbox .swiper-slide {
          height: 100%;
        }

        .lightbox-frame {
          height: 100%;
        }

        .lightbox-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      `}</style>
    </div>
  );
};

export default CampusGalleryCarousel;

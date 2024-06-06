import React from "react";
import Image from "next/image";

const StyledHeroCard = ({ title, breadcrumbs }) => {
  return (
    <section className="h-[50vh] relative overflow-hidden mt-8 md:mt-0">
      <Image
        width={30}
        height={30}
        src="/assets/hero-background.svg"
        alt="alt"
        className="absolute w-full h-full -top-1/2 translate-y-1/2 left-0 object-cover z-0"
      />
      <div className="w-full h-full flex items-center justify-center flex-col gap-4 relative z-[2]">
        <p className="text-matte-purple">{breadcrumbs}</p>
        <h2 className="text-matte-purple text-2xl md:text-3xl font-bold text-center w-[90vw] md:w-[80vw] ">
          {title}
        </h2>
      </div>
    </section>
  );
};

export default StyledHeroCard;

import React from "react";
import { Button } from "@/components";

const page = () => {
  return (
    <div
      className="flex flex-col gap-[32px] py-[10rem]"
      style={{
        backgroundImage: `linear-gradient(to top, white, #00000000), url('/assets/hero-vector.svg')`,
        backgroundRepeat: "no-repeat",
        objectFit: "cover",
        width: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto w-[80px] h-[80px] rounded-full grid place-items-center border-8 border-primary-orange">
        <i class="fi fi-br-check flex text-4xl text-primary-orange"></i>
      </div>
      <h2 className="text-3xl lg:text-5xl font-bold w-fit mx-auto">
        Form submitted successfully!
      </h2>

      <a href="/" className="w-fit mx-auto block">
        <Button btnName={"Return To Home page"} />
      </a>
    </div>
  );
};

export default page;

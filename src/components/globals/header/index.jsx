"use client";
import React, { useEffect, useState } from "react";
import DesktopNav from "./ForDesktop";
import MobileNav from "./ForMobile";

const Header = () => {
  const [offset, setOffset] = useState();

  useEffect(() => {
    const onScroll = () => {
      setOffset(window.scrollY);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
  }, []);

  return (
    <div className="z-40 bg-white shadow-lg">
      <div
        className={`z-40 bg-white hidden lg:block shadow-lg ${
          offset > 100 ? "fixed top-0 w-full bg-white flex" : ""
        }`}
      >
        <div className="hidden lg:block relative">
          <DesktopNav />
        </div>
      </div>
      <div className="block lg:hidden">
        <MobileNav />
      </div>
    </div>
  );
};

export default Header;

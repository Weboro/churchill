"use client";
import React, { useState } from "react";
import { FaAngleDown, FaSearch } from "react-icons/fa";
import TopInfo from "./TopInfo";
import { navItems } from "@/constDatas/navItems";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components";
const NavList = ({
  style,
  isDropdownActive,
  handleOnclickA,
  handleOnclick,
}) => {
  const pathname = usePathname();
  const [openSearch, setOpenSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchKeyPress = (event) => {
    if (event.key === "Enter") {
      window.open(`https://www.google.com/search?q=${searchQuery}`, "_blank");
      setOpenSearch(false);
    }
  };

  return (
    <div className="w-full flex flex-col gap-2 z-40 pt-5">
      <div className="hidden lg:block">
        <div className="flex justify-end">
          <TopInfo />
        </div>
      </div>

      <ul className={`${style ? style : ""}`}>
        {navItems?.map((item, index) => {
          const isActive =
            (pathname.includes(item?.slug) && item?.slug?.length > 1) ||
            pathname === item?.slug;
          const hasSubcategories = item?.Catagories?.length > 0;
          return (
            <div key={index}>
              {hasSubcategories ? (
                <li
                  className={` group relative lg:static`}
                  onClick={() => {
                    handleOnclickA();
                  }}
                >
                  {/* <Link href={item?.slug}> */}
                  {/* <div
                    className={`flex gap-1 items-center  ${
                      isActive && "text-[#eb9320]"
                    } cursor-pointer pb-5 hover:text-[#eb9320]`}
                  >
                    <p className="">{item?.title}</p>
                    <span className="rotate-180 group-hover:rotate-0 transition-all">
                      <FaAngleDown />
                    </span> */}
                  <div className={`flex gap-1 pb-3 items-center group`}>
                    <p className="hover:highlight">{item?.title}</p>
                    <span className="rotate-180 group-hover:rotate-0 transition-all">
                      <FaAngleDown />
                    </span>
                  </div>
                  {/* </Link> */}
                  {isDropdownActive && (
                    <div className="z-20 hidden px-5 py-3 w-[80vw] lg:w-[100vw] border-t-4 border-t-[#eb9320] group-hover:block lg:absolute lg:left-0 top-[100%] shadow-xl whitespace-wrap transition delay-150 bg-white">
                      <div className="flex flex-col lg:flex-row gap-4 container mx-auto py-4">
                        <div className="flex-[20%] flex flex-col gap-5 md:flex-row lg:flex-col lg:gap-2 justify-between lg:justify-center">
                          <h2 className="text-xl">{item.title}</h2>

                          <p className="font-[500] font-base pt-1 pb-2">
                            {item.headerDesc}
                          </p>

                          <Link href={`/${item.slug}`}>
                            <Button btnName="Learn More" />
                            {/* <button className="px-4 py-2 border-2 border-[#E59623] hover:bg-[#E59623] transition-all font-bold rounded-xl">
                              Learn More
                            </button> */}
                          </Link>
                        </div>
                        <div className="flex-[78%]">
                          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-2 ">
                            {item.Catagories.map((subItem, index) => (
                              <Link
                                target={`${
                                  subItem?.redirectLink ? "_blank" : ""
                                }`}
                                key={index}
                                href={
                                  subItem?.redirectLink
                                    ? subItem?.redirectLink
                                    : subItem?.link
                                    ? subItem?.link
                                    : `/${item.slug}/${subItem.slug}`
                                }
                                className="w-full h-full lg:max-h-[6rem] flex"
                              >
                                <li
                                  className="hover:bg-[#eb9320]/20 transition-all rounded-md flex flex-1 items-center gap-2 px-2 py-1"
                                  key={index}
                                >
                                  <div className="w-10 h-10 bg-[#eb9320]/20 rounded-full grid place-items-center">
                                    <i
                                      className={`${subItem.headerIcon} m-0 flex items-center `}
                                    />
                                  </div>

                                  <div className="flex flex-1 flex-col gap-1">
                                    <h3 className="leading-5 font-xl capitalize">
                                      {subItem.menuTitle}
                                    </h3>
                                    <p className=" text-sm font-[500]">
                                      {subItem.headerDesc}
                                    </p>
                                  </div>
                                </li>
                              </Link>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </li>
              ) : (
                <Link href={``}>
                  <li
                    className={`flex gap-1 items-center ${
                      isActive && "text-[#eb9320]"
                    }  cursor-pointer pb-5`}
                  >
                    <p className="hover:text-[#eb9320]">{item?.title}</p>
                  </li>
                </Link>
              )}
            </div>
          );
        })}

        <li
          onClick={() => {
            setOpenSearch(true);
          }}
        >
          <div className="flex gap-1 items-center cursor-pointer hover:text-[#eb9320]">
            <span>Search</span> <FaSearch />
          </div>
        </li>
        {openSearch && (
          <div className="z-50 fixed top-0 left-0 right-0 bottom-0 bg-black/75">
            <div className="relative">
              <div className="w-[80%] lg:w-[50%] h-fit overflow-x-hidden z-50 fixed top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] overflow-y-auto bg-white p-[11px] rounded-[25px] lg:rounded-[5px] shadow-xl shadow-cus">
                <div className="relative">
                  <span className="absolute right-3 top-3 text-[26px] cursor-pointer">
                    <FaSearch />
                  </span>
                  <input
                    placeholder="Search here..."
                    className="w-full h-auto font-inter text-[#021327] bg-transparent border border-[#ABABAB] outline-0 pl-3 pr-[44px] py-3 rounded-md"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyPress={handleSearchKeyPress}
                  />
                </div>
              </div>
              <p
                className="absolute top-8 right-8 text-[#FF0000] text-4xl cursor-pointer"
                onClick={() => {
                  setOpenSearch(false);
                }}
              >
                x
              </p>
            </div>
          </div>
        )}
      </ul>
    </div>
  );
};

export default NavList;

// "use client";
// import React, { useState } from "react";
// import { FaAngleDown, FaSearch } from "react-icons/fa";
// import TopInfo from "./TopInfo";
// import { navItems } from "@/constDatas/navItems";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// const NavList = ({
//   style,
//   isDropdownActive,
//   handleOnclickA,
//   handleOnclick,
// }) => {
//   const pathname = usePathname();
//   const [openSearch, setOpenSearch] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");

//   const handleSearchKeyPress = (event) => {
//     if (event.key === "Enter") {
//       window.open(`https://www.google.com/search?q=${searchQuery}`, "_blank");
//       setOpenSearch(false);
//     }
//   };

//   return (
//     <div className="w-full flex flex-col gap-2 z-40 pt-5">
//       <div className="hidden lg:block">
//         <div className="flex justify-end">
//           <TopInfo />
//         </div>
//       </div>

//       <ul className={`${style ? style : ""}`}>
//         {navItems?.map((item, index) => {
//           const isActive =
//             (pathname.includes(item?.slug) && item?.slug?.length > 1) ||
//             pathname === item?.slug;
//           const hasSubcategories = item?.Catagories?.length > 0;
//           return (
//             <div key={index}>
//               {hasSubcategories ? (
//                 <li
//                   className={`
//               group relative lg:static`}
//                   onClick={() => {
//                     handleOnclickA();
//                   }}
//                 >
//                   <div
//                     className={`flex gap-1 items-center  ${
//                       isActive && "text-[#eb9320]"
//                     }
//                 cursor-pointer pb-5 hover:text-[#eb9320]`}
//                   >
//                     <p className="">{item?.title}</p>
//                     <span className="rotate-180 group-hover:rotate-0 transition-all">
//                       <FaAngleDown />
//                     </span>
//                   </div>
//                   {isDropdownActive && (
//                     <div className="z-20 hidden px-5 py-3 w-[80vw] lg:w-[100vw] border-t-4 border-t-[#eb9320] group-hover:block lg:absolute lg:left-0 top-[100%] shadow-xl whitespace-wrap transition delay-150 bg-white">
//                       <ul className="flex flex-col gap-2">
//                         <div
//                           className={`${
//                             item?.Catagories?.length > 6 &&
//                             "grid grid-cols-1 lg:grid-cols-2"
//                           }  lg:gap-[32px] lg:overflow-y-auto overflow-y-scroll lg:h-auto h-[300px]`}
//                         >
//                           {[
//                             ...Array(
//                               Math.ceil(
//                                 item?.Catagories?.slice(0, 12)?.length / 6
//                               )
//                             ),
//                           ]?.map((_, i) => (
//                             <div key={i}>
//                               {item?.Catagories.slice(i * 6, i * 6 + 6).map(
//                                 (catagoryItem, index) => (
//                                   <Link
//                                     href={`
//                                     ${
//                                       (item?.slug === "about-us" &&
//                                         `/about-us/${catagoryItem?.slug}`) ||
//                                       (item?.slug === "students" &&
//                                         `/students`) ||
//                                       (item?.slug === "courses" &&
//                                         `/courses/${catagoryItem?.slug}`) ||
//                                       (item?.slug === "apply" &&
//                                         `/apply/${catagoryItem?.slug}`) ||
//                                       (item?.slug === "login" &&
//                                         `/login/${catagoryItem?.slug}`)
//                                     }`}
//                                     className="flex"
//                                     onClick={handleOnclick}
//                                     key={index}
//                                   >
//                                     <li className="w-full border-b hover:bg-[#F5F5F5] px-4 py-3 hover:text-[#eb9320] uppercase">
//                                       {catagoryItem?.menuTitle}
//                                     </li>
//                                   </Link>
//                                 )
//                               )}
//                             </div>
//                           ))}
//                         </div>
//                         {item?.Catagories?.length > 12 && (
//                           <Link
//                             href={`  ${
//                               (item?.slug === "about-us" &&
//                                 `/about-us/${catagoryItem?.slug}`) ||
//                               (item?.slug === "students" && `/students`) ||
//                               (item?.slug === "courses" &&
//                                 `/courses/${catagoryItem?.slug}`) ||
//                               (item?.slug === "apply" &&
//                                 `/apply/${catagoryItem?.slug}`) ||
//                               (item?.slug === "login" &&
//                                 `/login/${catagoryItem?.slug}`)
//                             }`}
//                             onClick={() => {
//                               handleOnclick();
//                             }}
//                           >
//                             <li className="border-b hover:bg-[#F5F5F5] hover:text-[#eb9320] px-4 py-3 uppercase text-[#2C2B4B] text-center">
//                               View All ...
//                             </li>
//                           </Link>
//                         )}
//                       </ul>
//                     </div>
//                   )}
//                 </li>
//               ) : (
//                 <Link href={``}>
//                   <li
//                     className={`flex gap-1 items-center ${
//                       isActive && "text-[#eb9320]"
//                     }  cursor-pointer pb-5`}
//                   >
//                     <p className="hover:text-[#eb9320]">{item?.title}</p>
//                   </li>
//                 </Link>
//               )}
//             </div>
//           );
//         })}
//         <li
//           onClick={() => {
//             setOpenSearch(true);
//           }}
//         >
//           <div className="flex gap-1 items-center cursor-pointer hover:text-[#eb9320]">
//             <span>Search</span> <FaSearch />
//           </div>
//         </li>
//         {openSearch && (
//           <div className="z-50 fixed top-0 left-0 right-0 bottom-0 bg-black/75">
//             <div className="relative">
//               <div className="w-[80%] lg:w-[50%] h-fit overflow-x-hidden z-50 fixed top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] overflow-y-auto bg-white p-[11px] rounded-[25px] lg:rounded-[5px] shadow-xl shadow-cus">
//                 <div className="relative">
//                   <span className="absolute right-3 top-3 text-[26px] cursor-pointer">
//                     <FaSearch />
//                   </span>
//                   <input
//                     placeholder="Search here..."
//                     className="w-full h-auto font-inter text-[#021327] bg-transparent border border-[#ABABAB] outline-0 pl-3 pr-[44px] py-3 rounded-md"
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                     onKeyPress={handleSearchKeyPress}
//                   />
//                 </div>
//               </div>
//               <p
//                 className="absolute top-8 right-8 text-[#FF0000] text-4xl cursor-pointer"
//                 onClick={() => {
//                   setOpenSearch(false);
//                 }}
//               >
//                 X
//               </p>
//             </div>
//           </div>
//         )}
//       </ul>
//     </div>
//   );
// };

// export default NavList;

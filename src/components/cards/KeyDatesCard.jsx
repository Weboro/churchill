// import React from "react";

// const KeyDatesCard = ({ title, subTitle, day, date, displayMonth }) => {
//   return (
//     <>
//       <div className="flex flex-col lg:flex-row justify-between items-center md:items-stretch rounded-[10px] bg-[#F3E4E4] relative">
//         <div className="w-[100px] mt-2 lg:mt-0 mx-auto lg:m-0">
//           <div className="flex flex-col text-center text-white bg-[#E59623] rounded-[12px] p-2 font-bold h-full justify-center">
//             <p>{day}</p>
//             <p className="text-[32px] leading-[28px]">{date}</p>
//             <p>{displayMonth}</p>
//           </div>
//         </div>

//         <div className="flex flex-1 flex-col lg:flex-row gap-3 items-center py-2 mx-4 ">
//           <div>
//             <div className="text-center lg:text-start">
//               <h2 className="font-bold text-[20px] text-[#2C2B4B]">{title}</h2>
//               <p>{subTitle}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default KeyDatesCard;
"use client";

import React, { useEffect } from "react";
import { useState } from "react";

const KeyDatesCard = ({ title, subTitle, day, date, displayMonth, year }) => {
  //   const [width, setWidth] = useState(window.innerWidth);
  //   const isSmallSize = width < 768;

  //   useEffect(() => {
  //     const handleResize = () => {
  //       setWidth(window.innerWidth);
  //     };

  //     window.addEventListener("resize", handleResize);

  //     return () => {
  //       window.removeEventListener("resize", handleResize);
  //     };
  //   }, []);
  const isSmallSize = false;

  return (
    <>
      <div className="bg-[#FAF4F4] flex items-center flex-col md:justify-center h-full rounded-[16px]">
        <div className="flex items-center w-full gap-2 p-2">
          <div className="flex flex-col text-center text-white bg-[#E59623] rounded-[12px] font-bold w-20 h-20 justify-center">
            <p>{day}</p>
            <p className="text-[32px] leading-[28px]">{date}</p>
            <p>{displayMonth}</p>
          </div>
          <div className="flex-1 p-2">
            <h2 className="font-bold text-[20px] text-[#2C2B4B]">{title}</h2>
            {!isSmallSize && <p>{subTitle}</p>}
          </div>
        </div>

        {isSmallSize && <p className="p-2">{subTitle}</p>}
      </div>
    </>
  );
};

export default KeyDatesCard;

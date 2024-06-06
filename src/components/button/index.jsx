import React from "react";

const Button = ({
  btnName,
  type,
  style,
  styleA,
  icon,
  styleB,
  iconA,
  contact,
  styleType = "primary",
}) => {
  return (
    <button
      type={type && type}
      className={`text-center border-2  ${
        styleType == "primary"
          ? "border font-semibold text-[14px] border-[#606060] rounded-full px-6 md:px-8 py-3 bg-[#E59623] hover:bg-[#ff9700] transition duration-200  ease-in-out hover:scale-105"
          : styleType == "secondary"
          ? " border-[#606060] rounded-full px-4 py-3 hover:bg-[#ff9700] transition duration-200  ease-in-out hover:scale-105"
          : ""
      } ${style} `}
    >
      <div className={`${styleA ? styleA : ""} `}>
        <div className={`${styleB ? styleB : ""} `}>{iconA ? iconA : ""}</div>
        <div className="flex flex-col">
          <div className="whitespace-nowrap">{btnName}</div>
          <p className="text-[16px] whitespace-nowrap">
            {contact ? contact : ""}
          </p>
        </div>
        <div className={`${styleB ? styleB : ""} `}>{icon ? icon : ""}</div>
      </div>
    </button>
  );
};

export default Button;

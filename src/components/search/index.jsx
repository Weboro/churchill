import React from "react";
import { FaSearch } from "react-icons/fa";

const Search = ({
  placeholderText = "",
  icon = <FaSearch />,
  stylesInner = "",
  stylesOuter = "",
  text,
  onSetText,
}) => {
  return (
    <>
      <div
        className={`relative w-full border border-neutral-900/25 bg-[#FAF4F4] rounded-full ${stylesOuter}`}
      >
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[20px] flex items-center justify-center text-black">
          {icon}
        </span>
        <input
          type="text"
          placeholder={placeholderText}
          value={text}
          onChange={(e) => onSetText(e.target.value)}
          className={`w-full pr-8 pl-3 py-3 rounded-full transparent-background outline-none ${stylesInner}`}
        />
      </div>
    </>
  );
};

export default Search;

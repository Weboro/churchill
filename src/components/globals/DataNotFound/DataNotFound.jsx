import React from "react";
import Lottie from "lottie-react";
import DataNotFoundAnimation from "@/constDatas/data-not-found.json";

const DataNotFound = () => {
  return (
    <div className="mx-auto sm:w-1/2">
      {<Lottie animationData={DataNotFoundAnimation} loop={true} />}
    </div>
  );
};

export default DataNotFound;
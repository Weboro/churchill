import React from "react";
import Lottie from "lottie-react";
import LoadingAnimation from "@/constDatas/loading.json";

const Loading = () => {
  return (
    <div className="mx-auto sm:w-1/2">
      {<Lottie animationData={LoadingAnimation} loop={true} />}
    </div>
  );
};

export default Loading;

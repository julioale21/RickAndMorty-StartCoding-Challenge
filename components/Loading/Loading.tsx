import React from "react";
import Lottie from "react-lottie";
import animationData from "./loading-spinner.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Loading = () => {
  return (
    <div>
      <Lottie height={400} options={defaultOptions} width={400} />
    </div>
  );
};

export default Loading;

import React from "react";
import Lottie from "react-lottie";
import animationData from "./scanning-documents.json";
import styled from "styled-components";

const LoadingContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

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
    <LoadingContainer>
      <Lottie height={300} options={defaultOptions} width={300} />
    </LoadingContainer>
  );
};

export default Loading;

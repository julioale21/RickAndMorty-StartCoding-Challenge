import React from "react";
import Lottie from "react-lottie";
import animationData from "./404-error-page-not-found-confused-robot.json";
import styled from "styled-components";
import { useRouter } from "next/router";
import { theme } from "../theme";

const Page404Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const GoBackButton = styled.button`
  padding: 0.5rem 1rem;
  color: ${theme.secondaryLight};
  background-color: ${theme.primaryLight};
  border: none;
  border-radius: 5px;
  &:hover {
    background-color: #4a9b86;
    color: white;
  }
`;

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Page404 = () => {
  const router = useRouter();
  const goBack = () => {
    router.push("/");
  };

  return (
    <Page404Container>
      <Lottie height={300} options={defaultOptions} width={300} />
      <GoBackButton onClick={goBack}>Go home</GoBackButton>
    </Page404Container>
  );
};

export default Page404;

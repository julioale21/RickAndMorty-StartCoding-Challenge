import React from "react";
import styled, { keyframes } from "styled-components";

interface Props {
  borderRadius?: string;
  height: string;
  width: string;
}

const blink = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const StyledSkeleton = styled.div<Props>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: #797878;
  border-radius: ${({ borderRadius }) => borderRadius};
  box-shadow: 1px 1px 20px #cac6c6;
  animation: ${blink} 2s;
  animation-iteration-count: infinite;
`;

const SkeletonItem: React.FC<Props> = ({ borderRadius, height, width }) => {
  return <StyledSkeleton borderRadius={borderRadius} height={height} width={width} />;
};

SkeletonItem.defaultProps = {
  borderRadius: "5px",
};

export default SkeletonItem;

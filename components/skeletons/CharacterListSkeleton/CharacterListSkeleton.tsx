import React from "react";
import { Grid } from "../../../styles/shared.styled";
import SkeletonItem from "../SkeletonItem";

const array = Array.from({ length: 10 }, (_, index) => index);

const CharacterListSkeleton: React.FC = () => {
  return (
    <Grid>
      {array.map((item) => (
        <SkeletonItem key={item} borderRadius="10px" height={"300px"} width={"95%"} />
      ))}
    </Grid>
  );
};

export default CharacterListSkeleton;

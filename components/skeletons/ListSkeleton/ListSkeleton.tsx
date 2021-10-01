import React from "react";
import { Grid } from "../../../styles/shared.styled";
import SkeletonItem from "../SkeletonItem";

const array = Array.from({ length: 20 }, (_, index) => index);

const ListSkeleton: React.FC = () => {
  return (
    <Grid>
      {array.map((item) => (
        <SkeletonItem key={item} borderRadius="10px" height={"300px"} width={"95%"} />
      ))}
    </Grid>
  );
};

export default ListSkeleton;

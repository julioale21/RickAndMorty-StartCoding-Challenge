import React from "react";
import { StyledBurger } from "./Burger.styled";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Burger: React.FC<Props> = ({ open, setOpen }) => {
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <StyledBurger open={open} onClick={handleOpen}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

export default Burger;

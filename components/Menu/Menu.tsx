import React from "react";
import { StyledMenu } from "./Menu.styled";
import Link from "next/link";

interface Props {
  open: boolean;
}

const Menu: React.FC<Props> = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <Link href="/home">
        <a>Home</a>
      </Link>

      <Link href="/home">
        <a>Characters</a>
      </Link>

      <Link href="/home">
        <a>Episodes</a>
      </Link>
    </StyledMenu>
  );
};

export default Menu;

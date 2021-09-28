import React from "react";
import { StyledMenu } from "./Menu.styled";
import Link from "next/link";

interface Props {
  open: boolean;
}

const Menu: React.FC<Props> = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <Link href="/">
        <a>Home</a>
      </Link>

      <Link href="/characters">
        <a>Characters</a>
      </Link>

      <Link href="/episodes">
        <a>Episodes</a>
      </Link>

      <Link href="/locations">
        <a>Locations</a>
      </Link>
    </StyledMenu>
  );
};

export default Menu;

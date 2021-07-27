import React, { useState, useRef } from "react";
import { Sidebar } from "../../components";
import { useMenu } from "../../hooks/useMenu";
import { Main, MainContainer } from "./Layout.styled";

const Layout: React.FC = ({ children }) => {
  const [open, setOpen] = useState(false);

  const node = useRef();

  useMenu(node, () => setOpen(false));

  return (
    <MainContainer>
      <Sidebar node={node} open={open} setOpen={setOpen} />
      <Main>{children}</Main>
    </MainContainer>
  );
};

export default Layout;

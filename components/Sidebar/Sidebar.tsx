import React from "react";
import { Menu, Burger } from "../../components";
import { SidebarContainer } from "./Sidebar.styled";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
  node: any;
}
const Sidebar: React.FC<Props> = ({ open, setOpen, node }) => {
  return (
    <SidebarContainer ref={node}>
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} />
    </SidebarContainer>
  );
};

export default Sidebar;

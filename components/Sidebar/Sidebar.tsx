import React from "react";
import { Menu, Burger } from "../../components";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
  node: any;
}
const Sidebar: React.FC<Props> = ({ open, setOpen, node }) => {
  return (
    <div ref={node}>
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} />
    </div>
  );
};

export default Sidebar;

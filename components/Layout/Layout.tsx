import React, { useState, useRef } from "react";
import { Sidebar } from "../../components";
import { useMenu } from "../../hooks/useMenu";

const Layout: React.FC = ({ children }) => {
  const [open, setOpen] = useState(false);

  const node = useRef();

  useMenu(node, () => setOpen(false));

  return (
    <>
      <Sidebar node={node} open={open} setOpen={setOpen} />
      <main>{children}</main>
    </>
  );
};

export default Layout;

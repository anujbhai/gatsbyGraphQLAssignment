import * as React from "react";

import { sidebarNav } from "./Layout.module.css"

const Sidebar = () => {

  return (
    <>
      <sidebar>
        <nav className={ sidebarNav }>
          <ul>
            <li>link</li>
          </ul>
        </nav>
      </sidebar>
    </>
  );
};

export default Sidebar;

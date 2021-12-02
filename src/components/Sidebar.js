import * as React from "react";

import { sidebarNav } from "./Layout.module.css"

const Sidebar = () => {
  return (
    <>
      <sidebar>
        <nav className={ sidebarNav }>
          <ul>
            <li>About</li>
            <li>Terms of service</li>
            <li>Privacy Policy</li>
          </ul>
        </nav>
      </sidebar>
    </>
  );
};

export default Sidebar;

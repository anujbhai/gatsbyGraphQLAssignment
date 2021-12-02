import * as React from "react";

import { headerNav } from "./Layout.module.css"

const Navbar = () => {
  return (
    <>
      <nav className={ headerNav }>
        <ul>
          <li>Home</li>
          <li>Posts</li>
          <li>Authors</li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

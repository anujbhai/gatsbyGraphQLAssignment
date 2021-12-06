import * as React from "react";
import { Link } from "gatsby";

import { headerNav } from "./Layout.module.css"

const Navbar = () => {
  return (
    <>
      <nav className={ headerNav }>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/posts">Posts</Link></li>
          <li><Link to="/authors">Authors</Link></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

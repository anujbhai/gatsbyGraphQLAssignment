import * as React from "react";
import { Link } from "gatsby";

import {
  container,
  contentWrapper,
} from "./Layout.module.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = props => {
  const { pageTitle, children } = props;

  return (
    <>
      <title>{ pageTitle }</title>

      <header>
        <div className={ container }>
          <Navbar />
        </div>
      </header>

      <div className={ contentWrapper }>
        <div className={ container }>
          <h1>{ pageTitle }</h1>

          { children }
        </div>

        <Sidebar />
      </div>

      <Footer />
    </>
  );
};

export default Layout;

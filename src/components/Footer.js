import * as React from "react";

import { container } from "./Layout.module.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className={ container }>
          <p><strong>Disclaimer:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a sodales purus. Pellentesque dolor ipsum, condimentum nec nunc ac, luctus iaculis turpis. Quisque sodales rutrum nisi</p>

          <p>2021-22 All Rights Reserved &reg;</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;

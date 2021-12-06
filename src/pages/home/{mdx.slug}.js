import * as React from "react";
import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Layout from "../../components/Layout";
import { sidebarNav } from "../../components/Layout.module.css";

const HomeContent = props => {
  const { data } = props;

  return (
    <Layout pageTitle={ data.mdx.frontmatter.title }>
      <MDXRenderer>
        { data.mdx.body }
      </MDXRenderer>

      <sidebar>
        <nav className={ sidebarNav }>
          <ul>
            {
              data.allFile.nodes.map(node => (
                <li key={ node.id }><Link to={ `/home/${ node.childMdx.slug }` }>{ node.childMdx.frontmatter.title }</Link></li>
              ))
            }
          </ul>
        </nav>
      </sidebar>
    </Layout>
  );
};

export const query = graphql`
  query($id: String) {
    allFile(filter: {sourceInstanceName: {eq: "home"}}) {
      nodes {
        id
        childMdx {
          frontmatter {
            title
          }
          slug
        }
      }
    }
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
      body
    }
  }
`;

export default HomeContent;

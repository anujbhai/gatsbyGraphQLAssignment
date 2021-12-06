import * as React from "react";
import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Layout from "../../components/Layout";
import { sidebarNav } from "../../components/Layout.module.css";

const AuthorsContent = props => {
  const { data } = props;

  return (
    <Layout pageTitle={ data.mdx.frontmatter.author }>
      <h5>Blog written: <span>{ data.mdx.frontmatter.title }</span></h5>

      <MDXRenderer>
        { data.mdx.body }
      </MDXRenderer>

      <sidebar>
        <nav className={ sidebarNav }>
          <ul>
            {
              data.allFile.nodes.map(node => (
                <li key={ node.id }><Link to={ `/authors/${ node.childMdx.slug }` }>{ node.childMdx.frontmatter.author }</Link></li>
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
    allFile(filter: {sourceInstanceName: {eq: "authors"}}) {
      nodes {
        id
        childMdx {
          frontmatter {
            title
            author
          }
          slug
        }
      }
    }
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        author
      }
      body
    }
  }
`;

export default AuthorsContent;

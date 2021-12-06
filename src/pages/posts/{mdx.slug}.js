import * as React from "react";
import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Layout from "../../components/Layout";
import { sidebarNav } from "../../components/Layout.module.css";

const PostContent = props => {
  const { data } = props;

  return (
    <Layout pageTitle={ data.mdx.frontmatter.title }>
      <h5>Published on: <span>{ data.mdx.frontmatter.date }</span></h5>
      <h5>Written by: <span>{ data.mdx.frontmatter.author }</span></h5>

      <hr />

      <MDXRenderer>
        { data.mdx.body }
      </MDXRenderer>
      
      <sidebar>
        <nav className={ sidebarNav }>
          <ul>
          {
            data.allFile.nodes.map(node => (
              <li key={ node.id }>
                <Link to={ `/posts/${ node.childMdx.slug }` }>{ node.childMdx.frontmatter.title }</Link>
                <p>{ node.childMdx.frontmatter.author } | { node.childMdx.frontmatter.date }</p>
              </li>
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
    allFile(filter: {sourceInstanceName: {eq: "posts"}}) {
      nodes {
        id
        childMdx {
          frontmatter {
            title
            date(formatString: "MMMM D, YYYY")
            author
          }
          slug
        }
      }
    }
    mdx(id: { eq: $id }) {
      frontmatter {
        author
        title
        date(formatString: "MMMM D, YYYY")
      }
      body
    }
  }
`;

export default PostContent;

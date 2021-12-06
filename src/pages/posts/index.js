import * as React from "react";
import { graphql, Link } from "gatsby";

import { sidebarNav } from "../../components/Layout.module.css";
import Layout from "../../components/Layout";

const PostPage = props => {
  const { data } = props;

  return (
    <>
      <Layout pageTitle="Post Page">
        <h2>Select a post from the sidebar</h2>

        <p>Morbi nec dui erat. Cras eget nisl cursus, ultrices quam eget, semper nunc. Nunc placerat nibh non congue facilisis. Quisque ullamcorper fringilla placerat.</p>

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
    </>
  );
};

export const query = graphql`
  query {
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
  }
`;

export default PostPage;
